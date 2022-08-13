import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlayQuizComponent } from './play-quiz.component';
import { StartComponent } from './start/start.component';

const routes: Routes = [
  { path: '', component: PlayQuizComponent },
  { path: 'start', component: StartComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlayQuizRoutingModule { }
