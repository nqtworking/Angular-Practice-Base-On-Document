import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyService {

  constructor() { }
  getMessage(): string {
    return "Hello from MyService!";
  }
}
