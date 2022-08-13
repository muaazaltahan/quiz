import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { Quiz } from 'src/app/models/models';
import { load } from 'src/app/state/play-quiz/play-quiz.actions';
import { playQuiz } from 'src/app/state/play-quiz/play-quiz.reducer';
import { QuizzesState } from 'src/app/state/quizzes/quizzes.reducer';

@Component({
  selector: 'app-play-quiz',
  templateUrl: './play-quiz.component.html',
  styleUrls: ['./play-quiz.component.scss']
})
export class PlayQuizComponent implements OnInit, OnDestroy {

  constructor(private store: Store<QuizzesState>, private activatedRoute: ActivatedRoute) { }

  quiz: Observable<Quiz> = this.store.select(playQuiz);
  quizSub: Subscription;

  ngOnInit(): void {
    this.quizSub = this.quiz.subscribe(res => {
      const quizId = this.activatedRoute.snapshot.paramMap.get('quizId');
      if(res.id != parseInt(quizId)){
        this.store.dispatch(load({quizId: parseInt(quizId)}));
      }
    });
  }

  ngOnDestroy(): void {
    this.quizSub.unsubscribe();
  }
}
