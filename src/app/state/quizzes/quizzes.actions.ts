import { createAction, props } from "@ngrx/store";
import { Quiz } from "src/app/models/models";

export enum Types {
  load = '[Quizzes] load',
  loadSuccess = '[Quizzes] load succes',
  loadfailure = '[Quizzes] load failure'
}

export const load = createAction(Types.load);
export const loadSuccess = createAction(Types.loadSuccess, props<{quizzes: Quiz[]}>());
export const loadfailure = createAction(Types.loadfailure, props<{error: any}>());
