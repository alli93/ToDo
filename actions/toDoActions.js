import { ADD_TODO, TOGGLE_TODO, REMOVE_TODO } from "./actionTypes";

export function addToDo(text) {
  return {
    type: ADD_TODO,
    text
  };
}

export function toggleToDo(index) {
  return {
    type: TOGGLE_TODO,
    index
  };
}

export function removeToDo(index) {
  return {
    type: REMOVE_TODO,
    index
  };
}
