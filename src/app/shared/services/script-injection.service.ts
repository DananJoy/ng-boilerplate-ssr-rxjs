import { Renderer2, Inject, Injectable } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

@Injectable()
export class ScriptInjectionService {
	constructor(@Inject(DOCUMENT) private _document) {}

	/**
	 * function to inject external script to application.
	 * @param renderer2     The Angular Renderer2 
	 * @param scriptString  The script string that we want to inject to document
	 * @returns void
	 */
	public injectScript(renderer2: Renderer2, scriptString: any): void {
		const isAsyncLoad = true;
		let s = renderer2.createElement('script');
		// s.type = `javascript`;
		s.text = scriptString;
		// s.async = isAsyncLoad;
		// s.defer = isAsyncLoad;
		renderer2.appendChild(this._document.body, s);
	}
}
