import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule }			from '@angular/router'
import { FormsModule, ReactiveFormsModule }				from '@angular/forms'

import {
	GrowlModule,
  DataTableModule,
  PaginatorModule,
  DropdownModule,
  DialogModule,
  ConfirmDialogModule,
  ConfirmationService
} 								from 'primeng/primeng'

import { ShareModule }    from '../share/share.module'

import { routes }				from './gzh-routes'
import { FindInPipe } from '../share/find-in/find-in.pipe'

import { GzhConfigComponent } from './gzh-config/gzh-config.component'
import { GzhButtonComponent } from './gzh-button/gzh-button.component'
import { GzhMenuComponent } from './gzh-menu/gzh-menu.component'
import { GzhMediaComponent } from './gzh-media/gzh-media.component'
import { GzhUserComponent } from './gzh-user/gzh-user.component'
import { GzhConfigEditComponent } from './gzh-config/gzh-config-edit/gzh-config-edit.component'
import { GzhTagsComponent } from './gzh-tags/gzh-tags.component'

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
    DialogModule,
    ConfirmDialogModule,
    ShareModule
  ],
  providers: [
    ConfirmationService
  ],
  declarations: [
  	FindInPipe,
  	GzhConfigComponent,
  	GzhButtonComponent,
  	GzhMenuComponent,
  	GzhMediaComponent,
  	GzhUserComponent,
  	GzhConfigEditComponent,
  	GzhTagsComponent
  ]
})
export class GzhModule { }
