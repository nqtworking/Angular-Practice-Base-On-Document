import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CapitalizeWordsPipe } from '../custom.pipe';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CapitalizeWordsPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'lession-11-pipes';
}
