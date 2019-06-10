import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { NavigationActions, StackActions } from "react-navigation";

export default class Splash extends Component {

  
  componentWillMount() {
    setTimeout(() => {
      // this.props.navigation.navigate('Home')
      this.goToNextView('Tab')
      // this.resetRoute()
    }, 3000)
  }

  goToNextView = (nextView = null) => {

    mainScreen = nextView || mainScreen;
    console.log('this.props.navigation: ', this.props.navigation);

    this.props.navigation.dispatch(StackActions.reset({
      index: 0,
      actions: [NavigationActions.navigate({ routeName: mainScreen })],
    }));

    return;
  };

  resetRoute() {
    const goHome = NavigationActions.navigate({
      routeName: 'Tab',
      params: {}
    })
    this.props.navigation.dispatch(goHome)
  }

  render() {
    return (
      <View style={styles.container}>
        <View>
          <Image source={require('../../Images/home.png')} style={{ height: 50, width: 50, marginTop: 3, marginLeft: 10 }} />
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
          <View style={{ paddingTop: 10, }}>
            <Text style={{ fontWeight: 'bold', fontSize: 30, color: '#000' }}>SPEED</Text>
          </View>
          <View style={{ paddingTop: 10, }}>
            <Text style={{ fontSize: 30, color: '#000' }}>HOME</Text>
          </View>
        </View>
      </View >
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFE100',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});
