import { Component } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-component-b',
  imports: [],
  templateUrl: './component-b.component.html',
  styleUrl: './component-b.component.scss'
})
export class ComponentBComponent {
  message: string = '';
  constructor(private messageService: MessageService){
    this.messageService.currentMessage.subscribe(msg => {
      this.message = msg;
    })
  }
}
