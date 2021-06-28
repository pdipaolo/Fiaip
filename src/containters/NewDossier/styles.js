
import {
    StyleSheet,
    Dimensions
  } from 'react-native';
import { grey, primaryColor, white } from '../../constants/Colors';
const SLIDER_WIDTH = Dimensions.get('window').width;
const styles = StyleSheet.create({ 
    text: {
        color: primaryColor,
        fontSize: 16,
        fontWeight: 'bold',
        marginLeft: 16,
        marginTop: 16,
        marginBottom: 16
    },
    subtext:{
      color: primaryColor,
      fontSize: 16,
      marginLeft: 24,
    },
    textField: {
      borderColor: primaryColor,
      borderWidth: 2,
      marginRight: 16,
      marginLeft:16,
      marginBottom: 8,
      fontSize: 18
    },
    textFieldNote:{
      borderColor: primaryColor,
      borderWidth: 2,
      marginRight: 16,
      marginLeft:16,
      marginBottom: 8,
      height: 240,
      textAlignVertical: 'top',
      fontSize: 18

    },
    textFieldContact:{
      borderColor: primaryColor,
      borderWidth: 2,
      marginRight: 16,
      marginLeft:64,
      marginBottom: 8
    },
    containerCheckBox:{
      marginLeft: 16,
      flexDirection: 'row'
    },
    checkBoxView:{
      flex: 0.5,
      flexDirection: 'row'
    },
    checkBox:{
      alignSelf: 'center',
      flex:0.08,
      marginRight:12

    },
    textCheckBox:{
      color: primaryColor,
      flex:0.92,
      fontSize: 18,
      alignSelf: 'center'
    },
    containerImage:{
      flex: 0.95,
      height: 240
    },
    imageRemove:{
      flex:0.05,
      marginLeft:32
    },
    containerViewImage: {
      flexDirection: 'row',
      marginRight: 16,
      marginLeft:16,
      marginBottom: 16,
      marginTop: 16,
      height: 240
    },
    containerViewButton: {
      width: SLIDER_WIDTH,
      flexDirection: 'row',
      margin: 16,
      height: 80,
    },
    containerButton:{
      flexDirection: 'row',
      borderColor: primaryColor,
      borderWidth: 1,
      marginRight: 16,
      marginLeft:16,
      marginBottom: 32,
      height: 100,
      borderRadius: 6,
      elevation: 4,
      backgroundColor: white, 
      borderWidth: 1
    },
    textButton:{
        color: primaryColor,
        fontSize: 16,
        fontWeight: 'bold',
        width: 80,
        textAlign: 'center',
        marginTop: 2
    },
    buttonOne: {
      flexDirection:'column', 
      flex: 0.5,
      marginRight: 2,
      marginLeft: 2,
      marginTop: 2,
      marginBottom: 8, 
      borderRightWidth: 1, 
      borderRightColor: primaryColor, 
      alignItems:'center',
      paddingTop: 18
    },
    buttonTwo: {
      flexDirection:'column', 
      flex: 0.5,
      marginRight: 2,
      marginLeft: 2,
      marginTop: 2, 
      marginBottom: 8, 
      alignItems:'center',
      paddingTop: 18
    },
    
    situazioneLocativaView:{
      flexDirection: 'row',
      marginLeft: 32,
      marginRight: 32,
      marginBottom:16
    },
    locativaButtonOne:{
      flex: 0.33,
      height: 40,
      borderColor: primaryColor,
      borderWidth: 1,
      textAlign:'center',
      marginRight: 8,
      borderBottomLeftRadius: 6,
      borderTopLeftRadius: 6
    },
    locativaButtonTwo:{
      flex: 0.33,
      height: 40,
      borderColor: primaryColor,
      borderWidth: 1,
      marginRight: 8,
      marginLeft: 8

    },
    locativaButtonThree:{
      flex: 0.33,
      height: 40,
      borderColor: primaryColor,
      borderWidth: 1,
      marginLeft: 8,
      borderBottomRightRadius: 6,
      borderTopRightRadius: 6

    },
    cityButtonOne:{
      flex: 0.5,
      height: 40,
      borderColor: primaryColor,
      borderWidth: 1,
      textAlign:'center',
      marginRight: 8,
      borderBottomLeftRadius: 6,
      borderTopLeftRadius: 6
    },
    cityButtonTwo:{
      flex: 0.5,
      height: 40,
      borderColor: primaryColor,
      borderWidth: 1,
      marginLeft: 8,
      borderBottomRightRadius: 6,
      borderTopRightRadius: 6

    },
    locativaText:{
      fontSize:14,
      fontWeight:'bold',
      textAlign:'center',
      paddingTop:6
    }


  });

  export default styles;