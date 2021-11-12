import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer-col',
  templateUrl: './footer-col.component.html',
  styleUrls: ['./footer-col.component.css'],
})
export class FooterColComponent implements OnInit {
  @Input() heading: string = 'Col Heading';
  @Input() links: any;
  constructor() {}

  ngOnInit(): void {}
}
