import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, of } from 'rxjs';
import * as playQuizActions from './play-quiz.actions';

@Injectable({
  providedIn: 'root'
})
export class PlayQuizEffects {
  constructor(private actions$: Actions,private http:  HttpClient, private router: Router) {}

  loadQuizById$ = createEffect(() => this.actions$.pipe(
    ofType(playQuizActions.Types.load),
    mergeMap((id)=>this.http.get(`http:localhost:3000/quizzes/${id}`).pipe(
      map(quiz => ({type: playQuizActions.Types.set, quiz})),
      catchError(err => {
        this.router.navigate(['/**']);
        return of({type: playQuizActions.Types.loadFailure, error: err});
      })
    ))
  ));

}
