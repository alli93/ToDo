import React from "react";

import { View, TouchableOpacity, Text, TextInput } from "react-native";
import Form from "react-native-form";

import styles from "../styles/ToDoForm";

export default class ToDoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { onFormSubmit: props.onFormSubmit };
  }
  render() {
    return (
      <Form ref="toDoForm" style={styles.container}>
        <TextInput
          type="TextInput"
          name="toDoInput"
          style={styles.textInput}
          placeholder="Tap to type :)"
          placeholderTextColor="grey"
        />
        <View style={styles.submitButtonContainer}>
          <TouchableOpacity
            style={styles.submitButton}
            onPress={() => {
              this.state.onFormSubmit(this.refs.toDoForm.getValues().toDoInput);
            }}
          >
            <Text style={styles.submitText}>Submit!</Text>
          </TouchableOpacity>
        </View>
      </Form>
    );
  }
}
