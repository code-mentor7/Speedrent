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

// import images
import HousesIcon from "../../Images/houses.png";
import HousesIconLite from "../../Images/houses_lite.png";
import BedIcon from "../../Images/bed.png";
import BedIconDark from "../../Images/bed_dark.png";
import ApartmentIcon from "../../Images/apartment.png";
import ApartmentIconDark from "../../Images/apartment_dark.png";

import CreateListingStyle from "../styles/CreateListing.style";

const FormInput = props => (
  <View style={CreateListingStyle.formInputRoot}>
    <Text style={CreateListingStyle.text1}> {props.title}</Text>
    <TextInput
      style={CreateListingStyle.formInput}
      placeholder={props.placeholder}
    />
    {props.showAlert && (
      <Text style={CreateListingStyle.formTextError}>{props.alertMsg}</Text>
    )}
  </View>
);

const FormInputGroup = props => (
  <View style={CreateListingStyle.formInputGroupRoot}>
    <View style={CreateListingStyle.formInputGroup}>
      <Text style={CreateListingStyle.text1}> Bedroom</Text>
      <TouchableOpacity style={CreateListingStyle.picker}>
        <Text>0</Text>
        <Icon name="chevron-down" />
      </TouchableOpacity>
    </View>
    <View style={CreateListingStyle.formInputGroup}>
      <Text style={CreateListingStyle.text1}> Bathroom</Text>
      <TouchableOpacity style={CreateListingStyle.picker}>
        <Text>0</Text>
        <Icon name="chevron-down" />
      </TouchableOpacity>
    </View>
  </View>
);

const FormInputGroup2 = props => (
  <View style={CreateListingStyle.formInputGroupRoot}>
    <View>
      <Text style={CreateListingStyle.text1}> Parking</Text>
      <TouchableOpacity style={{ ...CreateListingStyle.picker, width: 85 }}>
        <Text>0</Text>
        <Icon name="chevron-down" />
      </TouchableOpacity>
    </View>
    <View>
      <Text style={CreateListingStyle.text1}> Furnishing</Text>
      <TouchableOpacity style={{ ...CreateListingStyle.picker, width: 200 }}>
        <Text>0</Text>
        <Icon name="chevron-down" />
      </TouchableOpacity>
    </View>
  </View>
);

export default class CreateListing extends Component {
  constructor(props) {
    super(props);

    this.state = {
      property_type: "landed",
      im_the_owner_of_unit: true,
      is_the_price_negotiable: true,
      im_willing_to_fully_furnish: true
    };
  }

  _updatePropertyType = val => () =>
    this.setState({ ...this.state, property_type: val });

  _updateImTheOwnerOfUnit = val => () =>
    this.setState({ ...this.state, im_the_owner_of_unit: val });

  _updateIsThePriceNegotiable = val => () =>
    this.setState({ ...this.state, is_the_price_negotiable: val });

  _updateImWillingToFullyFurnish = val => () =>
    this.setState({ ...this.state, im_willing_to_fully_furnish: val });

  _navigateUploadPhoto = () => this.props.navigation.navigate("UploadPhoto");

