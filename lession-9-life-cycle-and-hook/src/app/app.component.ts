import { Component } from '@angular/core';
import { LifecycleDemoComponent } from './lifecycle-demo/lifecycle-demo.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  imports: [LifecycleDemoComponent, CommonModule]
})
export class AppComponent {
  showComponent = true;
  parentMessage = 'Hello from parent';

  toggleComponent() {
    this.showComponent = !this.showComponent;
  }
}