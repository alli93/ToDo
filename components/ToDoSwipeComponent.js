import React from "react";

import { View, Text, TouchableOpacity } from "react-native";

import Swipeable from "react-native-swipeable";

import generateStyle from "../styles/ToDoSwipeComponent";

export default class ToDoSwipeComponent extends React.Component {
  render() {
    const styles = generateStyle(this.props.toDoItem);
    const rightButton = [
      <View style={styles.removeToDoButtonContainer}>
        <TouchableOpacity
          style={styles.removeToDoButton}
          onPress={this.props.onRemove}
        >
          <Text style={styles.text}>Remove</Text>
        </TouchableOpacity>
      </View>
    ];

    return (
      <View style={styles.container}>
        <View style={styles.toggleButtonContainer}>
          <TouchableOpacity
            style={styles.toggleButton}
            onPress={this.props.onToggle}
          />
        </View>
        <View style={styles.swipeContainer}>
          <Swipeable rightButtons={rightButton}>
            <Text style={styles.toDoText}>{this.props.toDoItem.text}</Text>
          </Swipeable>
        </View>
      </View>
    );
  }
}
