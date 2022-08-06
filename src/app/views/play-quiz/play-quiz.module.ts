import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlayQuizRoutingModule } from './play-quiz-routing.module';
import { PlayQuizComponent } from './play-quiz.component';
import { StoreModule } from '@ngrx/store';
import { playQuizReducer } from 'src/app/state/play-quiz/play-quiz.reducer';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { PlayQuizEffects } from 'src/app/state/play-quiz/play-quiz.effects';


@NgModule({
  declarations: [
    PlayQuizComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    PlayQuizRoutingModule,
    StoreModule.forFeature('playQuiz', playQuizReducer),
    EffectsModule.forFeature([PlayQuizEffects])
  ]
})
export class PlayQuizModule { }
