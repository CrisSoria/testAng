import { Component, OnInit } from '@angular/core';
import { iFooterInfo } from 'src/app/interfaces';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit {
  contactInfo: iFooterInfo[] = [
    {
      title: '+543876004180',
      path: 'tel:+543876004180',
    },
    {
      title: 'crissoria07@gmail.com',
      path: 'mailto:crissoria07@gmail.com',
    },
    {
      title: 'Salta Capital, Argentina',
      path: 'http://google.com/maps',
    },
  ];
  webLinks: iFooterInfo[] = [
    {
      title: 'Home',
      path: '/',
    },
    {
      title: 'About',
      path: '/about',
    },
    {
      title: 'Projects',
      path: '/projects',
    },
    {
      title: 'Contact',
      path: '/contact',
    },
  ];
  socialLinks: iFooterInfo[] = [
    {
      title: 'LinkedIn',
      path: 'https://www.linkedin.com/in/crissoria/',
    },
    {
      title: 'GitHub',
      path: 'https://github.com/CrisSoria',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
