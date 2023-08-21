import {Component, HostBinding, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {animate, state, style, transition, trigger} from '@angular/animations';
import { NavItem } from 'src/app/app.component';
import { MenuService } from 'src/app/shared/services/menu.service';
// TBD: Henning, simplify this, must be possible to use som standard material components and in
// addition get rid of the complex scss styling.
@Component({
  selector: 'app-menu-list-item',
  templateUrl: './menu-list-item.component.html',
  styleUrls: ['./menu-list-item.component.scss'],
  animations: [
    trigger('indicatorRotate', [
      state('collapsed', style({transform: 'rotate(0deg)'})),
      state('expanded', style({transform: 'rotate(180deg)'})),
      transition('expanded <=> collapsed',
        animate('225ms cubic-bezier(0.4,0.0,0.2,1)')
      ),
    ])
  ]
})
// TBD: Henning, Is this used?
export class MenuListItemComponent implements OnInit {
  expanded = false;
  @HostBinding('attr.aria-expanded') ariaExpanded = this.expanded;
  @Input() item: NavItem = new NavItem();
  @Input() depth: number = 0;

  constructor(
    public navService: MenuService,
    public router: Router) {
  }

  ngOnInit() {
    this.navService.currentUrl.subscribe((url: string | undefined) => {
      if (this.item?.route && url) {
        // console.log(`Checking '/${this.item.route}' against '${url}'`);
        this.expanded = url.indexOf(`/${this.item.route}`) === 0;
        this.ariaExpanded = this.expanded;
        // console.log(`${this.item.route} is expanded: ${this.expanded}`);
      }
    });
  }

  public onItemSelected(item: NavItem | undefined): void {
    if (!item?.children || !item?.children.length) {
      this.router.navigate([item?.route]);
      this.navService.closeNav();
    }
    if (item?.children && item?.children.length) {
      this.expanded = !this.expanded;
    }
  }
}
