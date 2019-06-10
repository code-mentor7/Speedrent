import React, {Component} from "react";
import {Container, Text, View} from "native-base";
import {ScrollView, TextInput, TouchableOpacity} from "react-native";
import Header from '../common/Header';
import ChatRequestStyle from '../../styles/ChatRequestStyle';
import { Icon } from 'react-native-elements';

export default class ChatRequest extends Component {

    constructor(props) {
        super(props);
        this.state = {
            workingAs: 'Lawyer',
            mobile: '0123456789'
        };
    }

    goHome = () => {
        this.props.navigation.navigate('Home');
    };

    goNationality = () => {
        this.props.navigation.navigate('Nationality');
    };

    render() {
        return (
            <Container>
                <Header headerTitle="Chat Request" back={this.goHome}></Header>
                <ScrollView contentContainerStyle={ChatRequestStyle.root}>
                    <View style={ChatRequestStyle.body}>
                        <Text style={ChatRequestStyle.apartmentName}>Lily & Rose Apartment</Text>
                        <Text style={ChatRequestStyle.apartmentDetail}>D 207, JALAN SS 26/10 TAMAN MAYANG JAYA, PETALING
                            JAYA</Text>

                        <View style={ChatRequestStyle.viewSection}>
                            <Text style={ChatRequestStyle.firsSectionLabel1}>RM 1,600/month</Text>
                            <Text style={ChatRequestStyle.firsSectionLabel2}>(Min. 6 months' stay)</Text>
                        </View>

                        <View style={ChatRequestStyle.line}>{}</View>

                        <View style={{flexDirection: 'row'}}>
                            <Text style={[ChatRequestStyle.mainLabels, {marginRight: 10}]}>Move-in</Text>
                            <Text style={ChatRequestStyle.mainLabels}>Your budget</Text>
                        </View>
                        <View style={{flexDirection: 'row'}}>
                            <TouchableOpacity style={[ChatRequestStyle.smallInputs, {marginRight: 10}]}
                                onPress={() => this.props.navigation.navigate('MoveIndate')}
                            >
                                <TextInput 
                                    style={{ textAlign: 'center', color: 'black' }}
                                    value='16 May 2018'
                                    editable={false}
                                />
                            </TouchableOpacity>
                            <TextInput value='RM1200' style={ChatRequestStyle.smallInputs}/>
                        </View>

                        <View style={{flexDirection: 'row'}}>
                            <Text style={ChatRequestStyle.mainLabels}>Your Nationality</Text>
                        </View>
                        <View style={[ChatRequestStyle.defaultInputs, {
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            alignItems: 'center'
                        }]}>
                            <Text style={[ChatRequestStyle.nationalityLabels, {marginLeft: 20}]}>Malaysia</Text>
                            <TouchableOpacity style={[ChatRequestStyle.nationalityLabels, {marginRight: 20}]}
                                              onPress={this.goNationality}
                            >
                                <Text style={{color: '#4885ed'}}>Change</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={{flexDirection: 'row'}}>
                            <Text style={ChatRequestStyle.mainLabels}>You are working as a</Text>
                        </View>
                        <View style={[ChatRequestStyle.defaultInputs, {
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            alignItems: 'center'
                        }]}>
                            <TextInput style={[ChatRequestStyle.nationalityLabels, {marginLeft: 20, flex: 1}]}
                                       value={this.state.workingAs}
                                       onChangeText={(text) => this.setState({workingAs: text})}
                            />
                        </View>

                        <View style={{flexDirection: 'row'}}>
                            <Text style={ChatRequestStyle.mainLabels}>Your mobile number is</Text>
                        </View>
                        <View style={[ChatRequestStyle.defaultInputs, {
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            alignItems: 'center'
                        }]}>
                            <TextInput style={[ChatRequestStyle.nationalityLabels, {marginLeft: 20, flex: 1}]}
                                       keyboardType='number-pad'
                                       value={this.state.mobile}
                                       onChangeText={(number) => this.setState({mobile: number})}
                            />
                        </View>

                        <View style={ChatRequestStyle.viewSection}>
                            <Text style={ChatRequestStyle.firsSectionLabel1}>To Move-in:</Text>
                            <TouchableOpacity>
                                <Icon name="help-outline" color={'gray'} style={ChatRequestStyle.questionIcon} />

                            </TouchableOpacity>
                        </View>

                        <View style={ChatRequestStyle.toMoveDetail}>
                            <Text style={ChatRequestStyle.toMoveLabels}>1st month</Text>
                            <Text style={ChatRequestStyle.toMoveLabels}>RM1600</Text>
                        </View>
                        <View style={ChatRequestStyle.toMoveDetail}>
                            <Text style={ChatRequestStyle.toMoveLabels}>Last month</Text>
                            <Text style={ChatRequestStyle.toMoveLabels}>RM1600</Text>
                        </View>
                        <View style={ChatRequestStyle.toMoveDetail}>
                            <Text style={ChatRequestStyle.toMoveLabels}>Tenancy Agreement Fee</Text>
                            <Text style={ChatRequestStyle.toMoveLabels}>RM399</Text>
                        </View>
                        <View style={ChatRequestStyle.toMoveDetail}>
                            <Text style={ChatRequestStyle.toMoveLabels}>6% SST</Text>
                            <Text style={ChatRequestStyle.toMoveLabels}>RM20</Text>
                        </View>

                        <View style={ChatRequestStyle.line}>{}</View>

                        <View style={ChatRequestStyle.chatButton}>
                            <TouchableOpacity style={ChatRequestStyle.buttonTextStyle}>
                                <Text style={{textAlign: 'center', fontWeight: 'bold'}}>
                                    Chat with Owner
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                </ScrollView>
            </Container>
        )
    }
}
