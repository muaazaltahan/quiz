import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Store } from '@ngrx/store';
import { concatMap, map, Observable, Subscription } from 'rxjs';
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

  started: boolean = false;

  constructor(private store: Store<QuizzesState>, private activatedRoute: ActivatedRoute) { }

  quiz: Observable<Quiz> = this.store.select(playQuiz);
  quizByIdSub: Subscription;

  ngOnInit(): void {
    this.quizByIdSub = this.activatedRoute.params.pipe(
      concatMap((params)=>this.quiz.pipe(
        map(quiz => {
          let idParam = params['quizId'];
          if(quiz.id == idParam){
            return false;
          } else {
            return {quiz,idParam};
          }
        })
      ))
    ).subscribe((result)=>{
      if(result != false){
        this.store.dispatch(load({quizId: result.idParam}))
      }
    })
  }

  ngOnDestroy(): void {
    this.quizByIdSub.unsubscribe();
  }

}

//       if (quiz.id != idParam) {
//         this.quizByIdSub = this.store.select(quizById(idParam)).subscribe(quiz => {
//           this.store.dispatch(set({ quiz }));
//         })
//       }
