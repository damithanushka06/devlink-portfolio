import { Component } from '@angular/core';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  templateUrl: './projects.component.html',
  imports: [
    NgForOf
  ],
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  projects = [
    { title: 'Project A', description: 'Angular Portfolio', link: '#' },
    { title: 'Project B', description: 'E-commerce Site', link: '#' },
  ];
}
