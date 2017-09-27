import { Component, OnInit } 	from '@angular/core';

import { flyIn }				from '../../animations/fly-in';
import { ApiService }			from '../../share/api.service';
import { LoadingService }		from '../../share/loading/loading.service';

@Component({
  	selector: 'app-gzh-user',
  	templateUrl: './gzh-user.component.html',
  	styleUrls: ['./gzh-user.component.scss'],
  	animations: [ flyIn ]
})
export class GzhUserComponent implements OnInit {

	lists: any[] = []
	msgs = []
	cols = [
		{header: 'id', field: 'id'},
		{header: 'openid', field: 'openid'},
		{header: '昵称', field: 'nickname'},
		{header: '性别', field: 'sex'},
		{header: '关注时间', field: 'subscribe_time'},
		{header: '操作', field: 'operation'}
	]
	gender = ["未知", "男", "女"]
	display: boolean = false
	info: any = {}
	displayLabel: boolean = false
	disabledLabel: boolean = false
	tags: any[] = []
	tagId = 0
	openId = ''

	constructor(
		public as: ApiService,
		public ls: LoadingService
	) { }

	ngOnInit() {
    this.loadData()
	}

	show(openid: string) {
		let loading = this.ls.loading(5000)
		
		this.as.get(`gzh/user/wxinfo/${openid}`)
						.subscribe( res => {
							this.info = res
							loading.onHide()
							this.display = true
						} )
	}

	addTag(openId: string) {
		this.displayLabel = true
		this.openId = openId
		if (this.tags.length === 0) {
			this.as.get('gzh/tags')
							.subscribe( res => this.tags = res['tags'] )
		}
	}

	setTag() {
		this.disabledLabel = true
		if (this.tagId > 0) {
			this.as.post('gzh/user/setTag', {openId: this.openId, tagId: this.tagId})
							.subscribe( res => {
								if (res['errcode'] === 0) {
									this.msgs = [{severity: 'success', summary: 'success', detail: '操作成功'}]
									this.openId = ''
									this.tagId = 0
									this.displayLabel = false
									this.disabledLabel = false
								} else {
									this.msgs = [{severity: 'error', summary: 'error', detail: res['errmsg']}]
								}
							} )
		} else {
			this.msgs = [{severity: 'error', summary: 'error', detail: '请选择标签'}]
		}
	}

  loadData() {
		let loading;
		setTimeout( () => loading = this.ls.loading(5000), 100 )
    this.as.get('gzh/user')
        .subscribe( res => {
					loading.onHide()
					this.lists = res['lists']
				} )
	}

}
