import React, {Component} from "react";
import {Container, View, Text} from "native-base";
import {ScrollView, StyleSheet} from "react-native";
import { Dimensions, Platform, Image, TextInput } from "react-native"

import Header from '../screens/common/Header'; 

const { width, height } = Dimensions.get("window");
export default class EditPersonInfo extends Component {

    render() {
        return (
            <Container>
                <Header headerTitle="Edit personal info"></Header>
                <ScrollView contentContainerStyle={style.root}>
                    <View style={style.body}>
                        <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                            <Image style={style.profileImg}
                                source = {require('../../Images/avatar.png')}
                            />
                        </View>
                        <View style={{ flexDirection: 'column', alignItems: 'center' }}>
                            <Text style={style.title}>Name</Text>
                            <TextInput style={ style.inputStyle }>
                            </TextInput>
                        </View>
                        <View style={{ flexDirection: 'column', alignItems: 'center' }}>
                            <Text style={style.title}>Email</Text>
                            <TextInput style={ style.inputStyle }>
                            </TextInput>
                        </View>
                        <View style={{ flexDirection: 'column', alignItems: 'center' }}>
                            <Text style={style.title}>Phone number</Text>
                            <TextInput style={ style.inputStyle }>
                            </TextInput>
                        </View>
                        <View style={{ flexDirection: 'column', alignItems: 'center' }}>
                            <Text style={style.title}>Gender</Text>
                            <TextInput style={ style.inputStyle }>
                            </TextInput>
                        </View>
                    </View>
                </ScrollView>
            </Container>
        )
    }
}

const style = StyleSheet.create({
    root: {
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
        backgroundColor: "#FFF"
    },
    body: {
        width: (width * 90) / 100
    },
    profileImg: {
        marginTop: (height * 2) / 100,
        height: (height * 20) / 100,
        width: (height * 20) / 100,
        borderRadius: 40,
      },
    title: {
        color: "black",
        marginTop: (height * 3)/100,
        alignSelf: "flex-start",
        fontWeight: "bold",
        fontSize: 18
    },
    inputStyle: {
        marginTop: (height * 2)/100,
        borderRadius: 6,
        backgroundColor: '#e5e5e5',
        width: '100%',
        height: (height * 6) / 100,
    }
})