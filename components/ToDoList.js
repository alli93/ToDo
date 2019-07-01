import React from "react";
import { View, SectionList } from "react-native";

import ToDoSwipeComponent from "./ToDoSwipeComponent";
import ToDoListHeader from "./ToDoListHeader";

import styles from "../styles/ToDoList";

const ToDoList = ({ toDos, onToDoToggle, onToDoRemove }) => {
  return (
    <View style={styles.container}>
      <ToDoListHeader />
      <SectionList
        renderItem={({ item, index }) => (
          <ToDoSwipeComponent
            toDoItem={item}
            onToggle={() => {
              onToDoToggle(index);
            }}
            onRemove={() => {
              onToDoRemove(index);
            }}
            key={index}
          />
        )}
        sections={[{ title: "", data: toDos }]}
        keyExtractor={(item, index) => item + index}
      />
    </View>
  );
};

export default ToDoList;
