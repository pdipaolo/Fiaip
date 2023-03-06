import {
    StyleSheet,
    Dimensions,
  } from 'react-native';

import {
    white,
    primaryColor,
    lightblue,
  } from '../../../constants/Colors';

const SLIDER_WIDTH = Dimensions.get('window').width;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7);
const ITEM_HEIGHT = Math.round(SLIDER_WIDTH * 0.89);

const shadowOpt = {
    width: ITEM_WIDTH,
    height:40,
    color:"#000",
    border:2,
    radius:3,
    opacity:0.2,
    x:0,
    y:3,
    
};
const shadowLine = {
    width: SLIDER_WIDTH,
    height:4,
    color:"#000",
    border:1,
    radius:1,
    opacity:0.1,
    x:0,
    y:1,
    
};

const styles = StyleSheet.create({
    container: {
      padding: 0,
      backgroundColor: white,
    },
    quotazioni:{
      height: ITEM_HEIGHT/3,
      paddingLeft: 10,
      paddingRight: 10,
      paddingBottom: 20,
      
    },
    image:{
      justifyContent: 'center',
      alignItems: 'center',
      width: 40,
      height: 40,
    },
    text:{
      fontSize: 14,
      fontWeight: 'bold',
      color: primaryColor,
    },
    searchContainer:{
      width: ITEM_WIDTH,
      height: 40,
      borderColor: primaryColor,
      borderWidth: 2,
      borderStyle: 'solid',
      backgroundColor: white,
      flexDirection: 'row',
      alignItems: 'center',
      paddingLeft: 10,
    },
    searchBar:(value)=>({
      width: ITEM_WIDTH,
      height: 40,
      backgroundColor: 'transparent',
      flex:0.8,
      fontSize:18,
      paddingBottom: value,
      color: '#000'
    }),
    provContainer:(value) => ({
      height: 40,
      borderRadius:2,
      paddingHorizontal: 4,
      paddingVertical: 4,
      margin: 10,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowRadius: 3.84,
      justifyContent: 'center',
      alignContent: 'center',
      backgroundColor: value ? primaryColor: lightblue,
      shadowOpacity: value ? 0 : 0.25,
      elevation: value ? 0 : 5,
    }),
    provText: (value)=>({
      fontSize: 12,
      color: value ? white : primaryColor,
      alignSelf: 'center'
    })
  });

export  { shadowOpt, styles, shadowLine };