import React, { Component } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Icon } from "react-native-elements";

import HeaderStyle from "../../styles/Header.style";

export default class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={HeaderStyle.header}>
        <TouchableOpacity onPress={this.props.back}>
          <Icon
            name="arrow-back"
            size={35}
            style={HeaderStyle.headerLeftArrow}
          />
        </TouchableOpacity>
        <Text style={HeaderStyle.headerTitle}>{this.props.headerTitle}</Text>
      </View>
    );
  }
}
