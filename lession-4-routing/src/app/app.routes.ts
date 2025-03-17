import { Routes } from '@angular/router';
import { HomeComponent } from '../components/home/home.component';
import { AboutComponent } from '../components/about/about.component';
import { ContactComponent } from '../components/contact/contact.component';
import { NotFoundComponent } from '../components/not-found/not-found.component';
import { ProfileComponent } from '../components/profile/profile.component';

export const routes: Routes = [
    { path: '', component: HomeComponent }, // Trang chủ
    { path: 'about', component: AboutComponent }, // Trang Giới thiệu
    { path: 'contact', component: ContactComponent }, // Trang Liên hệ
    { path: 'profile/:id', component: ProfileComponent },
    { path: '**', component: NotFoundComponent }, // Trang không tìm thấy
];
