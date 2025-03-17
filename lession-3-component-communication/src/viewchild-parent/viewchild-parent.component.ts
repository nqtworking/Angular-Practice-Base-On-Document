import { Component, ViewChild } from '@angular/core';
import { ViewchildChildComponent } from '../viewchild-child/viewchild-child.component';

@Component({
  selector: 'app-viewchild-parent',
  imports: [ViewchildChildComponent],
  templateUrl: './viewchild-parent.component.html',
  styleUrl: './viewchild-parent.component.scss'
})
export class ViewchildParentComponent {
  @ViewChild(ViewchildChildComponent) childComponent!: ViewchildChildComponent;
  changeChildMessage() {
    this.childComponent.changeMessage('New message from parent');
  }
}
