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

	constructor(
		public as: ApiService,
		public ls: LoadingService
	) { }

	ngOnInit() {
    this.loadData()
	}

	show(id: string) {
		let loading = this.ls.loading(5000)
		
		this.as.get(`gzh/user/wxinfo/${id}`)
						.subscribe( res => {
							console.log(res)
							this.info = res
							loading.onHide()
							this.display = true
						} )
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
