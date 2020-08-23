import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { TableComponent } from './components/common/components/table/table.component';
import { CharacterComponent } from './components/character/character.component';
import { TeacherComponent } from './components/teacher/teacher.component';
import { StudentComponent } from './components/student/student.component';
import { StudentDataFormComponent } from './components/student/components/student-data-form/student-data-form.component';
import { StudentRequestComponent } from './components/student/components/student-request/student-request.component';
import {AppRoutingModule} from './app-routing/app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    CharacterComponent,
    TeacherComponent,
    StudentComponent,
    TableComponent,
    StudentDataFormComponent,
    StudentRequestComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
