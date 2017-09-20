import {
	Injectable,
	ComponentFactoryResolver,
	ApplicationRef,
	Injector,
	Optional,
	EmbeddedViewRef
}									from '@angular/core';

import { Observable, Observer }		from 'rxjs/Rx';

import { LoadingComponent }			from './loading.component';

@Injectable()
export class LoadingService {

  	constructor(
  		private resolver: ComponentFactoryResolver,
  		private injector: Injector,
  		private applicationRef: ApplicationRef
  	) { }

  	loading(time?: number) {
  		let componentFactory = this.resolver.resolveComponentFactory(LoadingComponent),
  			componentRef = componentFactory.create(this.injector),
  			componentRootNode = (componentRef.hostView as EmbeddedViewRef<any>).rootNodes[0] as HTMLElement;
  		// 视图添加到应用
  		this.applicationRef.attachView(componentRef.hostView);
  		// 容器销毁时释放view
  		componentRef.onDestroy( () => {
  			this.applicationRef.detachView(componentRef.hostView);
  		} );

  		// 添加到页面
  		document.body.appendChild(componentRootNode);

  		if (time) componentRef.instance.time = time;

  		// 订阅hide事件
  		componentRef.instance.hide.subscribe( () => {
  			setTimeout( () => componentRef.destroy(), 300 );
  		} );
  		return componentRef.instance.onShow();
  	}

}
