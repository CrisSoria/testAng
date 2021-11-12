import { Component, OnInit } from '@angular/core';
import { faBars, faWindowClose } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css'],
})
export class NavMenuComponent implements OnInit {
  showNav: boolean = false;
  faBars = faBars;
  faWindowClose = faWindowClose;
  constructor() {}

  ngOnInit(): void {}

  togleShowNav() {
    this.showNav = !this.showNav;
    console.log(this.showNav);
  }
}
