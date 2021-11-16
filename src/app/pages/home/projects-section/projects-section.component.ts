import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import SwiperCore, { SwiperOptions, Pagination, Navigation } from 'swiper';

import { ProjectsService } from 'src/app/services/projects.service';
import { iProject } from 'src/app/interfaces';

@Component({
  selector: 'app-projects-section',
  templateUrl: './projects-section.component.html',
  styleUrls: ['./projects-section.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class ProjectsSectionComponent implements OnInit {
  config: SwiperOptions = {
    spaceBetween: 30,
    slidesPerView: 1,
    navigation: true,
    pagination: false,
    breakpoints: {
      // when window width is >= 640px
      640: {
        slidesPerView: 1,
      },
      // when window width is >= 768px
      768: {
        slidesPerView: 2,
      },
      // when window width is >= 1200px
      1200: {
        slidesPerView: 3,
      },
    },
  };
  projects: iProject[] = [];

  constructor(private projectsService: ProjectsService) {}

  ngOnInit(): void {
    SwiperCore.use([Pagination, Navigation]);
    this.projectsService
      .getProjects()
      .subscribe((fetchProjects) => (this.projects = fetchProjects));
  }
}
