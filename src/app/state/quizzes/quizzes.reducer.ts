import { Action, createFeatureSelector, createReducer, createSelector, on } from "@ngrx/store";
import { EntityState, EntityAdapter, createEntityAdapter } from "@ngrx/entity";
import { Quiz } from "src/app/models/models";
import { loadfailure, loadSuccess } from "./quizzes.actions";

export interface QuizzesState extends EntityState<Quiz> {
  error: any;
  selectQuizId: number | null;
}

export function selectQuizId(a: Quiz): number {
  return a.id;
}

export const adapter: EntityAdapter<Quiz> = createEntityAdapter({selectId: selectQuizId});

export const initialState = adapter.getInitialState();

export const _reducer = createReducer(
  initialState,
  on(loadSuccess, (state, {quizzes}) => adapter.setAll(quizzes, state)),
  on(loadfailure, (state, {error}) => ({...state, error}))
);

export function quizzesReducer(state: QuizzesState, action: Action){
  return _reducer(state, action);
}

export const {selectAll, selectEntities} = adapter.getSelectors();

export const feature = createFeatureSelector<QuizzesState>('quizzes');

export const quizzes = createSelector(
  feature, selectAll
);
