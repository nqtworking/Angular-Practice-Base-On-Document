import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {
  userId: string | null = '';
  constructor(private route: ActivatedRoute) {}
  ngOnInit() {
    this.userId = this.route.snapshot.paramMap.get('id');
  }
}
