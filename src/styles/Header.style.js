import { Dimensions, Platform } from "react-native";

const { width, height } = Dimensions.get("window");

export default {
  header: {
    height: (height * 10) / 100,
    width: "100%",
    backgroundColor: "#FFDF00",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingLeft: (width * 5) / 100
  },
  headerLeftArrow: {
    color: "black",
    fontSize: 20,
    fontWeight: "normal"
  },
  headerTitle: {
    fontSize: 20,
    color: "black",
    fontWeight: "bold",
    paddingLeft: (width * 5) / 100
  }
};
