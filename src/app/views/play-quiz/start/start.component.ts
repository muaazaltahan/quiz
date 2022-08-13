import { AfterViewChecked, AfterViewInit, Component, OnDestroy } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { interval, Subscription } from 'rxjs';
import { playQuiz } from 'src/app/state/play-quiz/play-quiz.reducer';
import { ResultDialogComponent } from '../result-dialog/result-dialog.component';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss']
})
export class StartComponent implements AfterViewInit, AfterViewChecked, OnDestroy {

  count = 3;
  counterSub: Subscription;
  timer = 0;
  timerSub: Subscription;

  isFinished = false;
  solvedRight = 0;
  solvedWrong = 0;

  quiz = this.store.select(playQuiz);
  constructor(private store: Store, public dialog: MatDialog) { }

  addSolvedQuestion(isRight: boolean){
    if(isRight) {this.solvedRight++}
    else {this.solvedWrong++}
  }

  finishQuiz(title: string, count: number, nextQuiz: number) {
    this.isFinished = true;
    this.timerSub.unsubscribe();
    this.dialog.open(ResultDialogComponent, {
      width: '100vw',
      maxWidth: '600px',
      data: {
        quizTitle: title,
        time: this.timer,
        nextQuiz,
        questions: {
          count,
          solved: {
            right: this.solvedRight,
            wrong: this.solvedWrong
          }
        }
      }
    })
  }

  ngAfterViewInit(): void {
    this.counterSub = interval(1000).subscribe(()=>{
      this.count--;
    });
  }
  ngAfterViewChecked(): void {
    if(this.count <= 0 && !this.timerSub) {
      this.counterSub.unsubscribe();
      this.timerSub = interval(1000).subscribe(()=>{
        this.timer++;
      });
    }
  }
  ngOnDestroy(): void {
    if(this.timerSub) this.timerSub.unsubscribe();
  }

}
