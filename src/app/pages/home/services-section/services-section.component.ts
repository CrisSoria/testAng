import { Component, OnInit } from '@angular/core';
import {
  faTerminal,
  faDesktop,
  faMobileAlt,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-services-section',
  templateUrl: './services-section.component.html',
  styleUrls: ['./services-section.component.css'],
})
export class ServicesSectionComponent implements OnInit {
  terminal = faTerminal;
  desktop = faDesktop;
  mobile = faMobileAlt;
  constructor() {}

  ngOnInit(): void {}
}
