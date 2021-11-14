import { Component, OnInit } from '@angular/core';
import { faPhoneAlt, faMapMarkedAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-contact-section',
  templateUrl: './contact-section.component.html',
  styleUrls: ['./contact-section.component.css'],
})
export class ContactSectionComponent implements OnInit {
  phone = faPhoneAlt;
  mark = faMapMarkedAlt;

  constructor() {}

  ngOnInit(): void {}
}
