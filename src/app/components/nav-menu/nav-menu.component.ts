import { Component, ElementRef, HostListener, OnInit } from '@angular/core';
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

  // voy a observar si se clickea fuera del elemento
  //https://qastack.mx/programming/40107008/detect-click-outside-angular-component
  @HostListener('document:click', ['$event'])
  clickout(event: any) {
    let clickInside = !!this.eRef.nativeElement.contains(event.target);
    if (!clickInside && this.showNav === false) {
      this.showNav = !this.showNav;
    }
  }

  constructor(private eRef: ElementRef) {}

  ngOnInit(): void {}

  togleShowNav() {
    this.showNav = !this.showNav;
  }
}
