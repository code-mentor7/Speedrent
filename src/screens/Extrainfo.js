import React, { Component } from "react";
import {
  TouchableOpacity,
  ScrollView,
  TextInput,
  Text,
  View,
  Image
} from "react-native";

// Custom Components
import Header from "./common/Header";

import { Icon } from "react-native-elements";
import FontAwesome from "react-native-vector-icons/FontAwesome";

// Import style
import ExtrainfoStyle from "../styles/Extrainfo.style";

import Advertisement from "../../Images/advertisement1.png";
import Furnishing from "./extrainfo/Furnishing";
import Facilities from "./extrainfo/Facilities";

export default class Extrainfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      furnishing: {
        curtain: false,
        mattress: false,
        ac: true,
        hood_hub: true,
        water_heater: false,
        dining_table: false,
        wardrobe: false,
        kitchen_cabinet: false,
        refrigerator: false,
        sofa: false,
        oven: false,
        microwave: false,
        tv: false,
        internet: false
      },
      facilities: {
        barbeque_area: false,
        covered_parking: false,
        gymnasium: true,
        basketball: true,
        restaurant: false,
        dobby: false,
        nursery: false,
        playground: false,
        tennis_court: false,
        twenty_four_hr_security: false,
        mart: false,
        squash_court: false,
        badminton: false,
        elevator: false
      }
    };
  }

  _navigationBack = () => this.props.navigation.goBack();

  _toggleCheckBox = (key_name, value, form_state) => () =>
    this.setState({
      ...this.state,
      [form_state]: { ...this.state[form_state], [key_name]: value }
    });

  render() {
    return (
      <ScrollView contentContainerStyle={ExtrainfoStyle.root}>
        <Header
          navigation={this.props.navigation}
          headerTitle="Extra Information"
        />
        <View style={ExtrainfoStyle.labelTop}>
          <Text style={ExtrainfoStyle.labTopText}>
            Photo successfully uploaded!
          </Text>
        </View>

        <Furnishing state={this.state} _toggleCheckBox={this._toggleCheckBox} />

        <Facilities state={this.state} _toggleCheckBox={this._toggleCheckBox} />

        <Text style={ExtrainfoStyle.furnishingLabel}>Description</Text>

        <TextInput
          style={ExtrainfoStyle.descriptInput}
          numberOfLines={10}
          multiline={true}
        />

        <View style={ExtrainfoStyle.form}>
          <Text style={ExtrainfoStyle.formLabel}>Availability date:</Text>
          <View style={ExtrainfoStyle.formInput}>
            <TextInput
              style={{
                fontSize: 9,
                height: 30
              }}
              placeholder="Date(dd/mm/yyyy)"
            />
          </View>
        </View>

        <View style={ExtrainfoStyle.form}>
          <Text style={ExtrainfoStyle.formLabel}>Minimum stay:</Text>
          {/* <TextInput style={ExtrainfoStyle.formInput} placeholder="6 months" /> */}
          <TouchableOpacity
            style={{
              ...ExtrainfoStyle.formInput,
              flexDirection: "row",
              justifyContent: "space-around",
              alignItems: "center"
            }}
          >
            <Text
              style={{
                fontSize: 9
              }}
            >
              6 months
            </Text>
            <FontAwesome size={10} color="black" name="chevron-down" />
          </TouchableOpacity>
        </View>

        <Image
          source={Advertisement}
          style={{
            width: "80%",
            height: 100,
            marginTop: 20,
            marginBottom: 20
          }}
        />

        <View
          style={{ ...ExtrainfoStyle.form, marginTop: 20, marginBottom: 20 }}
        >
          <TouchableOpacity
            onPress={this._navigationBack}
            style={ExtrainfoStyle.formBack}
          >
            <Icon
              name="arrow-back"
              size={15}
              style={ExtrainfoStyle.headerLeftArrow}
            />
          </TouchableOpacity>
          <TouchableOpacity style={ExtrainfoStyle.nextButton}>
            <Text style={ExtrainfoStyle.nextButtonText}>Next</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
}
