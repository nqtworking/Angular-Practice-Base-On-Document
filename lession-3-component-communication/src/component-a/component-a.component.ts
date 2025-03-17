import { Component } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-component-a',
  imports: [],
  templateUrl: './component-a.component.html',
  styleUrl: './component-a.component.scss'
})
export class ComponentAComponent {
  constructor(private messageService: MessageService) {}
  sendMessage(){
    this.messageService.changeMessage('Hello from component A!');
  }
}
