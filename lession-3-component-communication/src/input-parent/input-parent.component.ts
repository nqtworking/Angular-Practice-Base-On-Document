import { Component } from '@angular/core';
import { InputChildComponent } from '../input-child/input-child.component';

@Component({
  selector: 'app-input-parent',
  template: `<app-input-child [message]="parentMessage"></app-input-child>`,
  imports: [InputChildComponent],
  styleUrl: './input-parent.component.scss'
})
export class InputParentComponent {
  parentMessage = 'Hello from Parent!';
}
