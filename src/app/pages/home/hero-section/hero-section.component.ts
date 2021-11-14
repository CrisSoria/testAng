import { Component, OnInit } from '@angular/core';
import {
  faLinkedin,
  faGithub,
  faTelegramPlane,
} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-hero-section',
  templateUrl: './hero-section.component.html',
  styleUrls: ['./hero-section.component.css'],
})
export class HeroSectionComponent implements OnInit {
  faLinkedin = faLinkedin;
  faGithubSquare = faGithub;
  faTelegramPlane = faTelegramPlane;
  constructor() {}

  ngOnInit(): void {}
  scrollDown() {
    document
      .getElementById('homeAboutSection')
      ?.scrollIntoView({ behavior: 'smooth' });
  }
}
