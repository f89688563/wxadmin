import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule }			from '@angular/router';
import { FormsModule, ReactiveFormsModule }				from '@angular/forms';

import {
	GrowlModule,
  DataTableModule,
  PaginatorModule,
  DropdownModule
} 								from 'primeng/primeng';

import { ShareModule }    from '../share/share.module';

import { routes }				from './gzh-routes';
import { FindInPipe } from '../share/find-in/find-in.pipe';

import { GzhConfigComponent } from './gzh-config/gzh-config.component';
import { GzhButtonComponent } from './gzh-button/gzh-button.component';
import { GzhMenuComponent } from './gzh-menu/gzh-menu.component';
import { GzhMediaComponent } from './gzh-media/gzh-media.component';
import { GzhUserComponent } from './gzh-user/gzh-user.component';
import { GzhConfigEditComponent } from './gzh-config/gzh-config-edit/gzh-config-edit.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    GrowlModule,
    DataTableModule,
    PaginatorModule,
    DropdownModule,
    ShareModule
  ],
  providers: [
  ],
  declarations: [
  	FindInPipe,
  	GzhConfigComponent,
  	GzhButtonComponent,
  	GzhMenuComponent,
  	GzhMediaComponent,
  	GzhUserComponent,
  	GzhConfigEditComponent
  ]
})
export class GzhModule { }
