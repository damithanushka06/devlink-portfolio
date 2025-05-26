import { Component } from '@angular/core';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-skills',
  standalone: true,
  templateUrl: './skills.component.html',
  imports: [
    NgForOf
  ],
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {
  skills = ['Angular', 'TypeScript', 'JavaScript', 'HTML', 'CSS', 'Node.js'];
}
