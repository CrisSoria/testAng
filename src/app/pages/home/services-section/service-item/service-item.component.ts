import { Component, Input, OnInit } from '@angular/core';
import { faTelegramPlane } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-service-item',
  templateUrl: './service-item.component.html',
  styleUrls: ['./service-item.component.css'],
})
export class ServiceItemComponent implements OnInit {
  @Input() icon: any = faTelegramPlane;
  @Input() title: string = 'Web Design';
  @Input() desc: string =
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's ok";
  constructor() {}

  ngOnInit(): void {}
}
