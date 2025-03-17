import { Component } from '@angular/core';

@Component({
  selector: 'app-viewchild-child',
  imports: [],
  templateUrl: './viewchild-child.component.html',
  styleUrl: './viewchild-child.component.scss'
})
export class ViewchildChildComponent {
  message = 'Hello from Child!';
  changeMessage(newMessage: string) {
    this.message = newMessage;
  }
}
