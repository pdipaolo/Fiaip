import React from 'react';
import {BoxShadow} from 'react-native-shadow'
import {
    Text,
    View,
    StyleSheet,
    TouchableWithoutFeedback,
  } from 'react-native';
import {switchImage} from '../../../../utils/switchIcon';
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
      top: -16
    },
    typeText: {
      fontSize: 18,
      color: secondaryColor,
      fontWeight: 'bold',
      flex: 0.65,
    },
    statusText: {
      fontWeight:'bold',
      fontSize: 16,
      color: primaryColor,
      flex: 0.35,
      textAlign: 'right'
    },
    descriptionText: {
      fontSize: 18,
      color: primaryColor
    }
  });
export default function renderItem(item,navigation){
  
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

  const switchTipology = (type) =>{
    switch (type) {
      case 0:
        return "Residenziale";
    
      case 1:
        return "Box Auto";
      case 2:
          return "Commerciale";
      default:
        
    }

  }
    return (
      <BoxShadow setting={boxShadow}>
         <TouchableWithoutFeedback onPress={()=>navigation.navigate('Dettaglio Fascicolo', {data:item, navigation: navigation})}>
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
              <Text style={styles.textTitle} >{item.obj.indirizzo}</Text>
              {switchImage(item.obj.tipology)}
            </View>
            <View style={{ flex: 0.1}}>
              <Text style={styles.textCity}>{item.obj.city === 0 ? "Napoli": "Provincia"}</Text>
            </View>
            <View style={{ flex: 0.1, flexDirection: "row", justifyContent: 'space-between', paddingTop: 4}}>
              <Text style={styles.typeText}>{switchTipology(item.obj.tipology)}</Text>
              <Text style={styles.statusText}>{`${item.obj.metri}mq`}</Text>
            </View>
            <View style={{ flex: 0.5, flexDirection: "row", justifyContent: 'space-between'}}>
              <Text style={styles.descriptionText}>{item.obj.note}</Text>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </BoxShadow>
    )
}