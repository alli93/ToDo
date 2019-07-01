import { TOGGLE_TODO, ADD_TODO, REMOVE_TODO } from "../actions/actionTypes";

const initialState = [
  { text: "Do my homework", completed: false },
  { text: "Learn about redux", completed: false }
];

export default function toDoListReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      // input check for empty string and newline sign
      if (action.text !== "" && !action.text.includes("\n")) {
        return [...state, { text: action.text, completed: false }];
      } else {
        return state;
      }
    case TOGGLE_TODO:
      return state.map((toDo, index) => {
        if (index === action.index) {
          return { ...toDo, completed: !toDo.completed };
        }
        return toDo;
      });
    case REMOVE_TODO:
      return state.filter((toDo, index) => {
        return index !== action.index;
      });
    default:
      return state;
  }
}
