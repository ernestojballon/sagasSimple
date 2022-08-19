import * as actionTypes from "../actions/index"

const initialState = {
  jokes: [],
}
const jokesReducer = (state = initialState, action) => {

  const {type,payload} = action;
  switch (type) {
    case actionTypes.SET_JOKES_SUCCESS:
      return {...state,jokes:payload};
    default:
      return state;
  }
}
export default jokesReducer;