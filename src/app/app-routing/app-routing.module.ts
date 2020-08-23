import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { TeacherComponent } from '../components/teacher/teacher.component';
import { StudentComponent } from '../components/student/student.component';
import { CharacterComponent } from '../components/character/character.component';
import {StudentDataFormComponent } from '../components/student/components/student-data-form/student-data-form.component';

const routes: Routes = [
  {
    path: 'teacher',
    component: TeacherComponent,
  },
  {
    path: 'student',
    component: StudentComponent
  },
  {
    path: 'character',
    component: CharacterComponent
  },
  {
    path: 'newStudent',
    component: StudentDataFormComponent
  }
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
