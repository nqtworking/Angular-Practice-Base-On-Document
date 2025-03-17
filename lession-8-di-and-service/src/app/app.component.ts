import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoggerService } from '../services/logger.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  constructor(private logger: LoggerService) {}
  logMessage(): void {
    this.logger.log('Đây là một log message từ AppComponent!');
  }
}
