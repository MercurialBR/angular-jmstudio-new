import { Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { CourseComponent } from './pages/course/course.component';
import { ContactComponent } from './pages/contact/contact.component';
import { PageStudioComponent } from './pages/page-studio/page-studio.component';

export const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'cursos', component: CourseComponent},
  {path: 'contato', component: ContactComponent},
  {path: 'studio', component: PageStudioComponent},
];
