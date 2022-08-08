import { createAction, props } from "@ngrx/store";
import { Quiz } from "src/app/models/models";

export enum Types {
  set = '[PlayQuiz] set',
  load = '[PlayQuiz] load',
  loadSuccess = '[PlayQuiz] load success',
  loadFailure = '[PlayQuiz] load failure'
}


export const load = createAction(Types.load, props<{quizId: number}>());
export const set = createAction(Types.set,props<{quiz: Quiz}>());
export const loadFailure = createAction(Types.loadFailure, props<{error: any}>());
