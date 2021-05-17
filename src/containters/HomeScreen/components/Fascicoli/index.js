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
    height:365,
    color:"#555",
    border:10,
    radius:10,
    opacity:0.3,
    x:2,
    y:10,  
};
    return (
      <BoxShadow setting={boxShadow}>
        <View style={{
            flexDirection: 'column',
            justifyContent: 'space-evenly',
            backgroundColor:white,
            borderRadius: 5,
            height: 350,
            padding: 20,
            paddingBottom: 20,
            marginTop:5,
            }}>
          <View style={{ flex: 0.2, flexDirection: "row", justifyContent: 'space-between'}}>
            <Text >{item.address}</Text>
            <HomeIcon style={styles.image} width={styles.image.width} height={styles.image.height} fill={secondaryColorOpacity}/>
          </View>
          <View style={{ flex: 0.2, flexDirection: "row", justifyContent: 'space-between'}}>
            <Text>{item.city}</Text>
            <Text>Vendita</Text>
          </View>
          <View style={{ flex: 0.6, flexDirection: "row", justifyContent: 'space-between'}}>
            <Text>Vendita</Text>
          </View>
        </View>
      </BoxShadow>
    )
}