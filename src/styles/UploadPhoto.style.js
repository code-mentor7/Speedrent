import { Dimensions, Platform } from "react-native";

const { width, height } = Dimensions.get("window");

const flexForm1 = {
  justifyContent: "center",
  alignItems: "center"
};

export default {
  root: {
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#FFF"
  },
  view1: {
    marginTop: height * 0.02,
    width: width * 85,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center"
  },
  view2: {
    width: width * 0.85,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginTop: height * 0.02
  },
  view3: {
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center"
  },
  view4: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  text1: {
    fontSize: 15,
    fontWeight: "600",
    color: "black"
  },
  text2: {
    fontSize: 15,
    fontWeight: "400",
    color: "#3F3F3F",
    marginTop: height * 0.02
  },
  text3: {
    fontSize: 10,
    fontWeight: "bold",
    color: "#727272"
  },
  icons: {
    marginBottom: 2
  },
  buttonGroup: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: height * 0.02
  },
  button1: {
    backgroundColor: "#FFE100",
    width: 78,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
    borderRadius: 50
  },
  photoGallery: {
    width: width * 0.85,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: height * 0.02
  },
  photoBorder: {
    width: width * 0.4,
    height: width * 0.4,
    borderRadius: 5,
    borderColor: "#7D7D7D",
    borderWidth: 2,
    borderStyle: "dotted",
    ...flexForm1
  },
  iconView: {
    height: 64,
    width: 64,
    backgroundColor: "#FFE100",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50
  },
  button2: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFE100",
    height: 42,
    width: "85%",
    borderRadius: 5,
    shadowColor: "black",
    shadowOpacity: 0.12,
    elevation: 6,
    shadowOffset: { width: 5, height: 5 },
    marginTop: height * 0.02,
    marginBottom: height * 0.03
  }
};
