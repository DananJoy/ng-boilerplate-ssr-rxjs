import { ValidatorFn, AbstractControl } from '@angular/forms';

export function RequiredSelectValidator(): ValidatorFn {
	return (control: AbstractControl): { [key: string]: any } => {
		if (control.value == '0') {
			return { requiredSelect: { value: control.value } };
		}

		return null;
	};
}
