import { StyleSheet } from "react-native";

import common from "./common";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: common.yellow,
    flexDirection: "row",
    alignItems: "stretch"
  },
  textInput: {
    flex: 3,
    fontSize: 22,
    textAlign: "center",
    paddingLeft: 5
  },
  submitButton: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: common.blue
  },
  submitButtonContainer: {
    flex: 1,
    backgroundColor: common.grey,
    padding: 3
  },
  submitText: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center"
  }
});
