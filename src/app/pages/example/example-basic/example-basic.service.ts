import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

import { Model } from './example-basic.const';

@Injectable()

export class ExampleBasicService {

    public data: Observable<any>;
    private update: BehaviorSubject<any>;
    private store: Model;

    constructor() {

        console.log('example basic service loaded');

        // Main Store
        this.store = {
            counter: 0        
        }

        this.update = <BehaviorSubject<any>> new BehaviorSubject({});
        this.data = this.update.asObservable();
        this.update.next(this.store);
    }

    // Dispatcher
    private dispatch(obj: Model) {
        const data = (<any>Object).assign(this.store, obj);
        this.update.next(data);
    }

    public plusCounter() {
        this.dispatch({
            counter: this.store.counter + 1
        });
    }

    public minCounter() {
        this.dispatch({
            counter: this.store.counter - 1
        });
    }

}