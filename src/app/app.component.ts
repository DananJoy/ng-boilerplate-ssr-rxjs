import { Component, ViewEncapsulation, OnInit, Inject } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { WINDOW } from '@ng-toolkit/universal';

import { PlatformService } from './shared/services/platform.service';

@Component({
  selector: 'app-root',
  template: `
		<!-- Set routing outlet -->
		<router-outlet></router-outlet>
	`,
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {

  constructor(
    @Inject(WINDOW) private window:Window,
    private router: Router,
    private platformService: PlatformService
  ) {}
  
  ngOnInit() {

    this.router.events.subscribe((evt) => {
      if ( !(evt instanceof NavigationEnd) ) {
        return;
      }
      if ( this.platformService.isBrowser ) window.scrollTo(0, 0);
    });
  }



}
