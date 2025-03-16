import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HighlightDirective } from '../highlight.directive';
import { UnlessDirective } from '../unless.directive';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HighlightDirective,UnlessDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'lession-10-directives';
}
