import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent implements OnInit {
  @Input() text: string;
  @Input() link: string;
  @Input() outline: boolean = false;
  @Input() full: boolean = false;

  constructor() {}

  ngOnInit(): void {}
}
