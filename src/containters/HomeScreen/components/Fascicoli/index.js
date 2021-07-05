import React from 'react';
import {BoxShadow} from 'react-native-shadow'
import {
    Text,
    View,
    TouchableWithoutFeedback,
    Dimensions
  } from 'react-native';
import {switchImage} from '../../../../utils/switchIcon';
import { 
    white,
  } from '../../../../constants/Colors';

import styles from './styles'

const SLIDER_WIDTH = Dimensions.get('window').width;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.75);
export default function renderItem(item,navigation){
  
  const boxShadow = {
    width: ITEM_WIDTH,
    height:ITEM_WIDTH ,
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
              height: ITEM_WIDTH,
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