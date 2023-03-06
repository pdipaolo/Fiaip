
import {
    StyleSheet,
  } from 'react-native';
  import { 
    white,
    primaryColor,
    lightblue
  } from '../../constants/Colors';

const styles = StyleSheet.create({  
    safeArea: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 50
  },
    container: {
      flex: 1,
      padding: 0,
      backgroundColor: white,
    },
    quotazioni:{
      height: 110,
    },
    localizzazione:{
      height: 60,
    },
    image:{
      justifyContent: 'center',
      alignItems: 'center',
      width: 40,
      height: 40,
    },
    text:{
      fontSize:18,
      fontWeight: 'bold',
      color: primaryColor,
    },
    geotext:{
      fontSize:18,
      fontWeight: 'bold',
      color: primaryColor,
      marginTop: 14,
      marginBottom: 14,
    },
    swipertext:{
      fontSize:18,
      fontWeight: 'bold',
      color: primaryColor,
      marginTop: 14,
      marginLeft: 20,
    },
    geolocalitationInText:{
        color: lightblue, 
        fontSize:13, 
        alignSelf:'flex-start'
    },
    geolocalitationText:{
        color: primaryColor, 
        fontSize:12, 
        alignSelf:'flex-start'
    },
    geolocalitationFirstView: {
        flex: 0.5, 
        borderRadius:2,
        paddingHorizontal: 4,
        paddingVertical: 4,
        margin: 2,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:white,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    geolocalitationSecondView: {
        flex: 0.5, 
        borderRadius:2,
        paddingHorizontal: 4,
        paddingVertical: 4,
        margin: 2,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:primaryColor,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    geolocalitationAvvia: {
        color: white,
        fontSize: 14,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    buttonMoreScheda: {
        elevation: 0,
        height: 20,
        backgroundColor: 'transparent',
        borderColor: 'transparent',
        borderWidth: 0,
        marginTop: 16
    },
    buttonMoreText:{
        marginRight: 20,
        fontSize: 16,
        color: lightblue,
    }
  });

  export default styles;    
