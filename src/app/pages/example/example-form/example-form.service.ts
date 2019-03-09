import { Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Observable, BehaviorSubject } from 'rxjs';

import { Model, VALIDATIONS } from './example-form.const';
import { NumericalValidator } from '@app/shared/validators/numerical.validator';

@Injectable({
    providedIn: 'root'
})

export class ExampleFormService {

    public data: Observable<any>;
    public validations: any;
    private update: BehaviorSubject<any>;
    private store: Model;

    constructor(
        private fb: FormBuilder
    ) {
        console.log('example form service loaded');

        this.store = this.setDefaultStore();
        this.validations = VALIDATIONS;

        this.update = <BehaviorSubject<any>> new BehaviorSubject({});
        this.data = this.update.asObservable();
        this.update.next(this.store);
    }

    private dispatch(obj: any) {
        const data = (<any>Object).assign(this.store, obj);
        this.update.next(data);
    }

    private setDefaultStore() {
        return {
            exampleForm: null,
            errors: {
                name: '',
                address: '',
                phone: ''
            }
        }
    }

    private onChangedValues(data:any) {
		const form = this.store.exampleForm;
        const errors = this.store.errors;
        
		for(const field in errors) {
			const control = form.get(field);
            errors[field] = '';
            
            this.dispatch({ errors: errors })

			if(control && control.dirty && !control.valid) {
				for(const key in control.errors) {
					errors[field] = this.validations[field][key] + ' ';
					this.dispatch({ errors: errors })
				}
			}
			else if(control && control.invalid && (control.value != '' && control.value != '0')) {
				for(const key in control.errors) {
					errors[field] = this.validations[field][key] + ' ';
					this.dispatch({ errors: errors })
				}
			}
		}
    }

    public buildForm() {
        const form = {
            name: ['', [Validators.required]],
            address: ['', [Validators.required, Validators.minLength(5)]],
            phone: ['', [NumericalValidator()]]
        };
        this.dispatch({
            exampleForm: this.fb.group(form)
        });
        this.store.exampleForm.valueChanges.subscribe( data => {
            this.onChangedValues(data);
        })
    }



}