import { Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { CourseComponent } from './pages/course/course.component';
import { ContactComponent } from './pages/contact/contact.component';

export const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'cursos', component: CourseComponent},
  {path: 'contato', component: ContactComponent},
];
