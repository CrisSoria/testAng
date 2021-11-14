import { Component, OnInit } from '@angular/core';
import { ProjectsService } from 'src/app/services/projects.service';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent implements OnInit {
  projectsShow: any = [];
  projects: any = [];
  icon: any = faSearch;
  searchInput: string = '';

  constructor(private projectsService: ProjectsService) {}

  ngOnInit(): void {
    this.projects = this.projectsService.projects;
    this.projectsShow = this.projects;
  }
  searchProject(e: Event): void {
    this.projectsShow = this.projects.filter((p: any) =>
      p.name.toLowerCase().match(this.searchInput.toLowerCase())
    );
  }
}
