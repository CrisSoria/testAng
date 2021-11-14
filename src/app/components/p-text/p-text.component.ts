import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-p-text',
  templateUrl: './p-text.component.html',
  styleUrls: ['./p-text.component.css'],
})
export class PTextComponent implements OnInit {
  @Input() text: string;
  @Input() left: boolean = false;
  @Input() white: boolean = false;
  @Input() aboutPage: boolean = false;

  constructor() {}

  ngOnInit(): void {}
}
