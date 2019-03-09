import { Component, OnInit } from '@angular/core';

import { HeaderService } from './header.service';

@Component({
    selector: 'header',
    templateUrl: 'header.component.html',
    styleUrls: ['header.component.scss']
})

export class HeaderComponent implements OnInit {

    constructor(
        public service: HeaderService
    ) {
        console.log('header component loaded');
    }

    ngOnInit() {}

}