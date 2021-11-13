import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-project-item',
  templateUrl: './project-item.component.html',
  styleUrls: ['./project-item.component.css'],
})
export class ProjectItemComponent implements OnInit {
  @Input() img = '';
  @Input() title = 'Project Name';
  @Input() desc =
    'Lorem Ipsum is simply dummy text of the printing and typesetting industry.';
  @Input() github = '';
  @Input() web = '';

  constructor() {}

  ngOnInit(): void {}
}
