import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Quiz } from 'src/app/models/models';
import { load } from 'src/app/state/quizzes/quizzes.actions';
import { quizzes, QuizzesState } from 'src/app/state/quizzes/quizzes.reducer';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor(private store: Store<QuizzesState>) {
    this.store.dispatch(load());
  }

  quizzes$: Observable<Quiz[]> = this.store.select(quizzes);

}
