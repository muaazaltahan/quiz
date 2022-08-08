export class Quiz {
  id: number;
  title: string;
  description: string;
  questions: Question[];
}

export class Question {
  id: string;
  text: string;
  answers?: Answer[];
  rightAnswer: number;
}

export class Answer {
  id: string;
  text: string;
}

