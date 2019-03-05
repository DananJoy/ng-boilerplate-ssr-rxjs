import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { NotFoundComponent } from './not-found.component';
import { NotFoundService } from './not-found.service';

@NgModule({
  declarations: [
    NotFoundComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: NotFoundComponent }
    ])
  ],
  providers: [
    NotFoundService
  ],
})

export class NotFoundModule { }
