import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ExampleComponent } from './example.component';
import { ExampleBasicComponent } from './example-basic/example-basic.component';
import { ExampleFormComponent } from './example-form/example-form.component';
import { ExampleApiComponent } from './example-api/example-api.component';

import { ExampleService } from './example.service';
import { ExampleBasicService } from './example-basic/example-basic.service';
import { ExampleFormService } from './example-form/example-form.service';
import { ExampleApiService } from './example-api/example-api.service';

@NgModule({
  declarations: [
    ExampleComponent,
    ExampleBasicComponent,
    ExampleFormComponent,
    ExampleApiComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      { path: '', redirectTo: 'basic', pathMatch: 'full' },
      { path: 'form', component: ExampleFormComponent },
      { path: 'basic', component: ExampleBasicComponent },
      { path: 'api', component: ExampleApiComponent },
      { path: '**', loadChildren: 'app/pages/not-found/not-found.module#NotFoundModule'}
    ])
  ],
  providers: [
    ExampleService,
    ExampleBasicService,
    ExampleFormService,
    ExampleApiService
  ],
})

export class ExampleModule { }
