import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoadingService }		from './loading/loading.service';
import { LoadingComponent }		from './loading/loading.component';

@NgModule({
  	imports: [
    	CommonModule
  	],
  	exports: [
  		LoadingComponent
  	],
  	declarations: [
  		LoadingComponent
  	],
  	providers: [
  		LoadingService
  	],
  	entryComponents: [
  		LoadingComponent
  	]
})
export class ShareModule { }
