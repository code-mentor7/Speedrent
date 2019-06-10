import React, {Component} from "react";
import {Container, Text, View} from "native-base";
import ChatRequestStyle from "../../styles/ChatRequestStyle";
import { ScrollView, Dimensions, StyleSheet, TextInput } from "react-native";
import { Icon } from 'react-native-elements';
import Header from '../common/Header';

const { width, height } = Dimensions.get("window");
export default class Nationality extends Component {

    constructor(props) {
        super(props);
        this.state = {
            countries: [
                'Malaysia',
                'Afghanistan',
                'Albania',
                'Algeria',
                'American Samoa',
                'Andorra',
                'Angola',
                'Antarctica',
                'Antigua and Barbuda',
                'Argentina',
            ]
        }
    }


    goBack = () => {
        this.props.navigation.navigate('ChatRequest');
    };

    render() {
        return (
            <Container>
                <Header headerTitle="Nationality" back={this.goBack}></Header>
                <ScrollView contentContainerStyle={[ChatRequestStyle.root]}>
                    <View style={ChatRequestStyle.body}>
                        <Text style={style.title}>Which country are you from?</Text>
                        <Text style={[style.title, {fontSize: 15}]}>Search</Text>

                        <View style={ style.topInputView }>
                            <TextInput placeholder='Type in your country' style={ style.countryInput }>
                            </TextInput>
                        </View>
                        {this.state.countries.map((country, index) => (
                            <View style={{ flexDirection: 'column' }} key={ index }>
                                <View style={[ChatRequestStyle.line, { backgroundColor: '#cccccc' }]}>{}</View>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                    <Text style={ [style.countryLabel, index === 0 ? {fontWeight: 'bold'} : null]}>{ country }</Text>
                                    {index === 0 ? (
                                        <Icon name="check" color={'#29d49a'} iconStyle={ style.checkIcon }/>
                                    ): null}
                                </View>
                            </View>
                        ))}
                        <View style={[ChatRequestStyle.line, style.endBottomLine, { backgroundColor: '#cccccc' }]}>{}</View>
                    </View>
                </ScrollView>
            </Container>
        )
    }
}

const style = StyleSheet.create({
    title: {
        color: "black",
        marginTop: (height * 3)/100,
        alignSelf: "flex-start",
        fontWeight: "bold",
        fontSize: 25,
        marginRight: (width * 30)/100
    },
    topInputView: {
        backgroundColor: '#e5e5e5',
        height: (height * 8)/100,
        borderRadius: 6,
        marginTop: (height * 3) / 100
    },
    countryInput: {
        flex: 1,
        fontSize: 15,
        marginLeft: (width * 2) / 100
    },
    countryLabel: {
        fontSize: 15,
        marginLeft: (width * 2) / 100
    },
    checkIcon: {
        marginRight: (width * 2) / 100
    },
    endBottomLine: {
        height: height * 0.001,
    }
});
