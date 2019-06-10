import React, { Component } from 'react';
import { Platform, StyleSheet, Text, TextInput, View, ScrollView, Image, TouchableOpacity, FlatList, ImageBackground, ActivityIndicator } from 'react-native';
import { Container, Header, Left, Body, Right, Title, Content, Item, Input, Card, CardItem, Button } from 'native-base';
import Login from './Login';
import LoginOptions from './LoginOptions';
import Number from './Number';
import Email from './Email';
import Otp from './Otp';
import { createSwitchNavigator, createAppContainer } from "react-navigation";
class LoadingScreen extends Component {
  constructor(props) {
    super(props)
    this.state = { count: 0 }
  }
  componentWillMount() {
    setInterval(() => {
      if (this.state.count < 8) {
        this.setState({ count: this.state.count + 1 });
      }
      else {
        this.setState({ count: 0 });
        this.props.navigation.navigate('Login')
      }
    }, 400);
  }
  render() {
    return (
      <Container style={styles.header}>
        <View style={styles.headerview}>
          <View style={{ justifyContent: 'center' }} >
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Login')}>
              <Image source={require('../../Images/home1.png')} style={{ height: 50, width: 300 }} />
            </TouchableOpacity>
          </View>
        </View>

      </Container>
    );
  }
}
const styles = StyleSheet.create({
  header: {
    flex: 1, backgroundColor: "#FFE100",
    justifyContent: 'center'
  },
  headerview: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
});
const AppContainer = createSwitchNavigator({
  LoadingScreen, Otp, Email, Number, Login, LoadingScreen, LoginOptions,


});
export default createAppContainer(AppContainer); 