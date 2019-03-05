import { NgtUniversalModule } from '@ng-toolkit/universal';
import { BrowserTransferStateModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { AppService } from './app.service';

import { LinkService } from './shared/services/link.service';
import { BrowserService } from './shared/services/browser.service';
import { APIService } from './shared/services/api.service';
import { PlatformService } from './shared/services/platform.service';
import { CookieService } from './shared/services/cookie.service';
import { ScriptInjectionService } from './shared/services/script-injection.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports:[
    CommonModule,
    NgtUniversalModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserTransferStateModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: '', redirectTo: 'example', pathMatch: 'full' },
      { path: 'example', loadChildren: './pages/example/example.module#ExampleModule' },
    ])
  ],
  providers: [
    AppService,
    APIService,
    BrowserService,
    CookieService,
    LinkService,
    PlatformService,
    ScriptInjectionService  
  ],
})
export class AppModule { }
