import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-sender',
  imports: [],
  templateUrl: './sender.component.html',
  styleUrl: './sender.component.scss'
})
export class SenderComponent {
  constructor(private dataService: DataService) {}
  sendMessage() {
    this.dataService.updateMessage('Dữ liệu mới từ SenderComponent!');
  }
}
