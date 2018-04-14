import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './component/home/home.component';
import { StudentComponent } from './component/student/student.component';
import { TeacherComponent} from './component/teacher/teacher.component';
import { GroupComponent } from './component/group/group.component';
import { InformationComponent } from './component/information/information.component'
import { AboutComponent } from './component/about/about.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'student', component: StudentComponent },
  { path: 'teacher', component: TeacherComponent },
  { path: 'group', component: GroupComponent },
  { path: 'information', component: InformationComponent },
  { path: 'about', component: AboutComponent },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports: [ RouterModule ]
})
export class AppRoutingModule {

}
