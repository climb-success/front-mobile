import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './/app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { StudentComponent } from './component/student/student.component';
import { TeacherComponent } from './component/teacher/teacher.component';
import { SchoolService } from './service/school.service';
import { MessagesComponent } from './component/messages/messages.component';
import { MessageService } from './service/message.service';
import { ProfessionalService } from './service/professional.service';
import { StudentService } from './service/student.service';
import { LogService } from './service/log.service';
import { TeacherService } from './service/teacher.service';
import { GroupComponent } from './component/group/group.component';
import { GroupService } from './service/group.service';
import { HomeComponent } from './component/home/home.component';
import { InformationComponent } from './component/information/information.component';
import { InformationService } from './service/information.service';
import { AboutComponent } from './component/about/about.component';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule.forRoot(),
  ],
  declarations: [
    AppComponent,
    StudentComponent,
    TeacherComponent,
    MessagesComponent,
    GroupComponent,
    HomeComponent,
    InformationComponent,
    AboutComponent,
  ],

  providers: [
    SchoolService, 
    MessageService, 
    ProfessionalService, 
    StudentService, 
    LogService, 
    TeacherService, 
    GroupService, 
    InformationService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
