import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { SharedModule } from '../shared/shared.module';
import { StoreModule } from '@ngrx/store';
import { quizzesReducer } from 'src/app/state/quizzes/quizzes.reducer';
import { EffectsModule } from '@ngrx/effects';
import { QuizzesEffects } from 'src/app/state/quizzes/quizzes.effects';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    StoreModule.forFeature('quizzes', quizzesReducer),
    EffectsModule.forFeature([QuizzesEffects])
  ]
})
export class HomeModule { }
