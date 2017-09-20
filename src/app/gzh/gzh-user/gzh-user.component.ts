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

  	constructor(
  		public as: ApiService,
  		public ls: LoadingService
  	) { }

  	ngOnInit() {
  	}

  	loadItems() {
  		this.as.get('gzh/user')
  	}

}
