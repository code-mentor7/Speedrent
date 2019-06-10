import React, { Component } from 'react';
import { Platform, StyleSheet, Text, TextInput, View, ScrollView, TouchableOpacity, FlatList, Image, ImageBackground, Dimensions, Linking } from 'react-native';
import { Container, Header, Left, Body, Right, Title, Content, Item, Input, Card, CardItem, Button } from 'native-base';
import { Avatar, Icon, Divider, } from 'react-native-elements';
import EditText from '../components/EditText';
import _ from 'lodash';
import MapView, { Marker } from 'react-native-maps';

import { styles } from '../styles/SearchStyles';

const { width } = Dimensions.get('window');
const { height } = Dimensions.get('window');

export default class Search extends Component {

  componentDidMount() {
    Linking.addEventListener('url', this.handleOpenURL);
  }
  componentWillUnmount() {
    Linking.removeEventListener('url', this.handleOpenURL);
  }
  handleOpenURL(event) {
    console.log(event.url);
    const route = event.url.replace(/.*?:\/\//g, '');
    // do something with the url, in our case navigate(route)
  }

  constructor(props) {
    super(props);
    this.state = {
      filterViewOn: true,
      mapViewOn: true,
      viewType: '',
      housingType: [
        {
          id: 0,
          name: 'Room',
          isSelected: false,
        },
        {
          id: 1,
          name: 'Landed',
          isSelected: false,
        },
        {
          id: 2,
          name: 'High-Rise',
          isSelected: false,
        },
        {
          id: 3,
          name: 'All',
          isSelected: false,
        }
      ],
      housingTypeFurniture: [
        {
          id: 0,
          name: 'No Furnishing',
          isSelected: false,
        },
        {
          id: 1,
          name: 'Partial Furnishing',
          isSelected: false,
        },
        {
          id: 2,
          name: 'Fully Furnishing',
          isSelected: false,
        }
      ],
      numberOfRooms: [
        {
          id: 0,
          name: '1',
          isSelected: false,
        },
        {
          id: 1,
          name: '2',
          isSelected: false,
        },
        {
          id: 2,
          name: '3',
          isSelected: false,
        },
        {
          id: 3,
          name: 'More than 3',
          isSelected: false,
        }
      ],
      numberOfBathrooms: [
        {
          id: 0,
          name: '1',
          isSelected: false,
        },
        {
          id: 1,
          name: '2',
          isSelected: false,
        },
        {
          id: 2,
          name: '3',
          isSelected: false,
        },
        {
          id: 3,
          name: 'More than 3',
          isSelected: false,
        }
      ],
      numberOfParking: [
        {
          id: 0,
          name: '1',
          isSelected: false,
        },
        {
          id: 1,
          name: '2',
          isSelected: false,
        },
        {
          id: 2,
          name: '3',
          isSelected: false,
        },
        {
          id: 3,
          name: 'More than 3',
          isSelected: false,
        }
      ],
      extraInfo: [
        {
          id: 0,
          name: 'Nearby LRT',
          isSelected: false,
        }
      ]
    }
  }

  displayItemOrFilterView() {
    if (this.state.filterViewOn == true) {
      this.setState({ filterViewOn: false })
    }
    else {
      this.setState({ filterViewOn: true })
    }
  }

  displayMapView() {
    if (this.state.mapViewOn == true) {
      this.setState({ mapViewOn: false })
    }
    else {
      this.setState({ mapViewOn: true })
    }
  }

  selectButton(selectVal) {
    this.setState({ housingType: housingType });
    console.log("this.state.housingType", this.state.housingType);
  }

  renderHousingType = () => {
    const { housingType } = this.state;
    return _.map(housingType, ({ id, name, isSelected }) => {
      return (
        <TouchableOpacity key={id}
          onPress={() => {
            housingType[id].isSelected = isSelected === true ? false : true;
            this.setState({ housingType });
          }}>
          <View
            style={isSelected
              ?
              [styles.textStyleHousingType, { backgroundColor: '#FFE100', marginRight: 5 }]
              :
              [styles.textStyleHousingType, { marginRight: 5 }]
            }>
            <Text style={{ textAlign: 'center' }}>
              {name}
            </Text>
          </View>
        </TouchableOpacity>
      )
    })
  }

  renderHousingFurnitureType = () => {
    const { housingTypeFurniture } = this.state;
    return _.map(housingTypeFurniture, ({ id, name, isSelected }, key) => {
      return (
        <TouchableOpacity key={id}
          onPress={() => {
            housingTypeFurniture[id].isSelected = isSelected === true ? false : true;
            this.setState({ housingTypeFurniture });
          }} style={{ marginBottom: 5 }}>
          <View
            style={isSelected
              ?
              [styles.textStyleHousingType, { backgroundColor: '#FFE100', marginRight: 5 }]
              :
              [styles.textStyleHousingType, { marginRight: 5 }]
            }>
            <Text style={{ textAlign: 'center' }}>
              {name}
            </Text>
          </View>
        </TouchableOpacity>
      )
    });
  }

  renderNumberOfRooms = () => {
    const { numberOfRooms } = this.state;
    return _.map(numberOfRooms, ({ id, name, isSelected }, key) => {
      return (
        <TouchableOpacity key={id}
          onPress={() => {
            numberOfRooms[id].isSelected = isSelected === true ? false : true;
            this.setState({ numberOfRooms });
          }}>
          <View
            style={isSelected
              ?
              [styles.textStyleHousingType, { backgroundColor: '#FFE100', marginRight: 5 }]
              :
              [styles.textStyleHousingType, { marginRight: 5 }]
            }>
            <Text style={{ textAlign: 'center' }}>
              {name}
            </Text>
          </View>
        </TouchableOpacity>
      )
    });
  }

  renderNumberOfBathrooms = () => {
    const { numberOfBathrooms } = this.state;
    return _.map(numberOfBathrooms, ({ id, name, isSelected }, key) => {
      return (
        <TouchableOpacity key={id}
          onPress={() => {
            numberOfBathrooms[id].isSelected = isSelected === true ? false : true;
            this.setState({ numberOfBathrooms });
          }}>
          <View
            style={isSelected
              ?
              [styles.textStyleHousingType, { backgroundColor: '#FFE100', marginRight: 5 }]
              :
              [styles.textStyleHousingType, { marginRight: 5 }]
            }>
            <Text style={{ textAlign: 'center' }}>
              {name}
            </Text>
          </View>
        </TouchableOpacity>
      )
    });
  }

  renderNumberOfParkings = () => {
    const { numberOfParking } = this.state;
    return _.map(numberOfParking, ({ id, name, isSelected }, key) => {
      return (
        <TouchableOpacity key={id}
          onPress={() => {
            numberOfParking[id].isSelected = isSelected === true ? false : true;
            this.setState({ numberOfParking });
          }}>
          <View
            style={isSelected
              ?
              [styles.textStyleHousingType, { backgroundColor: '#FFE100', marginRight: 5 }]
              :
              [styles.textStyleHousingType, { marginRight: 5 }]
            }>
            <Text style={{ textAlign: 'center' }}>
              {name}
            </Text>
          </View>
        </TouchableOpacity>
      )
    });
  }

  renderNumberOfExtraInfo = () => {
    const { extraInfo } = this.state;
    return _.map(extraInfo, ({ id, name, isSelected }, key) => {
      return (
        <TouchableOpacity key={id}
          onPress={() => {
            extraInfo[id].isSelected = isSelected === true ? false : true;
            this.setState({ extraInfo });
          }}>
          <View
            style={isSelected
              ?
              [styles.textStyleHousingType, { backgroundColor: '#FFE100', marginRight: 5 }]
              :
              [styles.textStyleHousingType, { marginRight: 5 }]
            }>
            <Text style={{ textAlign: 'center' }}>
              {name}
            </Text>
          </View>
        </TouchableOpacity>
      )
    });
  }

  mianSearchView() {
    return (
      <ScrollView>
        <View>
          <View style={{ flex: 0.5, backgroundColor: '#fff' }}>
            <View style={styles.styleTextFound}>
              <Text style={{ fontSize: 14, fontFamily: 'OpenSans-SemiBold', color: '#000' }}> 325 results </Text>
              <Text style={{ fontSize: 14, fontFamily: 'OpenSans-Light', color: '#000' }}> in Subham Jaya </Text>
            </View>
            <View style={styles.styleItem}>
              <View style={{ alignItems: 'center', width: '90%', borderRadius: 5, borderColor: 'black', borderWidth: 0.5, }}>
                <ImageBackground
                  source={{ uri: 'https://byba.co.uk/wp-content/themes/byba-wordpress-v3/img/ba-slider-bedroom.jpg' }}
                  style={{ height: 230, width: '100%', }}
                  imageStyle={{ borderRadius: 5 }}>
                  <View style={{ justifyContent: 'flex-end', marginTop: 40, alignItems: 'flex-end' }}>
                    <Text style={styles.txtKmStyle}>2 Km</Text>
                  </View>
                  <View style={styles.styleInfo}>
                    <View style={{ width: '100%', backgroundColor: 'rgba(0, 0, 0, 0.3)' }}>
                      <Text style={styles.txtStyle}>Lily & Rose Apartment</Text>
                    </View>
                    <View style={[styles.styleInfo, { backgroundColor: 'white', height: 75 }]}>
                      <View style={{ flexDirection: 'column' }}>
                        <View>
                          <Text style={{ fontSize: 14, textAlign: 'left', paddingLeft: 10, paddingTop: 5, fontWeight: '500', color: '#000' }}>RM 1,600</Text>
                        </View>
                        <View style={{ flexDirection: 'row', paddingLeft: 10, paddingTop: 5 }}>
                          <View>
                            <Text style={{ fontSize: 10, textAlign: 'left', fontFamily: 'OpenSans-Light', color: '#000' }}>581 sqft |</Text>
                          </View>
                          <View>
                            <Text style={{ fontSize: 10, textAlign: 'left', fontFamily: 'OpenSans-Light', color: '#000' }}> High-Rise |</Text>
                          </View>
                          <View>
                            <Text style={{ fontSize: 10, textAlign: 'left', fontFamily: 'OpenSans-Light', color: '#000' }}> Partially Furnished</Text>
                          </View>
                        </View>
                        <View style={{ flexDirection: 'row', paddingLeft: 10, paddingTop: 7, alignItems: 'center' }}>
                          <View>
                            <Text style={{ fontSize: 14, textAlign: 'left', color: '#000' }}>3</Text>
                          </View>
                          <View>
                            <Image source={require('../../Images/01.jpg')} style={{ height: 15, width: 15, marginLeft: 10 }} />
                          </View>
                          <View>
                            <Text style={{ fontSize: 14, textAlign: 'left', paddingLeft: 10, color: '#000' }}>2</Text>
                          </View>
                          <View>
                            <Image source={require('../../Images/02.jpg')} style={{ height: 15, width: 15, marginLeft: 10 }} />
                          </View>
                          <View>
                            <Text style={{ fontSize: 14, textAlign: 'left', paddingLeft: 10, color: '#000' }}>0</Text>
                          </View>
                          <View>
                            <Image source={require('../../Images/03.jpg')} style={{ height: 15, width: 15, marginLeft: 10 }} />
                          </View>
                        </View>
                      </View>
                    </View>
                  </View>
                </ImageBackground>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    )
  }

  mainFilterView() {
    return (
      <ScrollView>
        <View style={{ flexDirection: 'column', flex: 1, paddingLeft: 15, paddingRight: 15, paddingBottom: 15 }}>
          <Text style={[styles.TextStyleHeaderFilter, { marginTop: 20 }]}>Price (RM)</Text>
          <View style={{ flexDirection: 'row' }}>
            <TextInput keyboardType='number-pad' placeholder='Min' style={[styles.etStylePriceFilter, { marginRight: 10 }]} />
            <TextInput keyboardType='number-pad' placeholder='Max' style={styles.etStylePriceFilter} />
          </View>
          <Text style={[styles.TextStyleHeaderFilter, { marginTop: 20 }]}>Housing Type</Text>
          <View style={{ flexDirection: 'row', }}>
            {this.renderHousingType()}
          </View>
          <Text style={[styles.TextStyleHeaderFilter, { marginTop: 20 }]}>Housing Type</Text>
          <View style={{ flexDirection: 'row', paddingBottom: 5, flex: 1, flexWrap: 'wrap', }}>
            {this.renderHousingFurnitureType()}
          </View>
          <Text style={[styles.TextStyleHeaderFilter, { marginTop: 15 }]}>Number of rooms</Text>
          <View style={{ flexDirection: 'row' }}>
            {this.renderNumberOfRooms()}
          </View>
          <Text style={[styles.TextStyleHeaderFilter, { marginTop: 20 }]}>Number of bathrooms</Text>
          <View style={{ flexDirection: 'row' }}>
            {this.renderNumberOfBathrooms()}
          </View>
          <Text style={[styles.TextStyleHeaderFilter, { marginTop: 20 }]}>Number of car parks</Text>
          <View style={{ flexDirection: 'row' }}>
            {this.renderNumberOfParkings()}
          </View>
          <Text style={[styles.TextStyleHeaderFilter, { marginTop: 20 }]}>Extra Information</Text>
          <View style={{ flexDirection: 'row' }}>
            {this.renderNumberOfExtraInfo()}
          </View>
          <View
            style={{
              borderBottomColor: 'grey',
              borderBottomWidth: 1,
              marginTop: 20
            }}
          />
          {/* <View style={{ flexDirection: 'row', flex: 1, marginTop: 20 }}> */}
          <View style={{ flexDirection: 'row', marginLeft: 5, marginTop: 20, marginRight: 5 }}>
            <View style={styles.HeaderStyle}>
              <TouchableOpacity style={{ marginRight: 5, width: '80%' }}
              // onPress={() => this.props.navigation.navigate('Confirm')}
              >
                <Text style={[styles.textStyleHousingType, { textAlign: 'center' }]}>
                  Reset Filter
                </Text>
              </TouchableOpacity>
            </View>
            <View style={styles.HeaderStyle}>
              <TouchableOpacity style={{ marginRight: 5, width: '80%' }}
              // onPress={() => this.props.navigation.navigate('Confirm')}
              >
                <View style={[styles.textStyleHousingType, { backgroundColor: '#FFE100' }]}>
                  <Text style={{ textAlign: 'center' }}>
                    Filter Now
                    </Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    )
  }

  mainMapView() {
    return (
      <Container>
        <Content>
          <MapView
            style={{ height: height, width: width }}
            initialRegion={{
              latitude: 37.78825,
              longitude: -122.4324,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}>
            <Marker
              coordinate={{
                latitude: 37.78825,
                longitude: -122.4324,
              }}
              description={"This is a marker in React Natve"}>
              <Image source={require('../../Images/ic_map.png')} style={{ height: 20, width: 20, }} />
            </Marker>
          </MapView>
        </Content>
        <View style={{ backgroundColor: 'white', height: 100, alignItems: 'center', flexDirection: 'row' }}>
          <Image
            source={{ uri: 'https://byba.co.uk/wp-content/themes/byba-wordpress-v3/img/ba-slider-bedroom.jpg' }}
            style={{ height: 80, width: 80, marginLeft: 10, borderRadius: 5 }} />

          <View style={{ flexDirection: 'column', flex: 1 }}>
            <View style={{ flex: 1, flexDirection: 'row' }}>
              <Text style={{ flex: 1, fontSize: 14, textAlign: 'left', paddingLeft: 10, paddingTop: 5, fontWeight: '500', color: '#000' }}>Lily & Rose Apartment</Text>
              <TouchableOpacity style={{ paddingRight: 15 }}>
                <Icon name="clear" size={25} style={{ color: "#000" }} />
              </TouchableOpacity>
            </View>
            <Text style={{ fontSize: 14, textAlign: 'left', paddingLeft: 10, paddingTop: 5, fontWeight: '500', color: '#000' }}>RM 1,600</Text>
            <View style={{ flexDirection: 'row', paddingLeft: 10, paddingTop: 5 }}>
              <Text style={{ fontSize: 10, textAlign: 'left', fontFamily: 'OpenSans-Light', color: '#000' }}>581 sqft |</Text>
              <Text style={{ fontSize: 10, textAlign: 'left', fontFamily: 'OpenSans-Light', color: '#000' }}> High-Rise |</Text>
              <Text style={{ fontSize: 10, textAlign: 'left', fontFamily: 'OpenSans-Light', color: '#000' }}> Partially Furnished</Text>
            </View>
            <View style={{ flex: 1, paddingLeft: 10, flexDirection: 'row', paddingTop: 5 }}>

              <View style={{ flex: 1, flexDirection: 'row' }}>
                <Text style={{ fontSize: 14, textAlign: 'left', color: '#000' }}>3</Text>
                <Image source={require('../../Images/01.jpg')} style={{ height: 15, width: 15, marginLeft: 10 }} />
                <Text style={{ fontSize: 14, textAlign: 'left', paddingLeft: 10, color: '#000' }}>2</Text>
                <Image source={require('../../Images/02.jpg')} style={{ height: 15, width: 15, marginLeft: 10 }} />
                <Text style={{ fontSize: 14, textAlign: 'left', paddingLeft: 10, color: '#000' }}>0</Text>
                <Image source={require('../../Images/03.jpg')} style={{ height: 15, width: 15, marginLeft: 10 }} />
              </View>
              <TouchableOpacity style={{ paddingRight: 15 }}>
                <Icon name="keyboard-arrow-right" size={25} style={{ color: "grey" }} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Container>

      // <View style={{ flex: 1, backgroundColor: 'black' }}>
      //   <View style={{ height: height - 300, backgroundColor: 'red' }} />
      //   <View style={{ height: 200, backgroundColor: 'green' }} />
      // </View>
    )
  }

  renderConditionalView(viewName) {
    if (this.state.viewType === 'map') {
      return this.mainMapView();
    } else if (this.state.viewType === 'filter') {
      return this.mainFilterView();
    } else {
      return this.mianSearchView();
    }
  }

  render() {
    return (
      <Container>
        <View style={{ flexDirection: 'column', width: "100%", backgroundColor: '#FFE100' }}>
          <View style={{ alignItems: 'center' }}>
            <EditText />
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center', width: '100%', backgroundColor: '#FFE100', paddingBottom: 10 }}>
            <TouchableOpacity style={{ flex: 1, alignItems: 'center', flexDirection: 'row', justifyContent: 'center' }}>
              <Icon name="sort" size={20} color='black' />
              <Text style={styles.styleHeaderOption}>Sort</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ flex: 1, alignItems: 'center', flexDirection: 'row', justifyContent: 'center' }} onPress={() => this.renderConditionalView(this.state.viewType === 'filter' ? this.setState({ viewType: 'search' }) : this.setState({ viewType: 'filter' }))}>
              <Icon name="filter-list" size={20} color='black' />
              <Text style={[styles.styleHeaderOption, {}]}>Filter</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ flex: 1, alignItems: 'center', flexDirection: 'row', justifyContent: 'center' }} onPress={() => this.renderConditionalView(this.state.viewType === 'map' ? this.setState({ viewType: 'search' }) : this.setState({ viewType: 'map' }))}>
              <Icon name="map" size={20} color='black' />
              <Text style={[styles.styleHeaderOption, {}]}>Map</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ flex: 1 }}>
          {/* <ScrollView style={{ flex: 1 }}> */}
          {
            this.renderConditionalView('search')
            // this.mainMapView()
          }
          {/* </ScrollView> */}
        </View>
      </Container>
    );
  }
}
