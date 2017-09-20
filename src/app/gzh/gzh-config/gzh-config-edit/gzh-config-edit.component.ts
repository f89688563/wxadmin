import { Component, OnInit } 		from '@angular/core';
import { Router, ActivatedRoute }	from '@angular/router';
import {
	FormGroup,
	FormBuilder,
	Validators
}									from '@angular/forms';

import { flyIn }					from '../../../animations/fly-in';
import { ApiService }				from '../../../share/api.service';
import { Config }					from '../config';

@Component({
  	selector: 'app-gzh-config-edit',
  	templateUrl: './gzh-config-edit.component.html',
  	styleUrls: ['./gzh-config-edit.component.scss'],
  	animations: [flyIn]
})
export class GzhConfigEditComponent implements OnInit {

	form: FormGroup;
	info = {
		id: '',
		name: '',
		value: '',
		type: '',
		explain: ''
	};
	id;
	type = [
		{ name: '字符串', value: 'string' },
		{ name: '数组', value: 'array' }
	];
	msgs = [];

  	constructor(
  		public ar: ActivatedRoute,
  		public router: Router,
  		public fb: FormBuilder,
  		public as: ApiService
  	) { }

  	ngOnInit() {
  		this.ar.params.subscribe( p => {
  			this.id = p.id;
  			if (this.id>0) {
  				this.loadInfo();
  			}
  		} );
		this.buildForm();
  	}

  	loadInfo() {
  		this.as.get('gzh/config/'+this.id)
  				.subscribe( res => {
  					this.info = res['info'];
  					this.buildForm();
  				} )
  	}

  	onSubmit() {
  		let e = this.formErrors;
  		for (const i in e) {
  			if (e[i]) {
  				this.msgs.push({severity: 'error', summary: 'error', detail: e[i]});
  				return false;
  			}
  		}

  		// Object.values(this.formErrors)
  		// 		.map( e => {
  		// 			if (e) {
	  	// 				this.msgs.push({severity: 'error', summary: 'error', detail: e});
  		// 			}
  		// 		} );
  		let data = this.form['_value'],
  			id = this.id;
  		if (id>0) {
  			this.as.put('gzh/config/'+id, data)
  					.subscribe( res => {
  						if (res['errcode'] === 0 ) {
  							history.back();
  						} else {
  							this.msgs.push({severity: 'error', summary: 'error', detail: res['errmsg']});
  						}
  					} )
  		} else {
  			this.as.post('gzh/config', data)
  					.subscribe( res => {
  						if (res['errcode'] === 0 ) {
  							history.back();
  						} else {
  							this.msgs.push({severity: 'error', summary: 'error', detail: res['errmsg']});
  						}
  					} )
  		}
  	}

  	buildForm() {
  		this.form = this.fb.group({
  			'name': 	[ this.info['name'], Validators.required ],
  			'value': 	[ this.info['value'], Validators.required ],
  			'type': 	[ this.info['type'], Validators.required ],
  			'explain': 	[ this.info['explain'], Validators.required ]
  		});
  		this.form.valueChanges.subscribe( data => {
  			this.onValueChanged(data)
  		} );
  		this.onValueChanged();
  	}

  	onValueChanged(data?: any) {
  		if (!this.form) return;
  		const form = this.form;

  		for ( const field in this.formErrors ) {
  			this.formErrors[field] = '';
  			const control = form.get(field);

  			if ( control && control.invalid ) {
  				const message = this.validationMessages[field];
  				for ( const key in control.errors ) {
  					this.formErrors[field] += message[key] + ' ';
  				}
  			}
  		}
  	}

  	formErrors = {
  		'name': 	'',
  		'value': 	'',
  		'type': 	'',
  		'explain': 	''
  	};

  	validationMessages = {
  		'name': 	{ 'required': '键名不能为空' },
  		'value': 	{ 'required': '值不能为空' },
  		'type': 	{ 'required': '类型必选' },
  		'explain': 	{ 'required': '说明不能为空' },
  	};
}
