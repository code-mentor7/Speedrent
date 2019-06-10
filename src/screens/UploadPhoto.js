import React, { Component, Fragment } from "react";
import { CheckBox, Container } from "native-base";
import {
  TouchableOpacity,
  ScrollView,
  TextInput,
  Text,
  View,
  Image
} from "react-native";
import Header from "./common/Header";
import Icon from "react-native-vector-icons/FontAwesome";

import ImagePicker from "react-native-image-picker";

import Icon4 from "../../Images/Icon4.png";
import Icon5 from "../../Images/Icon5.png";

import Icon6 from "../../Images/Icon6.png";
import Icon7 from "../../Images/Icon7.png";
import Icon8 from "../../Images/Icon8.png";

import UploadPhotoStyle from "../styles/UploadPhoto.style";

export default class UploadPhoto extends Component {
  constructor(props) {
    super(props);

    this.state = {
      avatarSource: {},
      need_a_photo_grapher: true
    };
  }

  _updateNeedPhotoGrapher = val => () =>
    this.setState({ ...this.state, need_a_photo_grapher: val });

  _navigateMyListing = () => this.props.navigation.navigate("MyListing");

  _imagePikcer = () => {
    const options = {
      title: "Select Avatar",
      storageOptions: {
        skipBackup: true,
        path: "images"
      }
    };

    ImagePicker.showImagePicker(options, response => {
      console.log("Response = ", response);

      alert(JSON.stringify(response));

      if (response.didCancel) {
        console.log("User cancelled image picker");
      } else if (response.error) {
        console.log("ImagePicker Error: ", response.error);
      } else if (response.customButton) {
        console.log("User tapped custom button: ", response.customButton);
      } else {
        const source = { uri: response.uri };

        // You can also display the image using data:
        // const source = { uri: 'data:image/jpeg;base64,' + response.data };

        this.setState({
          avatarSource: source
        });

        alert(JSON.stringify(source));
      }
    });
  };

  render() {
    return (
      <Container style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
        <Header headerTitle="Upload Photo" navigation={this.props.navigation} />
        <ScrollView contentContainerStyle={UploadPhotoStyle.root}>
          <View style={UploadPhotoStyle.view1}>
            <Text style={UploadPhotoStyle.text1}>Photo Guideline</Text>
            <View style={UploadPhotoStyle.view2}>
              <View style={UploadPhotoStyle.view3}>
                <Image source={Icon6} style={UploadPhotoStyle.icons} />
                <Text style={UploadPhotoStyle.text3}>At least</Text>
                <Text style={UploadPhotoStyle.text3}>4 non-watermarked</Text>
              </View>
              <View style={UploadPhotoStyle.view3}>
                <Image source={Icon7} style={UploadPhotoStyle.icons} />
                <Text style={UploadPhotoStyle.text3}>High</Text>
                <Text style={UploadPhotoStyle.text3}>quality photo</Text>
              </View>
              <View style={UploadPhotoStyle.view3}>
                <Image source={Icon8} style={UploadPhotoStyle.icons} />
                <Text style={UploadPhotoStyle.text3}>Bright and</Text>
                <Text style={UploadPhotoStyle.text3}>natural lighting</Text>
              </View>
            </View>
            <Text style={UploadPhotoStyle.text2}>
              I need a photographer to take high quality photos:
            </Text>
            <View style={UploadPhotoStyle.buttonGroup}>
              <TouchableOpacity
                style={
                  this.state.need_a_photo_grapher
                    ? UploadPhotoStyle.button1
                    : {
                        ...UploadPhotoStyle.button1,
                        backgroundColor: "#E5E5E5"
                      }
                }
                onPress={this._updateNeedPhotoGrapher(
                  !this.state.need_a_photo_grapher
                )}
              >
                <Text
                  style={
                    this.state.need_a_photo_grapher
                      ? UploadPhotoStyle.text1
                      : { ...UploadPhotoStyle.text1, color: "#8A8A8A" }
                  }
                >
                  Yes
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={
                  this.state.need_a_photo_grapher
                    ? {
                        ...UploadPhotoStyle.button1,
                        backgroundColor: "#E5E5E5"
                      }
                    : UploadPhotoStyle.button1
                }
                onPress={this._updateNeedPhotoGrapher(
                  !this.state.need_a_photo_grapher
                )}
              >
                <Text
                  style={
                    this.state.need_a_photo_grapher
                      ? { ...UploadPhotoStyle.text1, color: "#8A8A8A" }
                      : UploadPhotoStyle.text1
                  }
                >
                  No
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={UploadPhotoStyle.photoGallery}>
            <View style={UploadPhotoStyle.photoBorder}>
              <View style={UploadPhotoStyle.iconView}>
                <Image source={Icon4} />
              </View>
            </View>
            <View style={UploadPhotoStyle.photoBorder}>
              <View style={UploadPhotoStyle.iconView}>
                <Image source={Icon4} />
              </View>
            </View>
          </View>
          <View style={UploadPhotoStyle.photoGallery}>
            <View style={UploadPhotoStyle.photoBorder}>
              <View style={UploadPhotoStyle.iconView}>
                <Image source={Icon4} />
              </View>
            </View>
            <TouchableOpacity
              style={UploadPhotoStyle.photoBorder}
              onPress={this._imagePikcer}
            >
              <View style={UploadPhotoStyle.view4}>
                <View style={UploadPhotoStyle.iconView}>
                  <Image source={Icon5} />
                </View>
                <Text
                  style={{
                    fontSize: 15,
                    color: "black"
                  }}
                >
                  Add more photos
                </Text>
              </View>
            </TouchableOpacity>
          </View>
          <View
            style={{
              margin: 50
            }}
          />
          <TouchableOpacity
            onPress={this._navigateMyListing}
            style={UploadPhotoStyle.button2}
          >
            <Text style={UploadPhotoStyle.text1}>Next</Text>
          </TouchableOpacity>
        </ScrollView>
      </Container>
    );
  }
}
