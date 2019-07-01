import { TOGGLE_FORM_DISPLAY } from "../actions/actionTypes";

export default function formReducer(state = false, action) {
  switch (action.type) {
    case TOGGLE_FORM_DISPLAY:
      return !state;
    default:
      return state;
  }
}
