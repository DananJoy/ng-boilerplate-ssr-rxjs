import { ValidatorFn, AbstractControl } from '@angular/forms';

export function NoSpaceValidator(): ValidatorFn {
	return (control: AbstractControl): { [key:string]:any } => {
		const pattern:any = /^\s+$/;

		if(control.value && pattern.test(control.value.substr(0,1))) {
			return {'noSpace': { value: control.value }};
		}

		return null;
	}
}