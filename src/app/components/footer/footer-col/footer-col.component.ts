import { Component, Input, OnInit } from '@angular/core';
import { iFooterInfo } from 'src/app/interfaces';

@Component({
  selector: 'app-footer-col',
  templateUrl: './footer-col.component.html',
  styleUrls: ['./footer-col.component.css'],
})
export class FooterColComponent implements OnInit {
  @Input() heading: string = 'Col Heading';
  @Input() links: iFooterInfo[];
  @Input() typeRouterLink: boolean = false;
  constructor() {}

  ngOnInit(): void {}
}
