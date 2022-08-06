import { Action, ActionReducer, createFeatureSelector, createReducer, on } from "@ngrx/store";
import { Quiz } from "src/app/models/models";
import { loadFailure, set } from "./play-quiz.actions";

export const initialState = new Quiz();

export const _reducer = createReducer(
  initialState,
  on(set,(state, { quiz }) => {
    return quiz;
  }),
  on(loadFailure, (state, {error}) => {
    return {...state, error};
  })
);

export function persistStateReducer(_reducer: ActionReducer<Quiz>) {
  const localStorageKey = "_playQuiz";
  return (state: Quiz, action: Action) => {
    if (state === undefined) {
      const persisted = localStorage.getItem(localStorageKey);
      return persisted ? JSON.parse(persisted) : _reducer(state,action);
    }
    const nextState = _reducer(state,action);
    localStorage.setItem(localStorageKey, JSON.stringify(nextState));
    return nextState;
  };
}

export function updateStateReducer(_reducer: ActionReducer<Quiz>) {
  return (state: Quiz, action: Action) => {
    return _reducer(state, action);
  };
}

export function playQuizReducer(state: Quiz, action: Action){
  return updateStateReducer(persistStateReducer(_reducer))(state,action);
}

// selectors

export const playQuiz = createFeatureSelector<Quiz>('playQuiz');
