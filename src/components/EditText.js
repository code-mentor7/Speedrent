import React, { Component } from 'react';
import {
    View,
    TextInput,
    TouchableOpacity,
} from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome";
import {styles} from '../styles/EditTextStyle';

export default class EditText extends Component {
    render() {
        return (
            <View style={styles.container}>
                <TextInput
                    style={[styles.styleEdittext]}
                    placeholder='Type in Area / Property Name'
                    onSubmitEditing={() => this.password.focus()} />

                <TouchableOpacity style={{ position: 'absolute', paddingHorizontal: 15 }}>
                    <Icon name="search" style={{ color: "#707070", fontSize: 20 }} />
                </TouchableOpacity>

            </View>
        )
    }
}

