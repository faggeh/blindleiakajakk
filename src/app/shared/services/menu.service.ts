import { Injectable } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  public appDrawer: any;
  public currentUrl = new BehaviorSubject<string|undefined>(undefined);

  constructor(
    private router: Router) {

    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.currentUrl.next(event.urlAfterRedirects);
      }
    });
  }

  toggleMenu() {
    if (this.appDrawer.opened) {
      this.closeNav();
    } else {
      this.openNav();
    }
  }

  closeNav() {
    this.appDrawer.close();
  }

  openNav() {
    this.appDrawer.open();
  }
}
