import { Component, OnInit } from '@angular/core';
import { ProjectsService } from 'src/app/services/projects.service';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { iProject } from 'src/app/interfaces';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent implements OnInit {
  projectsShow: iProject[] = [];
  projects: iProject[] = [];
  icon: any = faSearch;
  searchInput: string = '';

  constructor(private projectsService: ProjectsService) {}

  ngOnInit(): void {
    this.projectsService
      .getProjects()
      .subscribe((fetchProjects: iProject[]) => {
        this.projects = fetchProjects;
        this.projectsShow = this.projects;
      });
  }
  searchProject(e: Event): void {
    this.projectsShow = this.projects.filter((p: iProject) =>
      p.name.toLowerCase().match(this.searchInput.toLowerCase())
    );
  }
}
