import { put,call } from "redux-saga/effects";
import * as actionTypes from "../actions";

import * as jokesService from "../../services/jokesService";

export function* setJokesSaga(payload) {
  try {
    const jokes = yield call(jokesService.getJokes,payload.payload);
   yield put({ type: actionTypes.SET_JOKES_SUCCESS, payload:jokes }) ;

  } catch(error) {
    console.log(error)
    // yield put({ type: types.SET_MESSAGE, error });
  }
}