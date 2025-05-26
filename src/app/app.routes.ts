import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', loadChildren: () => import('./features/home/home.routes').then(m => m.HOME_ROUTES) },
  { path: 'projects', loadChildren: () => import('./features/projects/project.routes').then(m => m.PROJECT_ROUTES) },
  { path: 'skills', loadChildren: () => import('./features/skills/skills.routes').then(m => m.SKILLS_ROUTES) },
  { path: 'blog', loadChildren: () => import('./features/blog/blog.routes').then(m => m.BLOG_ROUTES) },
  { path: 'contact', loadChildren: () => import('./features/contact/contact.routes').then(m => m.CONTACT_ROUTES) },
  { path: '**', redirectTo: '' }
];
