import { Component, EventEmitter, OnInit, OnDestroy, Output } from '@angular/core';
import { Router, Route, Routes } from '@angular/router';
import { Subject } from 'rxjs';
import { appRoutes } from 'src/app/app.routing.module';
import { MenuService } from 'src/app/shared/services/menu.service';

export interface DialogData {
  start: Date;
  end: Date;
}

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})

export class NavBarComponent implements OnInit, OnDestroy {
  @Output() menuButtonPressed = new EventEmitter();
  public appRoutes: Routes = appRoutes;
  public periodList = [];
  private urlSplit: string[];
  private destroyed$: Subject<void> = new Subject<void>();

  constructor(
    private menuService: MenuService,
    private router: Router) {

    this.urlSplit = new Array();
    this.router.events.subscribe((value) => {
      this.urls.length = 0; // Fastest way to clear out array
      if ('url' in value) {
        this.generateBreadcrumbTrail(value['url']);
      }
    });
  }

  ngOnInit() {
  }

  ngOnDestroy(): void {
    this.destroyed$.next();
    this.destroyed$.complete();
  }

  private generateBreadcrumbTrail(url: string): void {
    // Add url to beginning of array (since the url is being recursively broken down from full url to its parent paths)
    this.urlSplit.unshift(url);
    if (url.lastIndexOf('/') > 0) {
      this.generateBreadcrumbTrail(url.substr(0, url.lastIndexOf('/'))); // Recursively add parent url
    }
  }

  public navigateTo(url: string): void {
    this.router.navigateByUrl(url);
  }

  public friendlyName(url: string): string {
    // TJABBE: fix this
    return 'Crumbs';
    // if (url) {
    //   const routeConfig = this.appRoutes;
    //   let route: Route;
    //   const urlPath = url.split('/');
    //   const path = urlPath[urlPath.length - 1];

    //   for (let i = 0; i < routeConfig.length; i += 1) {
    //     route = routeConfig[i];

    //     const routePath = route.path?.split('/');

    //     if (!routePath) {
    //       return '';
    //     }
    //     if (path === routePath[routePath.length - 1] && route.data) {
    //       try {
    //         return route.data['title'] ? route.data['title'] : '';
    //       }
    //       catch (e) {
    //         return '';
    //       }
    //     }
    //     return '';
    //   }

    //   const friendlyName = localStorage.getItem(path);
    //   friendlyName ? friendlyName : path;
    // }
  }

  get urls(): string[] {
    return this.urlSplit;
  }

  set urls(value) {
    this.urlSplit = value;
  }

  public onMenuButtonClicked(): void {
    this.menuService.toggleMenu();
  }
}
