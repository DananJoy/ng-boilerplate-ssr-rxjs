import { ValidatorFn, AbstractControl } from '@angular/forms';

export function MobilePhoneNumberValidator(): ValidatorFn {
	return (control: AbstractControl): { [key: string]: any } => {
		let isInvalidFormat = false;
		const indicator1digit = control.value.substr(0, 1);
		const indicator2digits = control.value.substr(0, 2);
		const indicator3digits = control.value.substr(0, 3);

		if (indicator1digit !== '8' && indicator2digits !== '08' && indicator3digits !== '628') {
			isInvalidFormat = true;
		}

		if (control.value && isInvalidFormat) {
			return { customMobilePhoneNumber: { value: control.value } };
		}

		return null;
	};
}
