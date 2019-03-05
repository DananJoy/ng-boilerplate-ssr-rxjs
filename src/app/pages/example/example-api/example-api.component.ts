import { Component, OnInit } from '@angular/core';

import { ExampleApiService } from './example-api.service';

@Component({
    selector: 'example-api',
    templateUrl: 'example-api.component.html',
    styleUrls: ['example-api.component.scss']
})

export class ExampleApiComponent implements OnInit {

    public data: any;

    constructor(
        public service: ExampleApiService
    ) {
        console.log('example api component loaded');
        this.service.data
        .subscribe(res => {
            this.data = res;
            console.log(this.data);
        })
    }

    ngOnInit() {
        this.service.fetchPost()
    }

}