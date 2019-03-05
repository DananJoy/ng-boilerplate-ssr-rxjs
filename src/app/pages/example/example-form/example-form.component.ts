import { Component, OnInit } from '@angular/core';

import { ExampleFormService } from './example-form.service';

@Component({
    selector: 'example-form',
    templateUrl: 'example-form.component.html',
    styleUrls: ['example-form.component.scss']
})

export class ExampleFormComponent implements OnInit {

    constructor(
        public service: ExampleFormService
    ) {
        console.log('example form component loaded')
    }

    ngOnInit(): void {}

}