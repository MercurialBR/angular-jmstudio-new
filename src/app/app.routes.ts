import { ProceduresLashComponent } from './pages/procedures-lash/procedures-lash.component';
import { ProceduresLabComponent } from './pages/procedures-lab/procedures-lab.component';
import { Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { CourseComponent } from './pages/course/course.component';
import { ContactComponent } from './pages/contact/contact.component';
import { PageStudioComponent } from './pages/page-studio/page-studio.component';
import { ProceduresComponent } from './pages/procedures/procedures.component';
import { PageAwardsComponent } from './pages/page-awards/page-awards.component';
import { ProceduresSobComponent } from './pages/procedures-sob/procedures-sob.component';

export const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'procedimentos', component: ProceduresComponent},
  {path: 'cursos', component: CourseComponent},
  {path: 'contato', component: ContactComponent},
  {path: 'studio', component: PageStudioComponent},
  {path: 'parcerias', component: PageAwardsComponent},
  {path: 'micro-labial', component: ProceduresLabComponent},
  {path: 'nanoblading', component: ProceduresSobComponent},
  {path: 'lash-lifting', component: ProceduresLashComponent},
];
