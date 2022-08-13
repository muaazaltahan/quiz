import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Question } from 'src/app/models/models';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent {

  @Input() isFinished: boolean;
  @Output() solveQuestion = new EventEmitter<boolean>();
  @Input() question: Question;
  selectedAnswer: number;
  selectAnswer(answer: number, isRight: boolean) : void {
    if(!this.isFinished) {
      this.selectedAnswer = answer;
      this.solveQuestion.emit(isRight);
    }
  }
  isSelectedAnswer(answer: number): boolean {
    return this.selectedAnswer == answer;
  }

}
