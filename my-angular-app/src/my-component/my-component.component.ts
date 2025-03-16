import { Component } from '@angular/core';
import { MyService } from '../my-service.service';

@Component({
  selector: 'app-my-component',
  imports: [],
  templateUrl: './my-component.component.html',
  styleUrl: './my-component.component.scss'
})
export class MyComponent {
  message: string = '';

  constructor(private myService: MyService) {
    this.message = this.myService.getMessage();
  }
}
