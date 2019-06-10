import {StyleSheet, Dimensions} from 'react-native';

const { width } = Dimensions.get('window');

export const styles = StyleSheet.create({
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
        fontSize: 16,
        fontFamily: 'OpenSans-SemiBold',
        paddingBottom: 15,
        paddingLeft: 15,
        marginTop: 5,
        color: '#000'
      },
      styleTextFound: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
      },
      styleInfo: {
        flexDirection: 'column',
        borderRadius: 5,
        borderColor: 'black',
        height: 100,
        width: '100%',
        position: 'absolute',
        bottom: 0,
      },
      txtStyle: {
        fontSize: 14,
        textAlign: 'left',
        paddingLeft: 10,
        paddingTop: 5,
        paddingBottom: 5,
        color: '#FFF',
        fontFamily: 'OpenSans-Bold',
      },
      styleItem: {
        marginTop: 20,
        flexDirection: 'column',
        alignItems: 'center',
        shadowColor: 'black',
        shadowOpacity: 0.12,
        elevation: 6,
        shadowOffset: { width: 5, height: 5 }
      },
      txtKmStyle: {
        textAlign: 'center',
        fontSize: 14,
        paddingLeft: 10,
        paddingTop: 3,
        paddingBottom: 3,
        paddingLeft: 3,
        paddingRight: 3,
        color: '#000',
        width: 80,
        backgroundColor: '#FFE100',
        fontFamily: 'OpenSans-Bold',
      },
      styleHeaderOption: {
        fontSize: 12,
        marginLeft: 5,
        textAlign: 'left',
        color: '#000'
      },
      TextStyleHeaderFilter: {
        fontSize: 14,
        fontFamily: 'OpenSans-SemiBold',
        paddingBottom: 10,
        color: '#000'
      },
      etStylePriceFilter: {
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 10,
        paddingRight: 10,
        fontSize: 14,
        flex: 1,
        backgroundColor: '#FFF',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: 'grey'
      },
      textStyleHousingType: {
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 10,
        paddingRight: 10,
        fontSize: 14,
        backgroundColor: '#FFF',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: 'grey'
      },
      HeaderStyle: {
        flex: 1,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 5,
        shadowColor: 'grey',
        shadowOpacity: 0.2,
        shadowOffset: { width: 0, height: 3 },
        width: '100%',
      },
});