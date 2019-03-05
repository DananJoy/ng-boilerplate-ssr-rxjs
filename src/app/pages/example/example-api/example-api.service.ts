import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

import { HttpClient } from '@angular/common/http';

import { Model, API_ROUTES } from './example-api.const';
import { API } from './../../../../environments/environment';

@Injectable()

export class ExampleApiService {

    public data: Observable<any>;
    private update: BehaviorSubject<any>;
    private store: Model;

    constructor(
        public http: HttpClient
    ) {

        console.log('example basic service loaded');

        // Main Store
        this.store = {
            list: [],
            isFetched: false        
        }

        this.update = <BehaviorSubject<Model>> new BehaviorSubject({});
        this.data = this.update.asObservable();
        this.update.next(this.store);
    }

    // Dispatcher
    private dispatch(obj: Model) {
        const data = (<any>Object).assign(this.store, obj);
        this.update.next(data);
    }

    private getPost() {
        return this.http.get(`${API.URL}`+`${API_ROUTES.GET_POST}`)
    }

    public fetchPost() {
        this.getPost()
        .subscribe(
            res => {
                // console.log(res);
                this.dispatch({
                    list: res,
                    isFetched: true
                })
            }, 
            err => {
                // console.log(err);
                this.dispatch({
                    isFetched: false
                })
            }
        )
    }

}