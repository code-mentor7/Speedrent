import { Dimensions, Platform } from "react-native";

const { width, height } = Dimensions.get("window");

export default {
    root: {
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
        backgroundColor: "#FFF",
    },
    header: {
        paddingTop: Platform.OS === "ios" ? 40 : 0,
        height: (height * 10) / 100,
        width: "100%",
        backgroundColor: "#FFDF00",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        paddingLeft: (width * 5) / 100
    },
    headerLeftArrow: {
        color: "black",
        fontSize: 20,
        fontWeight: "normal"
    },
    questionIcon: {
        fontSize: 20,
        fontWeight: "normal",
        paddingLeft: width * 0.01
    },
    headerTitle: {
        fontSize: 20,
        color: "black",
        fontWeight: "bold",
        paddingLeft: (width * 5) / 100,
    },
    body: {
        width: (width * 90) / 100
    },
    apartmentName: {
        color: "black",
        marginTop: (height * 2) / 100,
        alignSelf: "flex-start",
        fontWeight: "bold"
    },
    apartmentDetail: {
        marginRight: (width * 20) / 100,
        color: "black",
        marginTop: (height * 0.5) / 100,
        alignSelf: "flex-start",
        fontSize: 12
    },
    viewSection: {
        flexDirection: "row",
        alignItems:'center',
        marginTop: height * 0.015
    },
    firsSectionLabel1: {
        color: "black",
        fontSize: 17,
        fontWeight: "bold"
    },
    firsSectionLabel2: {
        color: "black",
        fontSize: 12
    },
    line: {
        backgroundColor: 'black',
        height: height * 0.002,
        marginTop: height * 0.03,
        marginBottom: height * 0.03
    },
    mainLabels: {
        fontSize: 14,
        flex: 1,
        fontFamily: 'OpenSans-SemiBold',
        marginBottom: height * 0.03,
        color: '#000'
    },
    nationalityLabels: {
        fontSize: 14,
        fontFamily: 'OpenSans-SemiBold',
        color: '#000'
    },
    smallInputs: {
        marginBottom: height * 0.03,
        fontSize: 14,
        flex: 1,
        backgroundColor: '#FFF',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: 'black',
        textAlign: 'center',
        color: 'black'
    },
    defaultInputs: {
        height: height * 0.08,
        marginBottom: height * 0.03,
        fontSize: 14,
        flex: 1,
        backgroundColor: '#FFF',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: 'black',
    },
    toMoveDetail: {
        marginTop: height * 0.03,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    toMoveLabels: {
        fontSize: 14,
        fontFamily: 'OpenSans-SemiBold',
        color: '#000'
    },
    chatButton: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: 'white',
        borderRadius: 5,
        elevation: 5,
        shadowColor: 'grey',
        shadowOpacity: 0.2,
        shadowOffset: { width: 0, height: 3 },
        height: height * 0.08,
        width: '100%',
        marginBottom: height * 0.03,
    },
    buttonTextStyle: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 14,
        borderRadius: 5,
        borderColor: '#FFE100',
        backgroundColor: '#FFE100'
    },


};
