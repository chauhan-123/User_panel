import { Component } from '@angular/core';
import { Router, NavigationStart, NavigationEnd } from '@angular/router';
import { UtilityService } from './modules/shared/services/utility.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'userpanel';
loader= false;
  constructor(private _router:Router , private utilityService:UtilityService){

  }

  ngOnInit() {
    this._router.events.forEach((event) => {
      if (event instanceof NavigationStart) {
        UtilityService.loader.next(true)
      }
      else if (event instanceof NavigationEnd) {
        UtilityService.loader.next(false)
      }
    });
    UtilityService.loader.subscribe(
      data => {
        setTimeout(() => {
          this.loader = data;
        });
      }
    );
  }
}
