import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InputParentComponent } from "../input-parent/input-parent.component";
import { OutputParentComponent } from "../output-parent/output-parent.component";
import { ViewchildParentComponent } from "../viewchild-parent/viewchild-parent.component";
import { ComponentAComponent } from "../component-a/component-a.component";
import { ComponentBComponent } from "../component-b/component-b.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, InputParentComponent, OutputParentComponent, ViewchildParentComponent, ComponentAComponent, ComponentBComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'lession-3-component-communication';
}
