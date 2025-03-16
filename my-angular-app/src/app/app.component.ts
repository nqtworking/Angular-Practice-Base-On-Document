// #################################################Basic

// import { Component, NgModule } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
// import { HelloComponent } from '../hello/hello.component';
// import { ChildComponent } from '../child/child.component';
// import { SenderComponent } from '../sender/sender.component';
// import { ReceiverComponent } from '../receiver/receiver.component';
// import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
// import { CommonModule } from '@angular/common';
// import { HttpClient } from '@angular/common/http';

// @Component({
//   selector: 'app-root',
//   imports: [RouterOutlet, HelloComponent, ChildComponent, SenderComponent, ReceiverComponent, ReactiveFormsModule, CommonModule],
//   templateUrl: './app.component.html',
//   styleUrl: './app.component.scss'
// })
// export class AppComponent {
//   parentName = 'Angular Developer';
//   message = '';
//   receiveMessage(msg: string) {
//     this.message = msg;
//   }
//   loginForm = new FormGroup({
//     username: new FormControl('', Validators.required),
//     password: new FormControl('', [Validators.required, Validators.minLength(6)])
//   });

//   onSubmit() {
//     if (this.loginForm.valid) {
//       console.log('Form Data:', this.loginForm.value);
//     }
//   }

//   users: any[] = []; // Biến lưu danh sách người dùng

//   constructor(private http: HttpClient) {} // ✅ Inject HttpClient vào constructor

//   getUsers() {
//     this.http.get('https://jsonplaceholder.typicode.com/users')
//       .subscribe((data: any) => {
//         this.users = data;
//       });
//   }
// }

// ####################################################NgRx

// import { Component } from '@angular/core';
// import { Store } from '@ngrx/store';
// import { Observable } from 'rxjs';
// import { increment, decrement, reset } from './store/actions';
// import { selectCount } from './store/selectors';
// import { AppState } from './store/state';
// import { CommonModule } from '@angular/common';
// import { MyComponent } from "../my-component/my-component.component";

// @Component({
//   selector: 'app-root',
//   standalone: true,
//   imports: [CommonModule, MyComponent], // ✅ Import CommonModule để dùng async pipe
//   templateUrl: './app.component.html',
// })
// export class AppComponent {
//   count$: Observable<number>;

//   constructor(private store: Store<{ appState: AppState }>) { 
//     this.count$ = this.store.select(selectCount);
//   }

//   increment() {
//     this.store.dispatch(increment());
//   }

//   decrement() {
//     this.store.dispatch(decrement());
//   }

//   reset() {
//     this.store.dispatch(reset());
//   }
// }


//#####################################################Service and DI
import { Component } from "@angular/core";
import { MyComponent } from "../my-component/my-component.component";
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MyComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {
  
}
