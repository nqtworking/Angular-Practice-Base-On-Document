import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-input-child',
  imports: [],
  template: `<p>Received message: {{ message }}</p>`,
  styleUrl: './input-child.component.scss'
})
export class InputChildComponent {
  @Input() message: string = '';
}
