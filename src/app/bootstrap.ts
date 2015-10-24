import { provide, bootstrap, FORM_PROVIDERS } from 'angular2/angular2';
import { HTTP_PROVIDERS } from 'angular2/http';
import { ROUTER_PRIMARY_COMPONENT, APP_BASE_HREF, ROUTER_PROVIDERS as NG2_ROUTER_PROVIDERS, LocationStrategy, HashLocationStrategy } from 'angular2/router';

import { SERVICES_PROVIDERS } from './services';
import { App } from './components';

const ROUTER_PROVIDERS: Array<any> = [
	NG2_ROUTER_PROVIDERS,
	provide(ROUTER_PRIMARY_COMPONENT, {
		useValue: App
	}),
	provide(LocationStrategy, {
		useClass: HashLocationStrategy
	}),
	provide(APP_BASE_HREF, {
		useValue: '/'
	})
];

const APP_PROVIDERS: Array<any> = [
	HTTP_PROVIDERS,
	FORM_PROVIDERS,
	ROUTER_PROVIDERS,
	SERVICES_PROVIDERS
];

bootstrap(App, APP_PROVIDERS);