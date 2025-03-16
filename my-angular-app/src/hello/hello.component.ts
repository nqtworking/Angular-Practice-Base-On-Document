import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-hello',
  imports: [FormsModule],
  templateUrl: './hello.component.html',
  styleUrl: './hello.component.scss'
})
export class HelloComponent {
  name: string = 'Angular';
  isDisabled: boolean = true;
  message: string = '';
  sayHello() {
    this.message = 'Hello from Angular'
  }
}
