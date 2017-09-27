import { Component, OnInit } from '@angular/core'

import { ConfirmationService } from 'primeng/primeng'

import { ApiService }			from '../../share/api.service'
import { LoadingService }		from '../../share/loading/loading.service'
import { flyIn }				from '../../animations/fly-in'

@Component({
  selector: 'app-gzh-tags',
  templateUrl: './gzh-tags.component.html',
  styleUrls: ['./gzh-tags.component.scss'],
  animations: [flyIn]
})
export class GzhTagsComponent implements OnInit {

  display: boolean = false
  selectedItem = { name: '', id: 0, count: 0 }
  msgs = []
  lists: any[] = []
  loading
  disabled = false

  constructor(
    public as: ApiService,
    public ls: LoadingService,
    public cs: ConfirmationService
  ) { }

  ngOnInit() {
    this.loadData()
  }

  loadData() {
    setTimeout( () => {      
      this.loading = this.ls.loading(5000)
    }, 100 )
    this.as.get('gzh/tags')
            .subscribe( res => {
              this.loading.onHide()
              this.lists = res['tags']
            } )
  }
  
  edit(item?: any) {
    this.disabled = false
    this.display = true
    if (item !== undefined) this.selectedItem = item
  }

  del(item) {
    console.log(item)
    this.cs.confirm({
      header: '操作提示',
      message: '确定删除该标签？',
      accept: () => {
        this.as.del(`gzh/tags/${item.id}`)
                .subscribe( res => {
                  if (res['errcode'] === 0) {
                    this.lists = this.lists.filter( i => i !== item )
                  } else {
                    this.msgs = [{severity: 'error', summary: 'error', detail: res['errmsg']}]
                  }
                } )
      }
    })
  }
  
  save() {
    const name = this.selectedItem.name.trim()
    const id = this.selectedItem.id
    this.loading = this.ls.loading(5000)
    
    if (name) {
      this.disabled = true
      let subscribe;
      if (id) {
        subscribe = this.as.put(`gzh/tags/${id}`, {name})
      } else {
        subscribe = this.as.post('gzh/tags', {name})
      }
      subscribe.subscribe( res => {
        this.disabled = false
        this.loading.onHide()

        if (res.errcode === 0) {
          this.display = false
          if (!id) {
            this.selectedItem.id = res['tag']['id']
            this.lists.push(this.selectedItem)
            this.selectedItem = { name: '', id: 0, count: 0 }
          }
        } else {
          this.msgs = [{severity: 'error', summary: 'error', detail: res['errmsg']}]
        }
      } )
    } else {
      this.loading.onHide()
      this.msgs = [{severity: 'error', summary: 'error', detail: '标签必须'}]
    }
  }
}
