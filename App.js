import React, { Component } from "react";
import {
    Text,
    Linking,
    Platform,
} from 'react-native';
import { Container, Header, Left, Body, Right, Title, Content, Item, Input, Card, CardItem, Button } from 'native-base';
import { Avatar, Icon, Divider, } from 'react-native-elements';
import LoadingScreen from './src/screens/LoadingScreen';
import Login from './src/screens/Login';
import LoginOptions from './src/screens/LoginOptions';
import Number from './src/screens/Number';
import Email from './src/screens/Email';
import Otp from './src/screens/Otp';
import Confirm from './src/screens/Confirm';
import Terms from './src/screens/Terms';
import EmailConfirm from './src/screens/EmailConfirm';
import Home from './src/screens/Home';
import Search from './src/screens/Search';
import Splash from './src/screens/Splash';
import Extrainfo from './src/screens/Extrainfo';
import CreateListing from './src/screens/CreateListing'
import UploadPhoto from './src/screens/UploadPhoto'
import ChatRequest from './src/screens/chat/ChatRequest';
import Nationality from './src/screens/chat/Nationality';
import MyListing from "./src/screens/MyListing";
import EditPersonInfo from './src/screens/EditPersonInfo';
import MoveIndate from './src/screens/chat/MoveInDate';
import { createStackNavigator, createAppContainer, createBottomTabNavigator, SafeAreaView } from "react-navigation";

const AppNavigator = createBottomTabNavigator(
    {
        Home: {
            screen: Home,
            navigationOptions: {
                tabBarLabel: ({ tintColor }) => (
                    <Text style={{ textAlign: 'center', fontSize: 12, color: tintColor }}>
                        Home
                    </Text>
                ),
                tabBarIcon: ({ horizontal, tintColor }) =>
                    <Icon name="home" size={horizontal ? 20 : 25} color={tintColor} />
            }
        },
        Search: {
            screen: Search,
            navigationOptions: {
                tabBarLabel: ({ tintColor }) => (
                    <Text style={{ textAlign: 'center', fontSize: 12, color: tintColor }}>
                        Search
                    </Text>
                ),
                tabBarIcon: ({ horizontal, tintColor }) =>
                    <Icon name="search" size={horizontal ? 20 : 25} color={tintColor} />
            }
        },
        Chat: {
            screen: ChatRequest,
            navigationOptions: {
                tabBarLabel: ({ tintColor }) => (
                    <Text style={{ textAlign: 'center', fontSize: 12, color: tintColor }}>
                        Chat
                    </Text>
                ),
                tabBarIcon: ({ horizontal, tintColor }) =>
                    <Icon name="chat" size={horizontal ? 20 : 25} color={tintColor} />
            }
        },
        Post: {
            screen: CreateListing,
            navigationOptions: {
                tabBarLabel: ({ tintColor }) => (
                    <Text style={{ textAlign: 'center', fontSize: 12, color: tintColor }}>
                        Post
                    </Text>
                ),
                tabBarIcon: ({ horizontal, tintColor }) =>
                    <Icon name="add-circle" size={horizontal ? 20 : 25} color={tintColor} />
            }
        },
        More: {
            screen: EditPersonInfo,
            navigationOptions: {
                tabBarLabel: ({ tintColor }) => (
                    <Text style={{ textAlign: 'center', fontSize: 12, color: tintColor }}>
                        More
                    </Text>
                ),
                tabBarIcon: ({ horizontal, tintColor }) =>
                    <Icon name="more-horiz" size={horizontal ? 20 : 25} color={tintColor} />
            }
        }
    },
    {
        initialRouteName: 'Home',
        tabBarOptions: {
            activeTintColor: '#FFE100',
            inactiveTintColor: '#CFCFCF',
        },
    }
);

const InitialNavigator = createStackNavigator(
    {
        Splash: Splash,
        Confirm,
        Otp,
        LoadingScreen,
        Terms,
        LoginOptions,
        Login,
        Email,
        EmailConfirm,
        Number,
        Extrainfo,
        UploadPhoto,
        Nationality,
        MyListing,
        EditPersonInfo,
        MoveIndate,
        Tab: AppNavigator
    },
    {
        headerMode: "none"
    }
);



const AppContainer = createAppContainer(InitialNavigator);

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            openScreen: 'Home',
        }
    }

    componentDidMount() { // B
        if (Platform.OS === 'android') {
            Linking.getInitialURL().then(url => {
                this.navigate(url);
            });
        } else {
            Linking.addEventListener('url', this.handleOpenURL);
        }
    }

    componentWillUnmount() {
        Linking.removeEventListener('url', this.handleOpenURL);
    }

    handleOpenURL(event) {
        console.log(event.url);
        const route = event.url.replace(/.*?:\/\//g, '');
        console.log('route', Linking.getInitialURL());
        // do something with the url, in our case navigate(route)
    }

    navigate = (url) => { // E
        // const { navigate } = this.props.navigation;
        const route = url.replace(/.*?:\/\//g, '');
        const id = route.match(/\/([^\/]+)\/?$/)[1];
        const routeName = route.split('/')[0];

        console.log('id', id);



        if (id === 'chat') {
            // navigate('People', { id, name: 'chris' })
            this.setState({ openScreen: 'Chat' })
        };
    }

    handleOpenURL = (event) => { // D
        this.navigate(event.url);
    }

    render() {
        return (
            // <Provider store={createStore(reducers)}>
            <SafeAreaView style={{ flex: 1, backgroundColor: '#FFE100' }} forceInset={{ bottom: 'never' }}>
                <AppContainer />
            </SafeAreaView>
            // </Provider>
        );
    }
}

export default App;
