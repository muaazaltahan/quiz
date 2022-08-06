import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, of } from 'rxjs';
import * as QuizzesActions from './quizzes.actions';

@Injectable({
  providedIn: 'root'
})
export class QuizzesEffects {
  constructor(private actions$: Actions, private http: HttpClient) {}

  loadQuizzes$ = createEffect(() => this.actions$.pipe(
    ofType(QuizzesActions.Types.load),
    mergeMap(()=>this.http.get("http://localhost:3000/quizzes").pipe(
      map(quizzes => ({type: QuizzesActions.Types.loadSuccess, quizzes})),
      catchError(error => of({type: QuizzesActions.Types.loadfailure, error}))
    ))
  ));

}
