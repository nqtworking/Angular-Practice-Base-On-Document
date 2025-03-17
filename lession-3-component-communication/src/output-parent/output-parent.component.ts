import { Component } from '@angular/core';
import { OutputChildComponent } from '../output-child/output-child.component';

@Component({
  selector: 'app-output-parent',
  imports: [OutputChildComponent],
  templateUrl: './output-parent.component.html',
  styleUrl: './output-parent.component.scss'
})
export class OutputParentComponent {
  childMessage = '';

  receiveMessage(message: string) {
    this.childMessage = message;
  }
}
