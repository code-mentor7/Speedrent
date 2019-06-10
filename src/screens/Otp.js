import React, { Component } from 'react';
import { Platform, StyleSheet, Text, TextInput, View, ScrollView, KeyboardAvoidingView, Image, TouchableOpacity, FlatList, ImageBackground, ActivityIndicator } from 'react-native';
import { Container, Header, Left, Body, Right, Title, Content, Item, Input, Card, Icon, Picker, Form, CardItem, Button } from 'native-base';

import TimerCountdown from '../components/TimerCountdown';

export default class Otp extends Component {

   constructor(props) {
      super(props);
      this.state = {
         displayResendOTP: false,
      },

         this.displayResentOtp = this.displayResentOtp.bind(this);
   }

   displayResentOtp() {
      this.setState({ displayResendOTP: true })
   }

   hideResentOtp() {
      // this.setState({ displayResendOTP: false })
   }

   displayTimer() {
      return (
         <TimerCountdown method={this.displayResentOtp} initialTime={60} />
      )
   }

   resendOTPView() {
      return (
         <TouchableOpacity onPress={() => this.hideResentOtp()}>
            <View style={{ flexDirection: 'row', justifyContent: 'center', paddingTop: 30, }}>
               <View style={{ justifyContent: 'center', }}>
                  <Text style={{ fontSize: 13, fontFamily: 'OpenSans-Bold', color: '#4885ED', textAlign: 'center', fontStyle: 'normal' }}>
                     RESENT OTP
                  </Text>
               </View>
               <View style={{ justifyContent: 'center', paddingLeft: 10 }}>
                  <Icon name="md-arrow-dropright" style={{ color: '#4885ED', fontSize: 20 }} />
               </View>
            </View>
         </TouchableOpacity>
      )
   }

   render() {
      return (
         <Container style={styles.header}>
            <View style={{ flex: 1 }}>
               <Header transparent />
               <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                  <View style={{ justifyContent: 'center', }}>
                     <Text style={{ fontFamily: 'OpenSans-Bold', fontSize: 20, textAlign: 'center', color: '#000' }}>Verify OTP</Text>
                  </View>
               </View>

               {/* <ScrollView> */}
               <View style={{ flexDirection: 'row', justifyContent: 'center' }}>

                  {this.displayTimer()}

               </View>
               <View style={{ justifyContent: 'center', paddingTop: 40 }}>
                  <Text style={{ fontSize: 15, textAlign: 'center', fontStyle: 'italic', color: '#000' }}>Enter the OTP that we sent to</Text>
                  <Text style={{ fontSize: 15, paddingTop: 5, textAlign: 'center', fontStyle: 'italic', color: '#000' }}>+60 123456789</Text>
               </View>
               <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                  <View style={{ justifyContent: 'center', paddingTop: 5 }}>
                     <TouchableOpacity onPress={() => this.props.navigation.navigate('Number')}>
                        <Text style={{ fontSize: 13, fontFamily: 'OpenSans-Bold', color: '#4885ED', textAlign: 'center' }}>CHANGE PHONE NO </Text>
                     </TouchableOpacity>
                  </View>

                  <View style={{ justifyContent: 'center', paddingTop: 5, paddingLeft: 10 }}>
                     <Icon name="md-arrow-dropright" style={{ color: '#4885ED', fontSize: 20 }} />
                  </View>
               </View>
               <KeyboardAvoidingView behavior='padding'>
                  <View style={{ flexDirection: 'row', justifyContent: 'space-around', paddingLeft: 20, paddingRight: 20, paddingTop: 40 }}>
                     <View style={{ justifyContent: 'center', paddingTop: 10, width: '15%', }}>
                        <View style={{ backgroundColor: '#E5E5E5', height: 65, width: '100%', justifyContent: 'space-around', borderRadius: 5 }}>
                           <TextInput keyboardType='number-pad' maxLength={1} style={styles.styleOTPBox} />
                        </View>
                     </View>
                     <View style={{ justifyContent: 'center', paddingTop: 10, width: '15%', }}>
                        <View style={{ backgroundColor: '#E5E5E5', height: 65, width: '100%', justifyContent: 'space-around', borderRadius: 5 }}>
                           <TextInput keyboardType='number-pad' maxLength={1} style={styles.styleOTPBox} />
                        </View>
                     </View>
                     <View style={{ justifyContent: 'center', paddingTop: 10, width: '15%', }}>
                        <View style={{ backgroundColor: '#E5E5E5', height: 65, width: '100%', justifyContent: 'space-around', borderRadius: 5 }}>
                           <TextInput keyboardType='number-pad' maxLength={1} style={styles.styleOTPBox} />
                        </View>
                     </View>
                     <View style={{ justifyContent: 'center', paddingTop: 10, width: '15%', }}>
                        <View style={{ backgroundColor: '#E5E5E5', height: 65, width: '100%', justifyContent: 'space-around', borderRadius: 5 }}>
                           <TextInput keyboardType='number-pad' maxLength={1} style={styles.styleOTPBox} />
                        </View>
                     </View>
                  </View>
               </KeyboardAvoidingView>

               {this.state.displayResendOTP && this.resendOTPView()}

               {/* <View style={{ justifyContent: 'center', paddingTop: 5 }}>
                     <Text style={{ fontSize: 12, textAlign: 'center', fontStyle: 'italic', color: 'red', paddingLeft: 20, paddingRight: 20 }}>
                        You entered the wrong OTP number, tap "RESEND OTP" to send a new OTP or tap "CHANGE PHONE NO" if you entered a wrong number.
                     </Text>
                  </View> */}


               <View style={styles.bottomButton}>
                  <View style={{
                     justifyContent: 'center', backgroundColor: '#FFE100', height: 42, width: '75%', borderRadius: 5, shadowColor: 'black',
                     shadowOpacity: 0.2, elevation: 6, shadowOffset: { width: 0, height: 3 },
                  }}>
                     <TouchableOpacity onPress={() => this.props.navigation.navigate('Confirm')}>
                        <Text style={{ fontWeight: '600', fontSize: 15, textAlign: 'center', color: '#000' }}>Next</Text>
                     </TouchableOpacity>
                  </View>
               </View>
               {/* </ScrollView> */}
            </View>
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
   styleOTPBox: {
      height: '100%',
      width: '100%',
      paddingLeft: 10,
      paddingRight: 10,
      fontSize: 28,
      textAlign: 'center',
   },
   bottomButton: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'flex-end',
      marginBottom: 50
   }
});