import React from "react";

import { View, Text } from "react-native";

import styles from "../styles/ToDoListHeader";

const ToDoListHeader = () => {
  return (
    <View>
      <Text style={styles.text}>Stuff to do...</Text>
    </View>
  );
};

export default ToDoListHeader;
