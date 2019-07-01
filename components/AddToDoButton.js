import React from "react";

import { View, TouchableOpacity, Text } from "react-native";

import styles from "../styles/AddToDoButton";

const AddToDoButton = ({ onButtonPress }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={onButtonPress}>
        <Text style={styles.text}>Add ToDo</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AddToDoButton;
