import { Dimensions, Platform } from "react-native";

const { width, height } = Dimensions.get("window");

export default {
  root: {
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#FFF"
  },
  viewOne: {
    marginTop: height * 0.02,
    width: width * 85,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center"
  },
  text1: {
    fontSize: 13,
    fontWeight: "600",
    color: "black"
  },
  text2: {
    fontSize: 15,
    fontWeight: "normal",
    color: "black",
    marginTop: height * 0.02
  },
  text3: {
    fontSize: 13,
    fontWeight: "400",
    color: "#3F3F3F",
    width: width * 0.4
  },
  viewTwo: {
    marginTop: height * 0.02,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  buttonGroup: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: height * 0.02
  },
  button1: {
    backgroundColor: "#FFE100",
    width: 65,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
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
  },
  iconContainer: {
    flexDirection: "column",
    marginLeft: 20,
    marginRight: 20,
    justifyContent: "flex-start",
    alignItems: "center"
  },
  iconView: {
    height: 50,
    width: 50,
    backgroundColor: "#FFE100",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50
  },
  homeIcon: {
    width: 35,
    height: 35
  },
  formInputRoot: {
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    width: width * 0.85,
    marginTop: height * 0.02
  },
  formInput: {
    width: width * 0.85,
    height: 40,
    borderColor: "#3F3F3F",
    borderWidth: 1,
    borderRadius: 6,
    paddingLeft: 20,
    marginTop: height * 0.015,
    fontSize: 12
  },
  formTextError: {
    fontSize: 10,
    color: "#FF0000",
    fontWeight: "normal",
    marginTop: 1
  },
  formInputGroupRoot: {
    width: width * 0.85,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: height * 0.012
  },
  picker: {
    borderColor: "#3F3F3F",
    borderWidth: 0.8,
    borderRadius: 5,
    width: width * 0.4,
    height: 40,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: height * 0.015,
    paddingLeft: 5,
    paddingRight: 5
  },
  queryView: {
    width: width * 0.85,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  }
};
