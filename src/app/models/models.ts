export class Quiz {
  id: number;
  title: string;
  description: string;
  questions: Question[];
}

export class Question {
  id: number;
  text: string;
  answers?: Answer[];
  rightAnswer: number;
}

export class Answer {
  id: number;
  text: string;
}

export class QuizResult {
  quizTitle: string;
  time: number;
  questions: {
    count: number;
    solved: {
      right: number;
      wrong: number;
    };
  }
  nextQuiz: number;
}
