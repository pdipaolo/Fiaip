import React from 'react';
import {
    Text,
    View,
    StyleSheet,
  } from 'react-native';

import { lightblue, primaryColor, secondaryColor, secondaryColorOpacity, white } from '../../../constants/Colors';
import HomeIcon from '../../../assets/images/home.svg';
const styles = StyleSheet.create({
    image:{
      justifyContent: 'center',
      alignItems: 'center',
      width: 30,
      height: 30,
      flex: 0.50,
      paddingTop:10,
    },})
  function RowWrapper(props){
      const {item, index} = props;
      const backgroundColor = index%2 ? white : lightblue;
      const textColor = index%2 ? primaryColor : secondaryColor;

    return(
        <View style={{flexDirection: "row",paddingLeft:20, height: 60, backgroundColor: backgroundColor}}>
            <Text style={{flex: 0.80, height: 60, color: textColor,paddingTop:20}}>{item.key}</Text>
            <View style={{flex: 0.20, height: 80, color: textColor, flexDirection:'column',alignItems:'center',paddingTop:5}}>
                <HomeIcon style={styles.image} width={styles.image.width} height={styles.image.height} fill={secondaryColor} />
                <Text style={{flex: 0.50, height: 60, color: textColor,paddingTop:5}}>250.000€</Text>
            </View>
        </View>
    )
  };

  export {RowWrapper};