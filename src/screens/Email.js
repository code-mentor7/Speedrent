import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  TextInput,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
  FlatList,
  ImageBackground,
  ActivityIndicator
} from "react-native";
import {
  Container,
  Header,
  Left,
  Body,
  Right,
  Title,
  Content,
  Item,
  Input,
  Card,
  Picker,
  Form,
  CardItem,
  Button
} from "native-base";
import { Avatar, Icon, Divider } from "react-native-elements";
import PhoneInput from "react-native-phone-input";
import APICaller from "../util/apiCaller";
import Http from "../api/http";

export default class Number extends Component {
  registerWithEmail() {
    const { navigation } = this.props;
    const email = "test@gmail.com";
    const body = {
      email
    };
    APICaller(
      Http.registerEmailEndpoint,
      "POST",
      "",
      JSON.stringify(body)
    ).then(json => {
      this.props.navigation.navigate("EmailConfirm");
    });
  }

  render() {
    return (
      <Container style={styles.header}>
        <Header
          transparent
          style={{ justifyContent: "flex-start", paddingLeft: 20 }}
        >
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("LoginOptions")}
          >
            <Icon name="arrow-back" size={35} style={{ textAlign: "left" }} />
          </TouchableOpacity>
        </Header>
        <View style={{ flexDirection: "row" }}>
          <View style={{ justifyContent: "center", paddingTop: 30 }}>
            <Text
              style={{
                fontWeight: "600",
                fontSize: 25,
                paddingLeft: 35,
                color: "#000"
              }}
            >
              Enter your email address
            </Text>
          </View>
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            paddingTop: 70
          }}
        >
          <View
            style={{
              justifyContent: "center",
              height: 50,
              width: "80%",
              borderColor: "#000",
              borderWidth: 1,
              borderRadius: 5
            }}
          >
            <TextInput
              placeholder="your email address"
              style={{
                justifyContent: "center",
                textAlign: "center",
                color: "#000"
              }}
            />
          </View>
        </View>
        <View style={{ flexDirection: "row", paddingTop: 30 }}>
          <View style={{ justifyContent: "center" }}>
            <Text
              style={{
                fontSize: 15,
                paddingLeft: 35,
                fontStyle: "italic",
                color: "#000"
              }}
            >
              Fill in your email address at above to Login
            </Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-around",
            marginVertical: 50
          }}
        >
          <View
            style={{
              justifyContent: "center",
              backgroundColor: "#FFE100",
              height: 42,
              width: "75%",
              borderRadius: 5,
              shadowColor: "black",
              shadowOpacity: 0.12,
              elevation: 6,
              shadowOffset: { width: 5, height: 5 }
            }}
          >
            <TouchableOpacity onPress={() => this.registerWithEmail()}>
              <Text
                style={{
                  fontWeight: "600",
                  fontSize: 15,
                  textAlign: "center",
                  color: "#000"
                }}
              >
                Next
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Container>
    );
  }
}
const styles = StyleSheet.create({
  header: {
    flex: 1,
    backgroundColor: "#FFFFFF"
  },
  headerview: {
    flexDirection: "row",
    paddingTop: 20,
    paddingLeft: 20
  }
});
