import React from 'react';
import {BoxShadow} from 'react-native-shadow'
import {
    Text,
    View,
    StyleSheet,
  } from 'react-native';

import { 
    white,
    secondaryColorOpacity, 
    primaryColor,
    secondaryColor
  } from '../../../../constants/Colors';

  import HomeIcon from '../../../../assets/images/home.svg';
  import CarIcon from '../../../../assets/images/car.svg';
  import BagIcon from '../../../../assets/images/bag.svg';
  const styles = StyleSheet.create({  
    image:{
      justifyContent: 'center',
      alignItems: 'center',
      width: 40,
      height: 40,
      flex: 0.1,
    },
    textTitle:{
      fontSize: 22,
      color: primaryColor,
      fontWeight: 'bold',
      flex: 0.9
    },
    textCity:{
      fontSize: 16,
      color: primaryColor,
    },
    typeText: {
      fontSize: 18,
      color: secondaryColor,
      fontWeight: 'bold',
      flex: 0.75,
    },
    statusText: {
      fontSize: 18,
      color: secondaryColorOpacity,
      flex: 0.25,
      textAlign: 'right'
    },
    descriptionText: {
      fontSize: 18,
      color: primaryColor
    }
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
console.log(item);
  const  switchImage = (type) =>{
    switch (type) {
      case "Appartamento":
        return <HomeIcon style={styles.image} width={styles.image.width} height={styles.image.height} fill={secondaryColorOpacity}/>
      case "Box":
        return <CarIcon style={styles.image} width={styles.image.width} height={styles.image.height} fill={secondaryColorOpacity}/>
      case "Commerciale":
        return <BagIcon style={styles.image} width={styles.image.width} height={styles.image.height} fill={secondaryColorOpacity}/>    
      default:
        return <HomeIcon style={styles.image} width={styles.image.width} height={styles.image.height} fill={secondaryColorOpacity}/>
    }
  }
    return (
      <BoxShadow setting={boxShadow}>
        <View style={{
            flexDirection: 'column',
            justifyContent: 'space-evenly',
            backgroundColor:white,
            borderRadius: 5,
            height: 350,
            padding: 16,
            marginTop:5,
            }}>
          <View style={{ flex: 0.2, flexDirection: "row", justifyContent: 'space-between'}}>
            <Text style={styles.textTitle} >{item.address}</Text>
            {switchImage(item.typology)}
          </View>
          <View style={{ flex: 0.1}}>
            <Text style={styles.textCity}>{item.city}</Text>
          </View>
          <View style={{ flex: 0.1, flexDirection: "row", justifyContent: 'space-between', paddingTop: 4}}>
            <Text style={styles.typeText}>{item.tipology}</Text>
            <Text style={styles.statusText}>{item.status}</Text>
          </View>
          <View style={{ flex: 0.15, flexDirection: "row", width: 200}}>
            <Text style={[styles.descriptionText, {fontWeight: 'bold'}]}>{item.size} -</Text><Text style={styles.descriptionText}>{item
            .characters}</Text>
          </View>
          <View style={{ flex: 0.45, flexDirection: "row", justifyContent: 'space-between'}}>
            <Text style={styles.descriptionText}>{item.description}</Text>
          </View>
        </View>
      </BoxShadow>
    )
}