import { connect } from "react-redux";

import { toggleToDo, removeToDo } from "../actions/toDoActions";
import ToDoList from "../components/ToDoList";

const mapStateToProps = state => {
  return {
    toDos: state.toDoList
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onToDoToggle: index => {
      dispatch(toggleToDo(index));
    },
    onToDoRemove: index => {
      dispatch(removeToDo(index));
    }
  };
};

const ToDoListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ToDoList);

export default ToDoListContainer;
