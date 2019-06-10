import React, { Component } from 'react';
import { Platform, StyleSheet, Text, TextInput, View, ScrollView, Image, TouchableOpacity, FlatList, ImageBackground, ActivityIndicator } from 'react-native';
import { Container, Header, Left, Body, Right, Title, Content, Item, Input, Card, CardItem, Button } from 'native-base';
import { Avatar, Icon, Divider, } from 'react-native-elements';
export default class LoginOptions extends Component {
  render() {
    return (
      <Container style={styles.header}>

        <Header transparent style={{ justifyContent: 'flex-start', paddingLeft: 20 }}>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('Login')}>
            <Icon name="arrow-back" size={35} style={{ textAlign: 'left' }} />
          </TouchableOpacity>
        </Header>


        <View style={{ flexDirection: 'row' }}>
          <View style={{ justifyContent: 'center', paddingTop: 30 }}>
            <Text style={{ fontWeight: '600', fontSize: 25, paddingLeft: 35, color: '#000' }}>Login</Text>
          </View>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <View style={{ justifyContent: 'center', paddingTop: 20 }}>
            <Text style={{ fontSize: 15, paddingLeft: 35, color: '#000' }}>You can choose to login using email or phone number.</Text>
          </View>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 150 }}>
          <View style={{ justifyContent: 'center', backgroundColor: '#fff', height: 40, width: '40%', borderRadius: 5, marginLeft: 30 }}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Number')}>
              <Text style={{ fontWeight: '500', fontSize: 15, textAlign: 'center', color: '#000' }}>Phone No</Text>
            </TouchableOpacity>
          </View>
          <View style={{ justifyContent: 'center', height: 40, width: '40%', borderColor: '#000', borderWidth: 1, borderRadius: 5, marginRight: 30 }}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Email')}>
              <Text style={{ fontWeight: '500', fontSize: 15, textAlign: 'center', color: '#000' }}>Email</Text>
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

  },

});
