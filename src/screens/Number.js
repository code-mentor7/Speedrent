import React, { Component } from 'react';
import { Platform, StyleSheet, Text, TextInput, View, ScrollView, Image, TouchableOpacity, FlatList, ImageBackground, ActivityIndicator } from 'react-native';
import { Container, Header, Left, Body, Right, Title, Content, Item, Input, Card, Picker, Form, CardItem, Button } from 'native-base';
import { Avatar, Icon, Divider, } from 'react-native-elements';
import PhoneInput from 'react-native-phone-input'
export default class Number extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: undefined
    };
  }
  onValueChange(value) {
    this.setState({
      selected: value
    });
  }
  render() {
    return (
      <Container style={styles.header}>
        {/* <Header transparent style={{ justifyContent: 'flex-start', paddingLeft: 20 }}>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('LoginOptions')}>
            <Icon name="arrow-back" size={35} style={{ textAlign: 'left' }} />
          </TouchableOpacity>
        </Header> */}

        <View style={{ flex: 1 }}>

          <View style={{ width: '100%', alignItems: 'flex-start', paddingTop: 10, paddingLeft: 20 }}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('LoginOptions')}>
              <Icon name="arrow-back" size={30} />
            </TouchableOpacity>
          </View>


          <View style={{ width: '100%', alignItems: 'flex-start', paddingTop: 20, paddingLeft: 35 }}>
            <TouchableOpacity>
              <Text style={{ fontWeight: '600', fontSize: 25, color: '#000', textAlign: 'center' }}>Login/Register</Text>
            </TouchableOpacity>
          </View>

          <View>
            <Text style={{ fontSize: 14, textAlign: 'left', paddingTop: 35, paddingLeft: 35, fontFamily: 'OpenSans-Light', color: '#000' }}>We need your phone number for bla bla bla</Text>
          </View>

          <View style={{ flexDirection: 'row', justifyContent: 'center', paddingTop: 35 }}>
            <View style={{ justifyContent: 'center', height: 50, width: '22%', borderColor: '#000', borderWidth: 1, borderRadius: 5 }}>
              <PhoneInput ref='phone' style={{ paddingLeft: 10 }} />
            </View>
            <View style={{ justifyContent: 'center', marginLeft: 10, height: 50, width: '60%', backgroundColor: '#E5E5E5', borderRadius: 5, }}>
              <TextInput placeholder='your phone number' style={{ fontSize: 16, justifyContent: 'center', textAlign: 'center' }} />
            </View>
          </View>

          <View style={{ flexDirection: 'row', paddingTop: 35 }}>
            <View style={{ justifyContent: 'center', }}>
              <Text style={{ fontSize: 15, paddingLeft: 35, fontStyle: 'italic', color: '#000', textAlign: 'center' }}>
                Fill in your mobile number at above to {"\n"} Login / Register, then click "Login | Register"
              </Text>
            </View>
          </View>

          <View style={ styles.bottomButton }>
            <View style={{
              justifyContent: 'center', backgroundColor: '#FFE100', height: 42, width: '75%', borderRadius: 5, shadowColor: 'black',
              shadowOpacity: 0.2, elevation: 6, shadowOffset: { width: 0, height: 3 },
            }}>
              <TouchableOpacity onPress={() => this.props.navigation.navigate('Otp')}>
                <Text style={{ fontWeight: '600', fontSize: 15, textAlign: 'center', color: '#000' }}>Next</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Container>
    );
  }
}
const styles = StyleSheet.create({
  header: {
    flex: 1,
    backgroundColor: "#FFFFFF",

  },
  headerview: {
    flexDirection: 'row',
    paddingTop: 20,
    paddingLeft: 20
  },
  bottomButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginBottom: 50
  }
});