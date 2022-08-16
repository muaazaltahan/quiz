import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BaseComponent } from './base/base.component';

const routes: Routes = [
  {path: '', component: BaseComponent, children: [
    {path: '', loadChildren: ()=>import('./views/home/home.module').then(m=>m.HomeModule)},
    { path: 'quiz/:quizId', loadChildren: () => import('./views/play-quiz/play-quiz.module').then(m => m.PlayQuizModule) },
    { path: 'about', loadChildren: () => import('./views/about/about.module').then(m => m.AboutModule) },
  ]},
  {path: '**', pathMatch: 'full',loadChildren: () => import('./views/page-not-found/page-not-found.module').then( m => m.PageNotFoundModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
