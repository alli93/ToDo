import { StyleSheet } from "react-native";

import common from "./common";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: common.black
  },
  button: {
    flex: 1,
    backgroundColor: common.blue,
    justifyContent: "center",
    alignItems: "center"
  },
  text: {
    fontSize: 28,
    fontWeight: "bold"
  }
});
