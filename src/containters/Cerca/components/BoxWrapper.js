import styled from "styled-components";
import {
    StyleSheet,
    Dimensions,
  } from 'react-native';

import {
    white,
    primaryColor,
    secondaryColor, 
    lightblue,
    black,
  } from '../../../constants/Colors';

const SLIDER_WIDTH = Dimensions.get('window').width;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.89);

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
      height: 160,
      padding: 10,
    },
    image:{
      justifyContent: 'center',
      alignItems: 'center',
      width: 30,
      height: 30,
    },
    text:{
      fontSize: 14,
      fontWeight: 'bold',
      color: primaryColor,
    },
    serchBar:{
      width: ITEM_WIDTH,
      height: 40,
      padding: 10,
      borderColor: primaryColor,
      borderWidth: 2,
      borderStyle: 'solid',
      backgroundColor: white
    },
  });

const ProvContainer = styled.TouchableOpacity`
elevation: ${(props)=>props.value === true ? 0 : 12};
height: 40;
border-radius: 2px;
padding-vertical: 4px;
padding-horizontal: 4px;
margin: 10px;
background-color: ${(props)=> props.value === true ? primaryColor : lightblue};
shadowColor: ${black};
shadowOpacity: 0.5;
justify-content: center;
align-items: center;
shadow-radius: 2px;
`;

const ProvText = styled.Text`
font-size: 12px;
color: ${(props)=> props.value === true ? white : primaryColor};
align-self: center;
`;
export  { shadowOpt, styles, ProvContainer, ProvText, shadowLine };