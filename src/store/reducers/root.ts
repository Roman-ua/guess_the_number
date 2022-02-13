import {actionInterface, rootReducerTypes} from "../types/rootReducerTypes";
import {ACTION_TYPES} from "../../utils/constants";

const initialState: rootReducerTypes = {
  prevAttempt: [],
  currentNumber: ''
};

export const rootReducer = (state = initialState, action: actionInterface) => {
  switch (action.type) {
    case ACTION_TYPES.SET_ATTEMPT:
      return {
        ...state,
        prevAttempt: [...state.prevAttempt, action.data]
      };
    case ACTION_TYPES.CLEAR_ATTEMPT:
      return {
        ...state,
        prevAttempt: []
      };
    case ACTION_TYPES.SET_CURRENT_NUMBER:
      return {
        ...state,
        currentNumber: action.data
      };
    default:
      return state;
  }
};
