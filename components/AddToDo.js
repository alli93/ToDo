import React from "react";

import { View } from "react-native";

import AddToDoButton from "./AddToDoButton";
import ToDoForm from "./ToDoForm";

import styles from "../styles/AddToDo";

const AddToDo = ({ displayForm, submitForm, toggleFormDisplay }) => {
  if (displayForm) {
    return (
      <View style={styles.container}>
        <ToDoForm onFormSubmit={submitForm} />
      </View>
    );
  } else {
    return (
      <View style={styles.container}>
        <AddToDoButton onButtonPress={toggleFormDisplay} />
      </View>
    );
  }
};

export default AddToDo;
