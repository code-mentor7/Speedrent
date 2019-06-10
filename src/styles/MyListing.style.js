import { Dimensions, Platform } from "react-native";

const { width, height } = Dimensions.get("window");

const layout1 = {
  justifyContent: "center",
  alignItems: "center"
};

const buttonStyle1 = bgcolor => ({
  width: 132,
  height: 40,
  borderRadius: 6,
  backgroundColor: bgcolor,
  ...layout1
});

export default {
  root: {
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#FFF"
  },
  view1: {
    borderColor: "#707070",
    borderWidth: 1,
    borderRadius: 6,
    borderStyle: "dashed",
    height: 182,
    width: width * 0.85,
    marginTop: height * 0.04,
    ...layout1
  },
  view2: {
    height: 314,
    width: width * 0.85,
    borderColor: "#707070",
    borderRadius: 6,
    borderWidth: 1,
    marginTop: height * 0.04,
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 50,
    shadowColor: "black",
    shadowOpacity: 0.012,
    elevation: 6,
    shadowOffset: { width: 5, height: 5 },
    backgroundColor: "#FFFFFF"
  },
  view3: {
    width: "100%",
    height: 150,
    borderRadius: 6,
    zIndex: 1,
    backgroundColor: "#FFFFFF",
    marginTop: -20,
    marginBottom: 5,
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "flex-start",
    paddingLeft: 20
  },
  view4: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center"
  },
  view5: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    width: 40,
    marginRight: 30
  },
  ml1: {
    marginLeft: 10
  },
  buttonGroup1: {
    width: width * 0.8,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginLeft: -12,
    marginTop: 10
  },
  button1: {
    width: 154,
    height: 40,
    ...layout1,
    borderRadius: 6,
    backgroundColor: "#FFE100"
  },
  button2: buttonStyle1("#FFE100"),
  button3: {
    ...buttonStyle1("#FFFFFF"),
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 6
  },
  text1: {
    color: "black",
    fontSize: 15,
    fontWeight: "bold"
  },
  text2: {
    color: "white",
    fontSize: 15,
    fontWeight: "bold",
    marginLeft: 20
  },
  text3: {
    fontSize: 12,
    fontWeight: "normal",
    color: "#717171"
  },
  textView1: {
    marginBottom: 18,
    paddingBottom: 2,
    width: width * 0.85,
    backgroundColor: "rgba(0, 0, 0, 0.3)"
  },
  // imagebg1: {
  //   width: "100%",
  //   height: 180,
  //   marginTop: -4.8,
  //   zIndex: -1,
  //   flexDirection: "column",
  //   justifyContent: "flex-end",
  //   alignItems: "flex-start"
  // },
  imagebg1: {
    width: width * 0.85,
    height: 180,
    marginTop: -4.8,
    zIndex: -1,
    flexDirection: "column",
    justifyContent: "flex-end",
    alignItems: "flex-start",
    paddingLeft: 0
  },
  image: {
    borderRadius: 6,
    width: width * 0.85,
    resizeMode: "stretch"
  }
};
