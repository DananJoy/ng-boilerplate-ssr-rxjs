import { Component, OnInit } from '@angular/core';

import { ExampleService } from './example.service';

@Component({
  selector: 'example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.scss']
})
export class ExampleComponent implements OnInit {

  constructor(
    public service: ExampleService
  ) {}

  ngOnInit(): void {
  }

}
