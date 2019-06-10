import React, {Component} from "react";
import {Container, Text, View} from "native-base";
import {ScrollView, StyleSheet, Dimensions} from "react-native";
import { CalendarList } from 'react-native-calendars';

import Header from '../common/Header';
import ChatRequestStyle from '../../styles/ChatRequestStyle';

const { width, height } = Dimensions.get("window");
export default class MoveIndate extends Component {
    render() {
        return (
            <Container>
                <Header headerTitle="Move-in date"></Header>
                    <View style={ChatRequestStyle.root}>
                        <View style={ChatRequestStyle.body}>
                            <Text style={[style.title]}>Choose a date to move-in</Text>
                        </View>
                    </View>
                    <CalendarList
                        onVisibleMonthsChange={(months) => {console.log('now these months are visible', months);}}
                        pastScrollRange={5}
                        futureScrollRange={5}
                        scrollEnabled={true}
                        showScrollIndicator={true}
                        minDate={Date()}
                        markingType={'custom'}
                        markedDates = {{
                            '2019-06-09': {
                                customStyles: {
                                    container: {
                                        backgroundColor: 'yellow',
                                        borderColor: 'black',
                                        borderWidth: 1
                                    },
                                    text: {
                                        color: 'black',
                                        fontWeight: 'bold'
                                    },
                                },
                            }
                        }}
                        style={{
                            height: '100%'
                        }}
                        theme={{
                            backgroundColor: '#ffffff',
                            calendarBackground: '#ffffff',
                            textSectionTitleColor: 'black',
                            selectedDayBackgroundColor: '#00adf5',
                            selectedDayTextColor: '#ffffff',
                            dayTextColor: 'black',
                            textDisabledColor: '#d9e1e8',
                            dotColor: '#00adf5',
                            selectedDotColor: '#ffffff',
                            arrowColor: 'orange',
                            monthTextColor: 'black',
                            indicatorColor: 'blue',
                            textDayFontFamily: 'monospace',
                            textMonthFontFamily: 'monospace',
                            textDayHeaderFontFamily: 'monospace',
                            textDayFontWeight: '700',
                            textMonthFontWeight: '700',
                            textDayHeaderFontWeight: '400',
                            textDayFontSize: 20,
                            textMonthFontSize: 20,
                            textDayHeaderFontSize: 15
                        }}
                    />
            </Container>
        )
    }
}

const style = StyleSheet.create({
    title: {
        color: "black",
        marginTop: (height * 3)/100,
        marginBottom: (height * 3)/100,
        alignSelf: "flex-start",
        fontWeight: "bold",
        fontSize: 25
    }
})

