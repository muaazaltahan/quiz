import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayQuizRoutingModule } from './play-quiz-routing.module';
import { PlayQuizComponent } from './play-quiz.component';
import { StoreModule } from '@ngrx/store';
import { playQuizReducer } from 'src/app/state/play-quiz/play-quiz.reducer';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { PlayQuizEffects } from 'src/app/state/play-quiz/play-quiz.effects';
import { StartComponent } from './start/start.component';
import { QuestionComponent } from './start/question/question.component';
import { NumberToTimePipe } from 'src/app/pipes/number-to-time.pipe';
import { ResultDialogComponent } from './result-dialog/result-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    PlayQuizComponent,
    StartComponent,
    QuestionComponent,
    NumberToTimePipe,
    ResultDialogComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    PlayQuizRoutingModule,
    StoreModule.forFeature('playQuiz', playQuizReducer),
    EffectsModule.forFeature([PlayQuizEffects]),
    MatDialogModule
  ]
})
export class PlayQuizModule { }