  render() {
    return (
      <Container style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
        <Header
          headerTitle="Create Listing"
          navigation={this.props.navigation}
        />
        <ScrollView contentContainerStyle={CreateListingStyle.root}>
          <View style={CreateListingStyle.viewOne}>
            <Text style={CreateListingStyle.text1}>
              What is your property Type
            </Text>
            <View style={CreateListingStyle.viewTwo}>
              <View style={CreateListingStyle.iconContainer}>
                <TouchableOpacity
                  style={
                    this.state.property_type === "room"
                      ? CreateListingStyle.iconView
                      : {
                          ...CreateListingStyle.iconView,
                          backgroundColor: "#E5E5E5"
                        }
                  }
                  onPress={this._updatePropertyType("room")}
                >
                  <Image
                    source={
                      this.state.property_type === "room"
                        ? BedIconDark
                        : BedIcon
                    }
                  />
                </TouchableOpacity>
                <Text style={CreateListingStyle.text1}>Room</Text>
              </View>
              <View style={CreateListingStyle.iconContainer}>
                <TouchableOpacity
                  style={
                    this.state.property_type === "landed"
                      ? CreateListingStyle.iconView
                      : {
                          ...CreateListingStyle.iconView,
                          backgroundColor: "#E5E5E5"
                        }
                  }
                  onPress={this._updatePropertyType("landed")}
                >
                  <Image
                    source={
                      this.state.property_type === "landed"
                        ? HousesIcon
                        : HousesIconLite
                    }
                  />
                </TouchableOpacity>
                <Text style={CreateListingStyle.text1}>Landed</Text>
              </View>
              <View style={CreateListingStyle.iconContainer}>
                <TouchableOpacity
                  style={
                    this.state.property_type === "highrise"
                      ? CreateListingStyle.iconView
                      : {
                          ...CreateListingStyle.iconView,
                          backgroundColor: "#E5E5E5"
                        }
                  }
                  onPress={this._updatePropertyType("highrise")}
                >
                  <Image
                    source={
                      this.state.property_type === "highrise"
                        ? ApartmentIconDark
                        : ApartmentIcon
                    }
                  />
                </TouchableOpacity>
                <Text style={CreateListingStyle.text1}>High-Rise</Text>
              </View>
            </View>
            <Text style={CreateListingStyle.text2}>
              I am the owner of this unit:
            </Text>
            <View style={CreateListingStyle.buttonGroup}>
              <TouchableOpacity
                style={
                  this.state.im_the_owner_of_unit
                    ? CreateListingStyle.button1
                    : {
                        ...CreateListingStyle.button1,
                        backgroundColor: "#E5E5E5"
                      }
                }
                onPress={this._updateImTheOwnerOfUnit(
                  !this.state.im_the_owner_of_unit
                )}
              >
                <Text
                  style={
                    this.state.im_the_owner_of_unit
                      ? CreateListingStyle.text1
                      : { ...CreateListingStyle.text1, color: "#888888" }
                  }
                >
                  Yes
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={
                  this.state.im_the_owner_of_unit
                    ? {
                        ...CreateListingStyle.button1,
                        backgroundColor: "#E5E5E5"
                      }
                    : CreateListingStyle.button1
                }
                onPress={this._updateImTheOwnerOfUnit(
                  !this.state.im_the_owner_of_unit
                )}
              >
                <Text
                  style={
                    this.state.im_the_owner_of_unit
                      ? { ...CreateListingStyle.text1, color: "#888888" }
                      : CreateListingStyle.text1
                  }
                >
                  No
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <FormInput
            title="Property Name"
            placeholder="E.g Lily & Rose Apartment"
            showAlert={false}
            alertMsg="No Msg"
          />
          <FormInput
            title="Address"
            placeholder="E.g D 207, Jalan SS 26/10 Taman Mayang, Petaling Jaya"
            showAlert={false}
            alertMsg="No Msg"
          />
          <FormInput
            title="Post Code"
            placeholder="E.g 66558"
            showAlert={false}
            alertMsg="No Msg"
          />
          <FormInput
            title="Build-up Size (sqft)"
            placeholder="E.g 1000"
            showAlert={true}
            alertMsg="*this refers to the total area occupied by your property/house"
          />
          <FormInputGroup />
          <FormInputGroup2 />
          <FormInput
            title="Price"
            placeholder=""
            showAlert={false}
            alertMsg="No Msg"
          />
          <View style={CreateListingStyle.queryView}>
            <Text style={CreateListingStyle.text3}>
              Is the price negotiable:{" "}
            </Text>
            <View style={CreateListingStyle.buttonGroup}>
              <TouchableOpacity
                style={
                  this.state.is_the_price_negotiable
                    ? CreateListingStyle.button1
                    : {
                        ...CreateListingStyle.button1,
                        backgroundColor: "#E5E5E5"
                      }
                }
                onPress={this._updateIsThePriceNegotiable(
                  !this.state.is_the_price_negotiable
                )}
              >
                <Text
                  style={
                    this.state.is_the_price_negotiable
                      ? CreateListingStyle.text1
                      : { ...CreateListingStyle.text1, color: "#888888" }
                  }
                >
                  Yes
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={
                  this.state.is_the_price_negotiable
                    ? {
                        ...CreateListingStyle.button1,
                        backgroundColor: "#E5E5E5"
                      }
                    : CreateListingStyle.button1
                }
                onPress={this._updateIsThePriceNegotiable(
                  !this.state.is_the_price_negotiable
                )}
              >
                <Text
                  style={
                    this.state.is_the_price_negotiable
                      ? { ...CreateListingStyle.text1, color: "#888888" }
                      : CreateListingStyle.text1
                  }
                  onPress={this._updateIsThePriceNegotiable(
                    !this.state.is_the_price_negotiable
                  )}
                >
                  No
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={CreateListingStyle.queryView}>
            <Text style={CreateListingStyle.text3}>
              I'm willing to fully furnish this unit at extra cost:{" "}
            </Text>
            <View style={CreateListingStyle.buttonGroup}>
              <TouchableOpacity
                style={
                  this.state.im_willing_to_fully_furnish
                    ? CreateListingStyle.button1
                    : {
                        ...CreateListingStyle.button1,
                        backgroundColor: "#E5E5E5"
                      }
                }
                onPress={this._updateImWillingToFullyFurnish(
                  !this.state.im_willing_to_fully_furnish
                )}
              >
                <Text
                  style={
                    this.state.im_willing_to_fully_furnish
                      ? CreateListingStyle.text1
                      : { ...CreateListingStyle.text1, color: "#888888" }
                  }
                >
                  Yes
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={
                  this.state.im_willing_to_fully_furnish
                    ? {
                        ...CreateListingStyle.button1,
                        backgroundColor: "#E5E5E5"
                      }
                    : CreateListingStyle.button1
                }
                onPress={this._updateImWillingToFullyFurnish(
                  !this.state.im_willing_to_fully_furnish
                )}
              >
                <Text
                  style={
                    this.state.im_willing_to_fully_furnish
                      ? { ...CreateListingStyle.text1, color: "#888888" }
                      : CreateListingStyle.text1
                  }
                >
                  No
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <TouchableOpacity
            onPress={this._navigateUploadPhoto}
            style={CreateListingStyle.button2}
          >
            <Text style={CreateListingStyle.text1}>Next</Text>
          </TouchableOpacity>
        </ScrollView>
      </Container>
    );
  }
}
