import { Routes }				from '@angular/router';

import { GzhConfigComponent } 	from './gzh-config/gzh-config.component';
import { GzhButtonComponent } 	from './gzh-button/gzh-button.component';
import { GzhMediaComponent } 	from './gzh-media/gzh-media.component';
import { GzhUserComponent } 	from './gzh-user/gzh-user.component';
import { GzhConfigEditComponent } from './gzh-config/gzh-config-edit/gzh-config-edit.component';
import { GzhTagsComponent } from './gzh-tags/gzh-tags.component';

export const routes: Routes = [
	{
		path: '',
		// component: GzhConfigComponent,
		children: [
			{ path: 'config', component: GzhConfigComponent },
			{ path: 'config/:id', component: GzhConfigEditComponent },
			{ path: 'button', component: GzhButtonComponent },
			{ path: 'media', component: GzhMediaComponent },
			{ path: 'media/:id', component: GzhMediaComponent },
			{ path: 'user', component: GzhUserComponent },
			{ path: 'tags', component: GzhTagsComponent },
			{ path: '', redirectTo: 'config', pathMatch: 'full'}
		]
	}
];