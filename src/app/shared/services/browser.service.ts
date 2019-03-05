import { Injectable } from '@angular/core';
import { PlatformService } from './platform.service';
import * as _is from 'is_js';

@Injectable()
export class BrowserService {
	constructor(private platform: PlatformService) {}

	/**
	 * function to get browser name.
	
	 * @returns {string}
	 */
	public getBrowser(): string {
		if (this.platform.isBrowser) {
			let browser = 'Unknown';
			if (_is.chrome()) {
				browser = 'Chrome';
			}
			if (_is.ie()) {
				browser = 'IE';
			}
			if (_is.firefox()) {
				browser = 'Firefox';
			}
			if (_is.edge()) {
				browser = 'Edge';
			}
			if (_is.opera()) {
				browser = 'Opera';
			}
			if (_is.safari()) {
				browser = 'Safari';
			}

			return browser;
		}
	}
}
