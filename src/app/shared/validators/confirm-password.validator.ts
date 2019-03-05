import { ValidatorFn, AbstractControl } from '@angular/forms';

export function ConfirmPasswordValidator(value): ValidatorFn {
	return (control: AbstractControl): { [key:string]:any } => {
		if(control.value != value) {
			return {'confirmPassword': { value: control.value }};
		}

		return null;
	}
}