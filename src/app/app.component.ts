import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {
  // fader,
  // slider,
  // transformer,
  // stepper,
  indio,
} from './app-routing/route-animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    // fader,
    // slider,
    // transformer,
    // stepper,
    indio,
  ],
})
export class AppComponent {
  title = 'portfolio';

  prepareRoute(outlet: RouterOutlet) {
    return (
      outlet &&
      outlet.activatedRouteData &&
      outlet.activatedRouteData['animation']
    );
  }
}
