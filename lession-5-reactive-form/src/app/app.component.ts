import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ReactiveFormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'lession-5-reactive-form';
  userForm: FormGroup;
  constructor(){
    this.userForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
      phones: new FormArray([])
    })
  }

  get phones(): FormArray {
    return this.userForm.get('phones') as FormArray;
  }

  addPhone() {
    this.phones.push(new FormControl('', Validators.required));
  }

  removePhone(index: number) {
    this.phones.removeAt(index);
  }

  onSubmit() {
    if (this.userForm.valid) {
      console.log('Dữ liệu Form:', this.userForm.value);
    } else {
      console.log('Form không hợp lệ');
    }
  }
}
