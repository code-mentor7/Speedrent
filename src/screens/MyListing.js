import React, { Component } from "react";
import {
  TouchableOpacity,
  ScrollView,
  TextInput,
  Text,
  View,
  Image,
  ImageBackground
} from "react-native";
import { Container } from "native-base";

// Custom Components
import Header from "./common/Header";

import { Icon } from "react-native-elements";
import FontAwesome from "react-native-vector-icons/FontAwesome";

import MyListingStyle from "../styles/MyListing.style";

import CoverOne from "../../Images/Covers/Cover1.png";
import Icon1 from "../../Images/Icon1.png";
import Icon2 from "../../Images/Icon2.png";
import Icon3 from "../../Images/Icon3.png";

export default class MyListing extends Component {
  render() {
    return (
      <Container style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
        <Header headerTitle='My Listing' navigation={this.props.navigation} />
        <ScrollView contentContainerStyle={MyListingStyle.root}>
          <TouchableOpacity style={MyListingStyle.view1}>
            <View style={MyListingStyle.button1}>
              <Text style={MyListingStyle.text1}>Create Listing</Text>
            </View>
          </TouchableOpacity>
          <View style={MyListingStyle.view2}>
            <ImageBackground
              source={CoverOne}
              style={MyListingStyle.imagebg1}
              imageStyle={MyListingStyle.image}
            >
              <View style={MyListingStyle.textView1}>
                <Text style={MyListingStyle.text2}>Lilly & Rose Apartment</Text>
              </View>
            </ImageBackground>
            <View style={MyListingStyle.view3}>
              <Text style={MyListingStyle.text1}>RM 1,600</Text>
              <Text style={MyListingStyle.text3}>
                581 sqft | High-Rise | Partially Furnished
              </Text>
              <View style={MyListingStyle.view4}>
                <View style={MyListingStyle.view5}>
                  <Text style={MyListingStyle.text1}>3</Text>
                  <Image source={Icon1} style={MyListingStyle.ml1} />
                </View>
                <View style={MyListingStyle.view5}>
                  <Text style={MyListingStyle.text1}>2</Text>
                  <Image source={Icon2} style={MyListingStyle.ml1} />
                </View>
                <View style={MyListingStyle.view5}>
                  <Text style={MyListingStyle.text1}>0</Text>
                  <Image source={Icon3} style={MyListingStyle.ml1} />
                </View>
              </View>
              <View style={MyListingStyle.buttonGroup1}>
                <TouchableOpacity style={MyListingStyle.button2}>
                  <Text style={MyListingStyle.text1}>Edit Listing</Text>
                </TouchableOpacity>
                <TouchableOpacity style={MyListingStyle.button3}>
                  <Text style={MyListingStyle.text1}>Delete</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ScrollView>
      </Container>
    );
  }
}
