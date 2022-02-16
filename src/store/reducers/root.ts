import {actionInterface, rootReducerTypes} from "../types/rootReducerTypes";
import {ACTION_TYPES} from "../../utils/constants";
import {randomCharGenerator} from "../../utils/utilsCommon";

const initialState: rootReducerTypes = {
  prevAttempt: [],
  currentNumber: `${randomCharGenerator()}`
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
        prevAttempt: [],
        currentNumber: `${randomCharGenerator()}`
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
