import { Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { AboutComponent } from '../about/about.component';
import { ContactComponent } from '../contact/contact.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },  // Trang chủ
    { path: 'about', component: AboutComponent }, // Trang Giới thiệu
    { path: 'contact', component: ContactComponent }, // Trang Liên hệ
  ];
