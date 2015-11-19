import {
	CORE_DIRECTIVES,
	FORM_DIRECTIVES,
	ViewEncapsulation,
	Component
} from 'angular2/core';
import { ROUTER_DIRECTIVES } from 'angular2/router';

import { AuthClient, FirebaseAuthProvider } from '../../services';
import { Glyph } from '../glyph/glyph';

@Component({
	selector: 'login',
	encapsulation: ViewEncapsulation.Emulated, // ViewEncapsulation.Emulated, ViewEncapsulation.Native, ViewEncapsulation.None (default)
	templateUrl: 'app/components/login/login.html',
	styleUrls: [
		'app/components/login/login.css'
	],
	directives: [
		CORE_DIRECTIVES,
		FORM_DIRECTIVES,
		ROUTER_DIRECTIVES,
		Glyph
	]
})

export class Login {
	isAuthenticationFailed: boolean = false;
	isAuthenticating: boolean = false;
	remember: boolean = false;
	credentials: FirebaseCredentials = {
		email: '',
		password: ''
	};
	private _client: AuthClient;
	constructor(client: AuthClient) {
		this._client = client;
	}
	loginWithGithub(event: MouseEvent) {
		this._client.loginWithProvider(FirebaseAuthProvider.Github, this.remember);
	}
	loginWithGoogle(event: MouseEvent) {
		this._client.loginWithProvider(FirebaseAuthProvider.Google, this.remember);
	}
	loginWithCredentials() {
		this.isAuthenticationFailed = false;
		this.isAuthenticating = true;
		this._client.loginWithCredentials(this.credentials, this.remember).then(null, (error) => {
				this.isAuthenticationFailed = true;
				this.isAuthenticating = false;
			}
		);
	}
}