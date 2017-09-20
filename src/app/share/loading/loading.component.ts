import {
	Component,
	OnInit,
	OnDestroy,
	Input,
	Output,
	EventEmitter
} 				from '@angular/core';

@Component({
  	selector: 'app-loading',
  	templateUrl: './loading.component.html',
  	styleUrls: ['./loading.component.scss'],
  	host: {
  		'[hidden]': '!_showd'
  	}
})
export class LoadingComponent implements OnInit, OnDestroy {

	@Input('app-loading') time: number = 3000;
	@Output() hide = new EventEmitter();
	_showd: boolean = false;
	private timer: any;

  	constructor() { }

  	ngOnInit() {
  	}

  	onShow() {
  		this._showd = true;
  		this.timer = setTimeout( () => this.onHide(), this.time );
  		return this;
  	}

  	onHide() {
  		this._showd = false;
  		this.hide.emit();
  	}

  	ngOnDestroy() {
  		if (this.timer) {
  			clearTimeout(this.timer);
  			this.timer = null;
  		}
  	}

}
