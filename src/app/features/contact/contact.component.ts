import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  templateUrl: './contact.component.html',
  imports: [
    FormsModule
  ],
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  name = '';
  email = '';
  message = '';

  onSubmit() {
    alert(`Thank you, ${this.name}! Your message has been sent.`);
    this.name = this.email = this.message = '';
  }
}
