import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground
} from "react-native";
import { Container, Header } from "native-base";
export default class LoadingScreen extends Component {
  render() {
    return (
      <Container style={styles.header}>
        <Header transparent />
        <View style={styles.headerview}>
          <View style={{ justifyContent: "flex-start" }}>
            <ImageBackground
              source={require("../../Images/home.png")}
              style={{ height: 90, width: 90, justifyContent: "center" }}
            />
          </View>
        </View>
        <View style={{ flexDirection: "row", justifyContent: "center" }}>
          <View style={{ justifyContent: "center", paddingTop: 20 }}>
            <Text style={{ fontWeight: "bold", fontSize: 25, color: "#000" }}>
              Welcome to SPEEDHOME
            </Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            paddingTop: 30
          }}
        >
          <View
            style={{
              justifyContent: "center",
              backgroundColor: "#fff",
              height: 40,
              width: "80%",
              borderRadius: 5
            }}
          >
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate("LoginOptions")}
            >
              <Text
                style={{
                  fontWeight: "500",
                  fontSize: 15,
                  letterSpacing: 1,
                  textAlign: "center",
                  color: "#000"
                }}
              >
                Login/Register
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            paddingTop: 10
          }}
        >
          <View
            style={{
              justifyContent: "center",
              height: 40,
              width: "80%",
              borderColor: "#000",
              borderWidth: 1,
              borderRadius: 5
            }}
          >
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate("LoadingScreen")}
            >
              <Text
                style={{
                  fontWeight: "600",
                  fontSize: 15,
                  textAlign: "center",
                  color: "#000"
                }}
              >
                How about NO!
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            paddingTop: 40
          }}
        >
          <View
            style={{ justifyContent: "center", height: "50%", width: "80%" }}
          >
            <Text
              style={{
                fontSize: 15,
                textAlign: "left",
                fontFamily: "OpenSans-Regular",
                color: "#000"
              }}
            >
              By tapping Login, Create Account or Skip, I agree to SPEEDHOME
              Terms of Service, Payments Terms of Service, Privacy Policy, and
              No discrimination Policy.
            </Text>
          </View>
        </View>
      </Container>
    );
  }
}
const styles = StyleSheet.create({
  header: {
    flex: 1,
    backgroundColor: "#FFE100"
  },
  headerview: {
    flexDirection: "row",
    paddingLeft: 30
  }
});
