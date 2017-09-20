import { Routes }		from '@angular/router';

export const routes: Routes = [
	{ path: 'gzh', loadChildren: './gzh/gzh.module#GzhModule' }
];