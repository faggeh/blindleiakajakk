import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { MenuService } from './shared/services/menu.service';

export class NavItem {
  displayName?: string;
  disabled?: boolean = true;
  iconName?: string;
  route?: string;
  children?: NavItem[];
}

export const navItems: NavItem[] = [
  {
    displayName: 'Dashboard',
    iconName: 'bar_chart',
    route: 'dashboard'
  },
  {
    displayName: 'Race admin',
    iconName: 'bar_chart',
    route: 'raceadmin',
    children: [
      {
        displayName: 'New Race',
        iconName: 'show_chart',
        route: 'raceadmin/newrace'
      }
    ]
  },
  {
    displayName: 'User',
    iconName: 'bar_chart',
    route: 'user',
    children: [
      {
        displayName: 'Login',
        iconName: 'show_chart',
        route: 'sign-in'
      },
      {
        displayName: 'Forgot Password',
        iconName: 'show_chart',
        route: 'forgot-password'
      },
      {
        displayName: 'Verify Email',
        iconName: 'show_chart',
        route: 'verify-email-address'
      },
      {
        displayName: 'Register User',
        iconName: 'show_chart',
        route: 'register-user'
      }

    ]
  },

];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})

export class AppComponent {
  title = 'blindleia';
  @ViewChild('sideNav', { static: true }) sideNav: MatSidenav | undefined = undefined;
  navItems: NavItem[] = navItems;
  constructor(private menuService: MenuService) {}

  async ngOnInit() {
    this.menuService.appDrawer = this.sideNav;
  }
}
