import { StyleSheet } from "react-native";

import common from "./common";

const generateStyle = toDoItem => {
  return StyleSheet.create({
    container: {
      flex: 1,
      marginBottom: 2,
      flexDirection: "row",
      justifyContent: "flex-start",
      alignItems: "stretch"
    },
    toDoText: {
      flex: 1,
      fontSize: 28,
      textDecorationLine: toDoItem.completed ? "line-through" : "none",
      fontStyle: toDoItem.completed ? "italic" : "normal",
      padding: 5
    },
    text: {
      flex: 1,
      fontWeight: "bold",
      fontSize: 18
    },
    removeToDoButton: {
      flex: 1,
      backgroundColor: common.blue,
      alignItems: "flex-start",
      justifyContent: "center"
    },
    removeToDoButtonContainer: {
      flex: 1,
      padding: 5,
      backgroundColor: common.black
    },
    toggleButtonContainer: {
      flex: 1,
      backgroundColor: common.white,
      marginVertical: 5,
      padding: 3
    },
    toggleButton: {
      flex: 1,
      backgroundColor: toDoItem.completed ? common.black : common.white
    },
    swipeContainer: { flex: 10 }
  });
};

export default generateStyle;
