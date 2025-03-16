import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-receiver',
  imports: [],
  templateUrl: './receiver.component.html',
  styleUrl: './receiver.component.scss'
})
export class ReceiverComponent {
  message: string = '';

  constructor(private dataService: DataService) {
    this.dataService.currentMessage.subscribe(msg => this.message = msg);
  }
}
