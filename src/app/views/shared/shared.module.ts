import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuizComponent } from './quiz/quiz.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    QuizComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    QuizComponent
  ]
})
export class SharedModule { }
