import { ValidatorFn, AbstractControl } from '@angular/forms';

/** check if 1,000,000 >= input <= 999,000,000
 * @param  {Number} minimum
 * @param  {Number} maximum
 * @returns ValidatorFn
 */
export function MinLoan(minimum: Number): ValidatorFn {
  return (control: AbstractControl): {[key: string]: any} => {
    const input = control.value,
          isValid = input >= minimum;

    if(!isValid) 
      return {
        'minimumValue': {minimum}, 
      }
    else 
      return null;
  };
}
