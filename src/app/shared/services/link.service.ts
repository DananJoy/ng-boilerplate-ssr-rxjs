import { Injectable, Inject } from '@angular/core';
import { ɵgetDOM as getDOM, DOCUMENT } from '@angular/platform-browser';

@Injectable()
export class LinkService {
	private canonical: HTMLElement;
	private dom: any;
	private document: any;
	private headElement: HTMLElement;

	constructor(@Inject(DOCUMENT) document:any) {
		this.dom = getDOM();
		this.document = document;
		this.headElement = this.document.head;
		this.canonical = this.createElement();
	}

	private createElement() {
		let el:HTMLElement;
		el = this.dom.createElement('link');

		this.setElementAttribute(el, 'rel', 'canonical');

		this.headElement.appendChild(el);

		return el;
	}

	public setCanonicalURL(newUrl: string) {
		this.setElementAttribute(this.canonical, 'href', newUrl);
	}

	private setElementAttribute(el: HTMLElement, name: string, attr: string) {
		return this.dom.setAttribute(el, name, attr);
	}
}