import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills-info',
  templateUrl: './skills-info.component.html',
  styleUrls: ['./skills-info.component.css'],
})
export class SkillsInfoComponent implements OnInit {
  @Input() title = 'Title';
  @Input() items = ['HTML', 'CSS'];
  constructor() {}

  ngOnInit(): void {}
}
