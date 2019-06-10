import React, { Component } from 'react';
import { Platform, StyleSheet, Text, TextInput, View, ScrollView, Image, TouchableOpacity, FlatList, ImageBackground, ActivityIndicator } from 'react-native';
import { Container, Header, Left, Body, Right, Title, Content, Item, Input, Card, Picker, Form, CardItem, Button } from 'native-base';
import { Avatar, Icon, Divider, } from 'react-native-elements';
import PhoneInput from 'react-native-phone-input'
export default class EmailConfirm extends Component {
  render() {
    return (
      <Container style={styles.header}>
        <Header transparent style={{ justifyContent: 'flex-start', paddingLeft: 20 }}>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('Email')}>
            <Icon name="arrow-back" size={35} style={{ textAlign: 'left' }} />
          </TouchableOpacity>
        </Header>
        <View style={{ flexDirection: 'row' }}>
          <View style={{ justifyContent: 'center', }}>
            <TouchableOpacity>
              <Text style={{ fontWeight: '600', fontSize: 25, paddingLeft: 35, color: '#000' }}>Before you use</Text>
            </TouchableOpacity>
          </View>
        </View>
        <ScrollView>
          <View style={{ flexDirection: 'row' }}>
            <View style={{ justifyContent: 'center', paddingTop: 30, paddingLeft: 35, paddingRight: 35, color: '#000' }}>
              <Text style={{ fontSize: 15, color: '#000' }}>The terms and conditions of this Agreement govern your use of the services provided by Speedrent Technology Sdn. Bhd.
              (Company No: 1176587-M) of A-G-23, Eve Suite, Jalan PJU 1a/41, Ara Damansara, 47301 Petaling Jaya, Selangor Darul Ehsan, Malaysia (“We” or “Our” or “Us” or “Speedrent” or "SPEEDHOME"),
                     a Malaysian entity, either itself or through its subsidiaries or licensees, via various electronic platforms such as the Speedrent mobile application or any other platforms designated by Us (“Application”).{'\n'}{'\n'}

                By using the Application, you are indicating that you have read and understand the terms and conditions herein. If you do not agree with the terms, please do not use this Application.{'\n'}{'\n'}

                For avoidance of doubt, this Agreement applies to all users of the Application listing a property or finding a property inclusive of home owners, landlords, property agents and/or tenants.
                    </Text>
            </View>
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-around', paddingTop: 40 }}>
            <View style={{
              justifyContent: 'center', backgroundColor: '#FFE100', height: 42, width: '75%', borderRadius: 5, shadowColor: 'black',
              shadowOpacity: 0.12, elevation: 6, shadowOffset: { width: 5, height: 5 },
            }}>
              <TouchableOpacity onPress={() => this.props.navigation.navigate('Home')}>
                <Text style={{ fontWeight: '600', fontSize: 15, textAlign: 'center', color: '#000' }}>Accept</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-around', paddingTop: 20, paddingBottom: 50 }}>
            <View style={{
              justifyContent: 'center', backgroundColor: '#FFF', height: 42, width: '75%', borderWidth: 1, borderRadius: 5, shadowColor: 'black',
              shadowOpacity: 0.12, elevation: 6, shadowOffset: { width: 5, height: 5 },
            }}>
              <TouchableOpacity onPress={() => this.props.navigation.navigate('Email')}>
                <Text style={{ fontWeight: '600', fontSize: 15, textAlign: 'center', color: '#000' }}>Decline</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </Container>
    );
  }
}
const styles = StyleSheet.create({
  header: {
    flex: 1, backgroundColor: "#FFFFFF",

  },
  headerview: {
    flexDirection: 'row',
    paddingTop: 20,
    paddingLeft: 20
  },
});