import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Quiz } from 'src/app/models/models';
import { set } from 'src/app/state/play-quiz/play-quiz.actions';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent {

  constructor(private router: Router, private store: Store) {}

  @Input() quiz: Quiz;

  playQuiz() {
    this.store.dispatch(set({quiz: this.quiz}));
    this.router.navigate(['quiz/' + this.quiz.id]);
  }

}
