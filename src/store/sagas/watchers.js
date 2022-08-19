import { takeLatest } from 'redux-saga/effects';
import * as actionTypes from '../actions';
import { setJokesSaga } from "./jokesSaga"

export default function* watchActions() {
  // jokes watchers
  yield takeLatest(actionTypes.SET_JOKES, setJokesSaga);
  
}