import React, { Component } from 'react';
import { Platform, StyleSheet, Text, TextInput, KeyboardAvoidingView, View, ScrollView, Image, TouchableOpacity, FlatList, ImageBackground, ActivityIndicator } from 'react-native';
import { Container, Header, Left, Body, Right, Icon, Title, Content, Item, Input, Card, CardItem, Button } from 'native-base';
import { Avatar, Divider, } from 'react-native-elements';
export default class Confirm extends Component {
  render() {
    return (
      <Container style={styles.header}>

        <View style={{ flex: 1 }}>
          <Header transparent />

          <View style={{ flexDirection: 'row' }}>
            <View style={{ justifyContent: 'center', }}>
              <Text style={{ fontWeight: '600', fontSize: 25, paddingLeft: 35, color: '#000' }}>What's your name?</Text>
            </View>
          </View>

          <View style={{ flexDirection: 'row' }}>
            <View style={{ justifyContent: 'center', paddingTop: 30 }}>
              <Text style={{ fontSize: 15, fontWeight: '600', paddingLeft: 35, color: '#000' }}>First name</Text>
            </View>
          </View>
          <KeyboardAvoidingView behavior="padding">
            <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
              <View style={{ justifyContent: 'center', paddingTop: 10, width: '80%', }}>
                <View style={{ backgroundColor: '#E5E5E5', height: 45, justifyContent: 'space-around', borderRadius: 5 }}>
                  <TextInput style={{ height: '100%', width: '80%', paddingLeft: 10, paddingRight: 10 }} />
                </View>
              </View>
            </View>
          </KeyboardAvoidingView>
          <View style={{ flexDirection: 'row' }}>
            <View style={{ justifyContent: 'center', paddingTop: 30 }}>
              <Text style={{ fontWeight: '600', fontSize: 25, paddingLeft: 35, color: '#000' }}>And, email?</Text>
            </View>
          </View>
          <View style={{ flexDirection: 'row' }}>
            <View style={{ justifyContent: 'center', paddingTop: 30 }}>
              <Text style={{ fontSize: 15, fontWeight: '600', paddingLeft: 35, color: '#000' }}>Email Address</Text>
            </View>
          </View>
          <KeyboardAvoidingView behavior="padding">
            <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
              <View style={{ justifyContent: 'center', paddingTop: 10, width: '80%', }}>
                <View style={{ backgroundColor: '#E5E5E5', height: 45, justifyContent: 'space-around', borderRadius: 5 }}>
                  <TextInput style={{ height: '100%', width: '80%', paddingLeft: 10, paddingRight: 10 }} />
                </View>
              </View>
            </View>
          </KeyboardAvoidingView>
          <View style={{ flexDirection: 'row' }}>
            <View style={{ justifyContent: 'center', paddingTop: 30, paddingLeft: 35, paddingRight: 35, }}>
              <Text style={{ fontSize: 13, color: '#000' }}>By clicking "Continue", you are indicating that you have
                  read and understand the terms and conditions herein. If you do not agree with the terms,
                please do not use this Application.
                    </Text>
            </View>
          </View>
          <View style={{ flexDirection: 'row' }}>
            <View style={{ paddingLeft: 35, paddingTop: 30 }}>
              <TouchableOpacity onPress={() => this.props.navigation.navigate('Terms')}>
                <Text style={{ fontSize: 14, color: '#4885ED', textAlign: 'center', textDecorationLine: 'underline', }}>Learn more about terms and condition</Text>
              </TouchableOpacity>
            </View>
            <View style={{ justifyContent: 'center', paddingTop: 30, paddingLeft: 10 }}>
              <Icon name="md-arrow-dropright" style={{ color: '#4885ED', fontSize: 20 }} />
            </View>
          </View>
          <View style={styles.bottomButton}>
            <View style={{
              justifyContent: 'center', backgroundColor: '#FFE100', height: 42, width: '75%', borderRadius: 5, shadowColor: 'black',
              shadowOpacity: 0.12, elevation: 6, shadowOffset: { width: 5, height: 5 },
            }}>
              <TouchableOpacity onPress={() => this.props.navigation.navigate('Home')}>
                <Text style={{ fontWeight: '600', fontSize: 15, textAlign: 'center', color: '#000' }}>Continue</Text>
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
    flex: 1, backgroundColor: "#FFF",

  },
  bottomButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginBottom: 50
  }

});
