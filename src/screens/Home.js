import React, { Component } from 'react';
import { Platform, StyleSheet, Text, TextInput, View, ScrollView, TouchableOpacity, FlatList, Image, ImageBackground, ActivityIndicator } from 'react-native';
import { Container, Header, Left, Body, Right, Title, Content, Item, Input, Card, CardItem, Button } from 'native-base';
import Icon from "react-native-vector-icons/FontAwesome";
import APICaller from "../util/apiCaller";
import EditText from '../components/EditText';

export default class Home extends Component {
  componentDidMount() {
    this.getList();
  }
  getList() {
    const {navigation} = this.props;
    const latitude = '21.234242';
    const longitude = "72.420182"
    const body = {
      latitude,
      longitude
    };
    APICaller('areaList', "GET", "", JSON.stringify(body)).then(
      json => {
        console.log(json);
       
        navigation.navigate("CampaginList");
      
      });
  }
  
  render() {
    return (
      <Container>

        <View style={{
          paddingTop: 5,
          flexDirection: 'row',
          backgroundColor: '#FFE100',
          justifyContent: 'flex-end',
        }}>
          <View style={{ flexDirection: 'row', justifyContent: 'center', flex: 1 }}>
            <View style={styles.headerview}>
              <View>
                <Image source={require('../../Images/home.png')} style={{ height: 40, width: 40, marginTop: 3, marginLeft: 10 }} />
              </View>
              <View style={{ paddingTop: 10, }}>
                <Text style={{ fontWeight: 'bold', fontSize: 20, color: '#000' }}>SPEED</Text>
              </View>
              <View style={{ paddingTop: 10, }}>
                <Text style={{ fontSize: 20, color: '#000' }}>HOME</Text>
              </View>

            </View>

          </View>
          <View style={{ position: 'absolute', paddingRight: 15, paddingTop: 10 }}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('LoginOptions')}>
              <Icon name="user-circle" style={{ color: "#707070", fontSize: 30, }} />
            </TouchableOpacity>
          </View>
        </View>

        <View style={{ flexDirection: 'column', width: "100%" }}>

          <View style={{ alignItems: 'center', backgroundColor: '#FFE100' }}>
            <EditText />
          </View>

          <View>
            <View style={{ backgroundColor: '#FFE100', height: 40 }}>
            </View>
            <View style={{ flexDirection: 'row', marginTop: -40, marginLeft: 5, marginRight: 5 }}>

              <TouchableOpacity style={styles.HeaderStyle} onPress={() => this.props.navigation.navigate('MyListing')}>
                <View style={{ flexDirection: 'row' }}>
                  <Image source={require('../../Images/home.png')} style={{ height: 40, width: 40, marginRight: 10 }} />
                  <View style={{ flexDirection: 'column' }}>
                    <Text style={{ fontSize: 14, color: '#000', textAlign: 'left' }}>I am</Text>
                    <Text style={{ fontSize: 14, color: '#000', textAlign: 'left' }}>a Landlord</Text>
                  </View>
                </View>
              </TouchableOpacity>
              <View style={styles.HeaderStyle}>
                <View style={{ flexDirection: 'row' }}>
                  <Image source={require('../../Images/home.png')} style={{ height: 40, width: 40, marginRight: 10 }} />
                  <View style={{ flexDirection: 'column' }}>
                    <Text style={{ fontSize: 14, color: '#000', textAlign: 'left' }}>I am</Text>
                    <Text style={{ fontSize: 14, color: '#000', textAlign: 'left' }}>a Tenant</Text>
                  </View>
                </View>
              </View>
            </View>
          </View>

        </View>

        <ScrollView>
          <View style={{ flex: 0.5, backgroundColor: '#fff' }}>
            <Text style={styles.TextStyleHeaderTag}>Popular Areas</Text>

            <ScrollView horizontal>
              <View style={{ flexDirection: 'row' }}>
                <View style={{ paddingLeft: 15 }}>
                  <ImageBackground source={{ uri: 'https://c1.momondo.net/assets/photos/cards/card_hotels_001.jpg?q=60&h=400' }}
                    imageStyle={{ borderRadius: 5 }} style={{ height: 208, width: 150, }}>
                    <Text style={styles.TextStyleScrollerHeader}>Kuala Lumpur</Text>
                    <Text style={styles.TextStyleScrollerDetail}>12,320 houses</Text>
                  </ImageBackground>
                </View>

                <View style={{ paddingLeft: 10 }}>
                  <ImageBackground source={{ uri: 'https://c1.momondo.net/assets/photos/cards/card_hotels_001.jpg?q=60&h=400' }}
                    imageStyle={{ borderRadius: 10 }} style={{ height: 208, width: 150, }}>
                    <Text style={styles.TextStyleScrollerHeader}>Kuala Lumpur</Text>
                    <Text style={styles.TextStyleScrollerDetail}>12,320 houses</Text>
                  </ImageBackground>
                </View>

                <View style={{ paddingLeft: 10 }}>
                  <ImageBackground source={{ uri: 'https://c1.momondo.net/assets/photos/cards/card_hotels_001.jpg?q=60&h=400' }}
                    imageStyle={{ borderRadius: 10 }} style={{ height: 208, width: 150, }}>
                    <Text style={styles.TextStyleScrollerHeader}>Kuala Lumpur</Text>
                    <Text style={styles.TextStyleScrollerDetail}>12,320 houses</Text>
                  </ImageBackground>
                </View>

                <View style={{ paddingLeft: 10 }}>
                  <ImageBackground source={{ uri: 'https://c1.momondo.net/assets/photos/cards/card_hotels_001.jpg?q=60&h=400' }}
                    imageStyle={{ borderRadius: 10 }} style={{ height: 208, width: 150, }}>
                    <Text style={styles.TextStyleScrollerHeader}>Kuala Lumpur</Text>
                    <Text style={styles.TextStyleScrollerDetail}>12,320 houses</Text>
                  </ImageBackground>
                </View>

                <View style={{ paddingLeft: 10 }}>
                  <ImageBackground source={{ uri: 'https://c1.momondo.net/assets/photos/cards/card_hotels_001.jpg?q=60&h=400' }}
                    imageStyle={{ borderRadius: 10 }} style={{ height: 208, width: 150, }}>
                    <Text style={styles.TextStyleScrollerHeader}>Kuala Lumpur</Text>
                    <Text style={styles.TextStyleScrollerDetail}>12,320 houses</Text>
                  </ImageBackground>
                </View>
              </View>
            </ScrollView>
          </View>
          <View style={{ flex: 0.5, backgroundColor: '#fff' }}>
            <Text style={[styles.TextStyleHeaderTag, { marginTop: 15 }]}>Our Picks</Text>
            <View >
              <TouchableOpacity
                style={{ flexDirection: 'column', alignItems: 'center', }}>
                <View style={{ alignItems: 'center', width: '90%', }}>
                  <ImageBackground
                    source={{ uri: 'https://byba.co.uk/wp-content/themes/byba-wordpress-v3/img/ba-slider-bedroom.jpg' }}
                    style={{ height: 200, width: '100%', }}
                    imageStyle={{ borderRadius: 5 }}>

                    <View style={{
                      backgroundColor: '#fff', borderTopLeftRadius: 5, borderTopRightRadius: 5, marginTop: 120, height: 100, width: '100%', shadowColor: 'black',
                      shadowOpacity: 0.12, elevation: 6, shadowOffset: { width: 5, height: 5, },
                    }}>
                      <View style={{ flexDirection: 'column' }}>
                        <View>
                          <Text style={{ fontSize: 14, textAlign: 'left', paddingLeft: 10, paddingTop: 10, fontWeight: '500', color: '#000' }}>Lily & Rose Apartment</Text>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                          <View>
                            <Text style={{ fontSize: 10, textAlign: 'left', paddingLeft: 10, paddingTop: 10, fontFamily: 'OpenSans-Light', color: '#000' }}>581 sqft |</Text>
                          </View>
                          <View>
                            <Text style={{ fontSize: 10, textAlign: 'left', paddingTop: 10, fontFamily: 'OpenSans-Light', color: '#000' }}> High-Rise |</Text>
                          </View>
                          <View>
                            <Text style={{ fontSize: 10, textAlign: 'left', paddingTop: 10, fontFamily: 'OpenSans-Light', color: '#000' }}> Partially Furnished</Text>
                          </View>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                          <View>
                            <Text style={{ fontSize: 14, textAlign: 'left', paddingLeft: 10, paddingTop: 10, color: '#000' }}>3</Text>
                          </View>
                          <View>
                            <Image source={require('../../Images/01.jpg')} style={{ height: 20, width: 20, marginLeft: 10, marginTop: 10 }} />
                          </View>
                          <View>
                            <Text style={{ fontSize: 14, textAlign: 'left', paddingLeft: 10, paddingTop: 10, color: '#000' }}>2</Text>
                          </View>
                          <View>
                            <Image source={require('../../Images/02.jpg')} style={{ height: 20, width: 20, marginLeft: 10, marginTop: 10 }} />
                          </View>
                          <View>
                            <Text style={{ fontSize: 14, textAlign: 'left', paddingLeft: 10, paddingTop: 10, color: '#000' }}>0</Text>
                          </View>
                          <View>
                            <Image source={require('../../Images/03.jpg')} style={{ height: 20, width: 20, marginLeft: 10, marginTop: 10 }} />
                          </View>
                        </View>
                      </View>
                    </View>
                  </ImageBackground>
                </View>
              </TouchableOpacity>
            </View>
          </View>
          <View>
            <TouchableOpacity
              style={{ flexDirection: 'column', alignItems: 'center', paddingTop: 40, paddingBottom: 30 }}
              onPress={() => this.props.navigation.navigate('Extrainfo')}>
              <View style={{ paddingTop: 10, alignItems: 'center', width: '90%', }}>
                <ImageBackground
                  source={{ uri: 'https://byba.co.uk/wp-content/themes/byba-wordpress-v3/img/ba-slider-bedroom.jpg' }}
                  style={{ height: 200, width: '100%', }}
                  imageStyle={{ borderRadius: 5 }}>

                  <View style={{
                    backgroundColor: '#fff', borderTopLeftRadius: 5, borderTopRightRadius: 5, marginTop: 120, height: 100, width: '100%', shadowColor: 'black',
                    shadowOpacity: 0.12, elevation: 6, shadowOffset: { width: 5, height: 5 }
                  }}>
                    <View style={{ flexDirection: 'column' }}>
                      <View>
                        <Text style={{ fontSize: 14, textAlign: 'left', paddingLeft: 10, paddingTop: 10, fontWeight: '500', color: '#000' }}>Lily & Rose Apartment</Text>
                      </View>
                      <View style={{ flexDirection: 'row' }}>
                        <View>
                          <Text style={{ fontSize: 10, textAlign: 'left', paddingLeft: 10, paddingTop: 10, fontFamily: 'OpenSans-Light', color: '#000' }}>581 sqft |</Text>
                        </View>
                        <View>
                          <Text style={{ fontSize: 10, textAlign: 'left', paddingTop: 10, fontFamily: 'OpenSans-Light', color: '#000' }}> High-Rise |</Text>
                        </View>
                        <View>
                          <Text style={{ fontSize: 10, textAlign: 'left', paddingTop: 10, fontFamily: 'OpenSans-Light', color: '#000' }}> Partially Furnished</Text>
                        </View>
                      </View>
                      <View style={{ flexDirection: 'row' }}>
                        <View>
                          <Text style={{ fontSize: 14, textAlign: 'left', paddingLeft: 10, paddingTop: 10, color: '#000' }}>3</Text>
                        </View>
                        <View>
                          <Image source={require('../../Images/01.jpg')} style={{ height: 20, width: 20, marginLeft: 10, marginTop: 10 }} />
                        </View>
                        <View>
                          <Text style={{ fontSize: 14, textAlign: 'left', paddingLeft: 10, paddingTop: 10, color: '#000' }}>2</Text>
                        </View>
                        <View>
                          <Image source={require('../../Images/02.jpg')} style={{ height: 20, width: 20, marginLeft: 10, marginTop: 10 }} />
                        </View>
                        <View>
                          <Text style={{ fontSize: 14, textAlign: 'left', paddingLeft: 10, paddingTop: 10, color: '#000' }}>0</Text>
                        </View>
                        <View>
                          <Image source={require('../../Images/03.jpg')} style={{ height: 20, width: 20, marginLeft: 10, marginTop: 10 }} />
                        </View>
                      </View>
                    </View>
                  </View>
                </ImageBackground>
              </View>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </Container>
    );
  }
}
const styles = StyleSheet.create({
  header: {
    paddingTop: 30,
    backgroundColor: '#FFE100',
  },
  headerview: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
  HeaderStyle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderRadius: 5,
    elevation: 5,
    shadowColor: 'grey',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 3 },
    height: 60,
    width: '100%',
    marginHorizontal: 10,
    marginTop: 10,
    marginBottom: 10,
  },
  TextStyleScrollerHeader: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'left',
    paddingLeft: 10,
    paddingTop: 10
  },
  TextStyleScrollerDetail: {
    fontSize: 10,
    color: '#fff',
    textAlign: 'left',
    paddingLeft: 10,
    paddingTop: 5
  },
  TextStyleHeaderTag: {
    fontSize: 18,
    fontFamily: 'OpenSans-SemiBold',
    paddingBottom: 15,
    marginTop: 5,
    paddingLeft: 15,
    color: '#000'
  }
});
