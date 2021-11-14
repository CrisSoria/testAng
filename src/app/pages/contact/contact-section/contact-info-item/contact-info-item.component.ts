import { Component, Input, OnInit } from '@angular/core';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-contact-info-item',
  templateUrl: './contact-info-item.component.html',
  styleUrls: ['./contact-info-item.component.css'],
})
export class ContactInfoItemComponent implements OnInit {
  @Input() text: string = 'Lorem ipsum';
  @Input() icon: any = faEnvelope;
  constructor() {}

  ngOnInit(): void {}
}
