import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  template: `
    <footer class="footer">
      <p>© 2025 DevLink. All rights reserved.</p>
    </footer>
  `,
  styles: [`
    .footer {
      text-align: center;
      padding: 1rem;
      font-size: 0.9rem;
      color: gray;
      border-top: 1px solid #ccc;
      margin-top: 2rem;
    }
  `]
})
export class FooterComponent {}
