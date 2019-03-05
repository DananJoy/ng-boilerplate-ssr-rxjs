import { ValidatorFn, AbstractControl } from '@angular/forms';

export function AlphabetValidator(): ValidatorFn {
	return (control: AbstractControl): { [key: string]: any } => {
		const pattern: any = /^[a-zA-Z\sa-zA-Z]+$/;

		if (control.value && !pattern.test(control.value)) {
			return { alphabetonly: { value: control.value } };
		}

		return null;
	};
}
