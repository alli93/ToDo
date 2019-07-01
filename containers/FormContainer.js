import { connect } from "react-redux";

import { toggleForm } from "../actions/formActions";
import { addToDo } from "../actions/toDoActions";
import AddToDo from "../components/AddToDo";

const mapStateToProps = state => {
  return {
    displayForm: state.displayForm
  };
};

const mapDispatchToProps = dispatch => {
  return {
    toggleFormDisplay: () => {
      dispatch(toggleForm());
    },
    submitForm: toDo => {
      dispatch(addToDo(toDo));
      dispatch(toggleForm());
    }
  };
};

const FormContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(AddToDo);

export default FormContainer;
