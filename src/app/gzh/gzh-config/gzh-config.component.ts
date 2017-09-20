import { Component, OnInit } 	from '@angular/core';

import { flyIn }				from '../../animations/fly-in';
import { ApiService }			from '../../share/api.service';

@Component({
  selector: 'app-gzh-config',
  templateUrl: './gzh-config.component.html',
  styleUrls: ['./gzh-config.component.scss'],
  animations: [flyIn]
})
export class GzhConfigComponent implements OnInit {

	lists: any[] = [];
	cols = [
		{header: 'id', field: 'id'},
		{header: '键', field: 'name'},
		{header: '值', field: 'value'},
		{header: '类型', field: 'type'},
		{header: '说明', field: 'explain'},
		{header: '修改时间', field: 'updated_at'}
	];
	eidtable = [ 'name', 'value', 'type', 'explain' ];
	types = {
		string: '字符串',
		array: '数组'
	}

	constructor(
		public as: ApiService
	) { }

	ngOnInit() {
		this.loadData();
	}

	loadData() {
		this.as.get('gzh/config')
				.subscribe( res => this.lists = res['lists'] )
	}

}
