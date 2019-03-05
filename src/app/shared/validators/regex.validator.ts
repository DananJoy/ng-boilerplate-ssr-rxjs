import { ValidatorFn, AbstractControl } from '@angular/forms';

export function RegexValidator(pattern): ValidatorFn {
	return (control: AbstractControl): { [key:string]:any } => {
		let reg = new RegExp(pattern);

		if(control.value && !reg.test(control.value)) {
			return {'regexValidator': { value: control.value }};
		}

		return null;
	}
}