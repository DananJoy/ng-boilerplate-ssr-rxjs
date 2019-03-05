import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'currency'
})
export class CurrencyPipe implements PipeTransform {
	transform(str: string, type: string) {
		if (!str) return false;

		if (!type) return false;

		let tmp = parseInt(str).toString();

		switch (type) {
			case 'rupiah': {
				tmp = tmp.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
				tmp = `Rp ${tmp}`;

				break;
			}

			case 'usd': {
				tmp = tmp.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
				tmp = `USD ${tmp}`;

				break;
			}
		}

		return tmp;
	}
}
