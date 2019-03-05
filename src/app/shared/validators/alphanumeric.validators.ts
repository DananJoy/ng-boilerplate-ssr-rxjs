import { ValidatorFn, AbstractControl } from '@angular/forms';

export function AlphaNumericalValidator(): ValidatorFn {
	return (control: AbstractControl): { [key: string]: any } => {
		const pattern: any = /^[a-z0-9]+$/i;

		if (control.value && !pattern.test(control.value)) {
			return { alphaNumeric: { value: control.value } };
		}

		return null;
	};
}
