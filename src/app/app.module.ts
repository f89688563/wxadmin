import { BrowserModule } 			from '@angular/platform-browser';
import { NgModule } 				from '@angular/core';
import { FormsModule }				from '@angular/forms';
import { BrowserAnimationsModule }	from '@angular/platform-browser/animations';
import { RouterModule }				from '@angular/router';
import { HttpClientModule }   from '@angular/common/http';
// 开发环境使用hash模式，生产环境去掉，改为h5mode
import {
  HashLocationStrategy,
  LocationStrategy
}                                   from '@angular/common';

import { routes }					from './app-routes';

import { AppComponent } 			from './app.component';

import { ApiService }         from './share/api.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    ApiService
  ],
  entryComponents: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
