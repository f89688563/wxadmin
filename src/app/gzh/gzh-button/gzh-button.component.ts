import { Component, OnInit } 	from '@angular/core';

import { ApiService }			from '../../share/api.service';
import { LoadingService }		from '../../share/loading/loading.service';
import { flyIn }				from '../../animations/fly-in';

@Component({
  selector: 'app-gzh-button',
  templateUrl: './gzh-button.component.html',
  styleUrls: ['./gzh-button.component.scss'],
  animations: [flyIn]
})
export class GzhButtonComponent implements OnInit {

	msgs = [];
	buttons: any[] = [
		{ name: '+', sub_button: [ {name: '111'}, {name: '222'} ] },
		{ name: '+', sub_button: [] },
		{ name: '+', sub_button: [] }
	];
	index: number|string;
	type = [
		{ name: "", value: "" },
		{ name: "click", value: "click" },
		{ name: "view", value: "view" },
		{ name: "miniprogram", value: "小程序" },
		{ name: "scancode_push", value: "扫码推送" },
		{ name: "scancode_waitmsg", value: "扫码推送并弹出'消息接收中'" },
		{ name: "pic_sysphoto", value: "拍照发图" },
		{ name: "pic_photo_or_album", value: "拍照或选图" },
		{ name: "pic_weixin", value: "弹出微信相册发图器" },
		{ name: "location_select", value: "选择地理位置" },
		{ name: "media_id", value: "下发素材消息" },
		{ name: "view_limited", value: "跳转图文消息" }
	];
	keyItems = [
		'click',
		'scancode_push',
		'scancode_waitmsg',
		'pic_sysphoto',
		'pic_photo_or_album',
		'pic_weixin',
		'location_select'
	];
	mediaIdItems = [ 'media_id', 'view_limited' ];
	selected: any = {
		name: '',
		type: ''
	};

	constructor(
		public as: ApiService,
		public ls: LoadingService
	) { }

	ngOnInit() {
		this.loadButtons();
	}

	loadButtons() {
		let loading;
		setTimeout( () => loading = this.ls.loading(5000), 100 );
		this.as.get('gzh/button').subscribe( res => {
			loading.onHide();
			this.buttons = res['button']['menu']['button'];
		} )
	}

	// 显示当前按钮属性
	showItem(item: any, i?: number|string) {
		if (i>=0) this.index = i;
		this.initButtons();
		this.selected = item;
	}

	// 增加按钮
	addButton(i: number|string) {
		// 去掉当前菜单其他属性
		this.initCurrentParent();
		// 去掉未编辑的子按钮
		this.initButtons();

		this.selected = {};
		this.buttons[i]['sub_button'].unshift(this.selected);
	}

	// 去掉当前菜单其他属性
	initCurrentParent() {
		this.buttons[this.index]['type'] = '';
		this.buttons[this.index]['url'] = '';
		this.buttons[this.index]['key'] = '';
		this.buttons[this.index]['appid'] = '';
		this.buttons[this.index]['pagepath'] = '';
		this.buttons[this.index]['media_id'] = '';
	}

	// 改变类型
	changeType() {
		// 清空子按钮
		if (this.selected['type']) {
			this.selected['sub_button'] = [];
		}
	}

	// 去掉未编辑的子按钮
	initButtons() {
		this.buttons = this.buttons.map( item => {
			item['sub_button'] = item['sub_button'].filter( sub => {
				if (sub['name']) return sub;
			} )
			return item;
		} );
	}

	// 保存
	save() {
		// 去掉未命名的按钮
		this.buttons = this.buttons.filter( item => {
			if (item['name']) {
				return item;
			}
		} );

		this.initButtons();

		let buttons = JSON.stringify(this.buttons);
		this.as.put('gzh/button/1', {buttons}).subscribe( res => {
			this.msgs = [];
			if (res['errcode'] === 0) {
				this.msgs.push({severity: 'success', summary: 'success', detail: '操作成功'});
			} else {
				this.msgs.push({severity: 'error', summary: 'error', detail: res['errmsg']||'操作失败'});
			}
		} );
	}

}
