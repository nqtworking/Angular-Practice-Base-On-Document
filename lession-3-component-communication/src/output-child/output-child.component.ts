import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-output-child',
  imports: [],
  templateUrl: './output-child.component.html',
  styleUrl: './output-child.component.scss'
})
export class OutputChildComponent {
  @Output() messageEvent = new EventEmitter<string>();
  sendMessage() {
    this.messageEvent.emit('Hello from Child!');
  }
}
