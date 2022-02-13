import {ACTION_TYPES} from "../../utils/constants";

export function actionSetAttempt(data: string) {
  return {
    type: ACTION_TYPES.SET_ATTEMPT,
    data,
  };
}
export function actionSetClearAttempt() {
  return {
    type: ACTION_TYPES.CLEAR_ATTEMPT,
  };
}
export function actionSetSetCurrentNumber(data: string) {
  return {
    type: ACTION_TYPES.SET_CURRENT_NUMBER,
    data,
  };
}
