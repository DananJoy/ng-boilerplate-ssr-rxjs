import { ValidatorFn, AbstractControl } from '@angular/forms';

/** check if 1,000,000 >= input <= 999,000,000
 * @param  {Number} minimum
 * @param  {Number} maximum
 * @returns ValidatorFn
 */
export function MaxLoan(maximum: Number): ValidatorFn {
  return (control: AbstractControl): {[key: string]: any} => {
    const input = control.value,
          isValid = input <= maximum;

    if(!isValid) 
      return { 
        'maximumValue': {maximum},
      }
    else 
      return null;
  };
}