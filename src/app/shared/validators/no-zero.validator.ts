import { ValidatorFn, AbstractControl } from '@angular/forms';

export function NoZeroValidator(): ValidatorFn {
	return (control: AbstractControl): { [key:string]:any } => {
		if(control.value == 0 || !control.value) {
			return {'noZero': { value: control.value }};
		}

		return null;
	}
}