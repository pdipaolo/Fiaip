import React from 'react';
import {BoxShadow} from 'react-native-shadow'
import {
    Text,
    View,
    StyleSheet,
  } from 'react-native';

import { 
    white,
    secondaryColorOpacity 
  } from '../../../../constants/Colors';

  import HomeIcon from '../../../../assets/images/home.svg';
  const styles = StyleSheet.create({  
    image:{
      justifyContent: 'center',
      alignItems: 'center',
      width: 30,
      height: 30,
    },

  });
export default function renderItem({item}){
  const boxShadow = {
    width: 300,
    height:360,
    color:"#000",
    border:4,
    radius:7,
    opacity:0.1,
    x:0,
    y:3,
    
};
    return (
      <BoxShadow setting={boxShadow}>
        <View style={{
            flexDirection: 'column',
            justifyContent: 'space-evenly',
            backgroundColor:white,
            borderRadius: 5,
            height: 350,
            padding: 10,
            marginRight: 0,
            marginBottom:10,
            marginTop:5,
            }}>
          <View style={{ flex: 0.2, flexDirection: "row", justifyContent: 'space-between'}}>
            <Text >{item.title}</Text>
            <HomeIcon style={styles.image} width={styles.image.width} height={styles.image.height} fill={secondaryColorOpacity}/>
          </View>
          <View style={{ flex: 0.2, flexDirection: "row", justifyContent: 'space-between'}}>
            <Text>{item.text}</Text>
            <Text>Vendita</Text>
          </View>
          <View style={{ flex: 0.6, flexDirection: "row", justifyContent: 'space-between'}}>
            <Text>Vendita</Text>
          </View>
        </View>
      </BoxShadow>
    )
}