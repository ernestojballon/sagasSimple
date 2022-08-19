import * as actionTypes from "."
export const setJokes = (jokesNumber)=> {
  return {
    type: actionTypes.SET_JOKES,
    payload: jokesNumber
  }
}