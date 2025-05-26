import { Component } from '@angular/core';
import {NgForOf} from '@angular/common';

interface BlogPost {
  id: number;
  title: string;
  summary: string;
  date: string;
}

@Component({
  selector: 'app-blog',
  standalone: true,
  templateUrl: './blog.component.html',
  imports: [
    NgForOf
  ],
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent {
  posts: BlogPost[] = [
    {
      id: 1,
      title: 'Getting Started with Angular Standalone Components',
      summary: 'Learn how to build Angular apps using the latest standalone components feature.',
      date: '2025-05-01'
    },
    {
      id: 2,
      title: 'Tips for Clean and Maintainable Code',
      summary: 'Best practices and tips to keep your Angular codebase clean and maintainable.',
      date: '2025-04-15'
    },
    {
      id: 3,
      title: 'Understanding Angular Routing and Lazy Loading',
      summary: 'A deep dive into Angular router with lazy loading for better performance.',
      date: '2025-03-28'
    }
  ];
}
