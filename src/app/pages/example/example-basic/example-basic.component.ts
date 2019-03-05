import { Component, OnInit } from '@angular/core';

import { ExampleBasicService } from './example-basic.service';

@Component({
    selector: 'example-basic',
    templateUrl: 'example-basic.component.html',
    styleUrls: ['example-basic.component.scss']
})

export class ExampleBasicComponent implements OnInit {

    public data;

    constructor(
        public service: ExampleBasicService
    ) {
        console.log('example basic loaded')
    }

    ngOnInit() {
        this.service.data
        .subscribe(res => {
            this.data = res;
            console.log(this.data);
        })
    }

}