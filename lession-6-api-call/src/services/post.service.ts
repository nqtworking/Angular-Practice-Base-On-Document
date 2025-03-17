import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/posts';
  constructor(private http: HttpClient) {}
  getPosts(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
  createPost(postData: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, postData);
  }
}
