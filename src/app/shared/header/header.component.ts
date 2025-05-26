import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  template: `
    <header class="header">
      <h1>DevLink Portfolio</h1>
      <nav>
        <a routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{ exact:true }">Home</a>
        <a routerLink="/projects" routerLinkActive="active">Projects</a>
        <a routerLink="/skills" routerLinkActive="active">Skills</a>
        <a routerLink="/blog" routerLinkActive="active">Blog</a>
        <a routerLink="/contact" routerLinkActive="active">Contact</a>
      </nav>
    </header>
  `,
  imports: [
    RouterLink,
    RouterLinkActive
  ],
  styles: [`
    .header {
      background: #007acc;
      color: white;
      padding: 1rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    nav a {
      color: white;
      margin-left: 1rem;
      text-decoration: none;
    }

    nav a.active {
      border-bottom: 2px solid white;
    }
  `]
})
export class HeaderComponent {}
