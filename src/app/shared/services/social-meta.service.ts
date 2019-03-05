// import { Injectable } from '@angular/core';
// import { Meta } from '@angular/platform-browser';

// interface FacebookMeta {
// 	url?: string;
// 	description?: string;
// 	title?: string;
// }

// @Injectable()
// export class SocialMetaService {
// 	constructor(private meta: Meta) {}

// 	public setFacebookMeta(obj: FacebookMeta) {
// 		this.meta.removeTag("property='og:locale'");
// 		this.meta.removeTag("property='og:type'");
// 		this.meta.removeTag("property='og:title'");
// 		this.meta.removeTag("property='og:description'");
// 		this.meta.removeTag("property='og:url'");
// 		this.meta.removeTag("property='og:image'");
// 		this.meta.removeTag("property='og:image:secure_url'");
// 		this.meta.removeTag("property='og:site_name'");

// 		this.meta.addTags([
// 			{ property: 'og:locale', content: 'id-ID' },
// 			{ property: 'og:type', content: 'website' },
// 			{
// 				property: 'og:title',
// 				content: obj.title
// 					? obj.title
// 					: '---SOME TITLE HERE---'
// 			},
// 			{
// 				property: 'og:description',
// 				content: obj.description
// 					? obj.description
// 					: '---SOME DESCRIPTION HERE---'
// 			},
// 			{ property: 'og:url', content: obj.url },
// 			{ property: 'og:image', content: `${environment.tnkBaseUrl}/assets/favicon.ico` },
// 			{
// 				property: 'og:image:secure_url',
// 				content: 'https://tunaiku.com/assets/tunaiku-logo-alpha.png'
// 			},
// 			{ property: 'og:site_name', content: 'Tunaiku' }
// 		]);
// 	}

// 	public setTwitterMeta(description?: string) {
// 		this.meta.removeTag("property='twitter:card'");
// 		this.meta.removeTag("property='twitter:url'");
// 		this.meta.removeTag("property='twitter:title'");
// 		this.meta.removeTag("property='twitter:description'");
// 		this.meta.removeTag("property='twitter:image'");

// 		this.meta.addTags([
// 			{ property: 'twitter:card', content: 'summary' },
// 			{ property: 'twitter:url', content: 'https://twitter.com/tunaikucom' },
// 			{ property: 'twitter:title', content: 'Tunaiku, Pinjam Cepat Mudah & Ringan' },
// 			{
// 				property: 'twitter:description',
// 				content: description
// 					? description
// 					: 'Tunaiku adalah pinjaman online tanpa agunan dan kartu kredit 2 - 20 juta. Proses pengajuan kta cepat, bunga rendah, dana cepat cair cukup modal KTP. Tunaiku merupakan pinjaman kta terpercaya dan diawasi oleh OJK.'
// 			},
// 			{ property: 'twitter:image', content: `${environment.tnkBaseUrl}/assets/favicon.ico` }
// 		]);
// 	}
// }
