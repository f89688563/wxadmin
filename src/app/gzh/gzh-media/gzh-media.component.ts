import { Component, OnInit } 	from '@angular/core';
import { HttpParams }			from '@angular/common/http';
import { Router, ActivatedRoute}	from '@angular/router';

import { flyIn }				from '../../animations/fly-in';
import { LoadingService }		from '../../share/loading/loading.service';
import { ApiService }			from '../../share/api.service';

@Component({
  	selector: 'app-gzh-media',
  	templateUrl: './gzh-media.component.html',
  	styleUrls: ['./gzh-media.component.scss'],
  	animations: [flyIn]
})
export class GzhMediaComponent implements OnInit {

	page = 1;
	items: any[] = [];
	totalRecords = 55;
	type = 'news';
	selectType = [
		{ name: '图文消息', value: 'news' },
		{ name: '语音', value: 'voice' },
		{ name: '视频', value: 'video' }
	];

  	constructor(
  		public ls: LoadingService,
  		public as: ApiService,
  		public ar: ActivatedRoute,
  		public router: Router
  	) { }

  	ngOnInit() {
  		this.ar.params.subscribe( params => {
  			if (params.page) this.page = params.page;
  			if (params.type) this.type = params.type;
  			this.loadItems();
  		} )
  	}

  	loadItems() {
  		let loading;
  		setTimeout( () => loading = this.ls.loading(10000), 100 );
  		let params = new HttpParams()
  						.set('type', this.type)
  						.set('page', this.page+'')
  						// .set('total', '1')
  		this.as.get('gzh/media', params)
  				.subscribe( res => {
  					loading.onHide();
  					this.items = res['item'];
  					this.totalRecords = res['total_count'];
  					// this.totalRecords = res['total'][this.type+'_count'];
  				} )
  	}

  	paginate(event: any) {
        //event.first = Index of the first record
        //event.rows = Number of rows to display in new page
        //event.page = Index of the new page
        //event.pageCount = Total number of pages
        this.router.navigate(['/gzh/media', {type: this.type, page: +event.page+1}]);
    }

}
