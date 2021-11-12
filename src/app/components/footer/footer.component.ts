import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit {
  contactInfo: any = [
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
  webLinks: any = [
    {
      title: 'Home',
      path: '/',
      type: 'Link',
    },
    {
      type: 'Link',
      title: 'About',
      path: '/about',
    },
    {
      type: 'Link',
      title: 'Projects',
      path: '/projects',
    },
    {
      type: 'Link',
      title: 'Contact',
      path: '/contact',
    },
  ];
  socialLinks: any = [
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
