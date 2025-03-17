import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PostService } from '../services/post.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  posts: any[] = [];
  newPost = { title: '', body: '' };
  constructor(private postService: PostService) {}
  ngOnInit(): void {
    this.postService.getPosts().subscribe(
      (data) => {
        this.posts = data;
      },
      (error) => {
        console.error('Lỗi khi lấy dữ liệu:', error);
      }
    );
  }

  addPost(): void {
    this.postService.createPost(this.newPost).subscribe((post) => {
      this.posts.unshift(post);
      this.newPost = { title: '', body: '' };
    });
  }
}
