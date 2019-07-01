import React from "react";
import { View } from "react-native";
import { createStore } from "redux";
import { Provider } from "react-redux";

import reducer from "../reducers/combinedReducer";
import ToDoListContainer from "../containers/ToDoListContainer";
import FormContainer from "../containers/FormContainer";
import styles from "../styles/ExpandableToDoList";

const store = createStore(reducer);

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <ToDoListContainer />
          <FormContainer />
        </View>
      </Provider>
    );
  }
}
