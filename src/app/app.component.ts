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
    displayName: 'Performance',
    iconName: 'bar_chart',
    route: 'Performance',
    children: [
      {
        displayName: 'Operations',
        iconName: 'show_chart',
        route: 'Performance/Operations'
      },
      {
        displayName: 'Machines',
        iconName: 'show_chart',
        route: 'Performance/Machines'
      },
      {
        displayName: 'Export Data',
        iconName: 'show_chart',
        route: 'Performance/ExportData'
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
