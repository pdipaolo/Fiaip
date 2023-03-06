import React from 'react';
import { BoxShadow } from 'react-native-shadow';
import { RowWrapper } from './RowWrapper';
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  Dimensions
} from 'react-native';

import {
  white,
  secondaryColorOpacity,
  primaryColor,
  secondaryColor
} from '../../../constants/Colors';
import V1 from '../../../assets/images/mappa/V1.svg';
import V2 from '../../../assets/images/mappa/V2.svg';
import V3 from '../../../assets/images/mappa/V3.svg';
import V4 from '../../../assets/images/mappa/V4.svg';
import V5 from '../../../assets/images/mappa/V5.svg';
import V6 from '../../../assets/images/mappa/V6.svg';
import V7 from '../../../assets/images/mappa/V7.svg';
import V8 from '../../../assets/images/mappa/V8.svg';
import V9 from '../../../assets/images/mappa/V9.svg';
import V10 from '../../../assets/images/mappa/V10.svg';
const styles = StyleSheet.create({
  image: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 40,
    height: 40,
    flex: 0.1,
  },
  textTitle: {
    fontSize: 22,
    color: white,
    fontWeight: 'bold',
    marginTop: 16,
    marginLeft: 16,
  },
  textCity: {
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

const SLIDER_WIDTH = Dimensions.get('window').width;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.85);

export default function renderItem(item,index, navigation) {
  const municipalitaIndex = index
  const boxShadow = {
    width: ITEM_WIDTH,
    height:ITEM_WIDTH,
    color:"#555",
    border:10,
    radius:10,
    opacity:0.3,
    x:2,
    y:10,  
  };
  const switchImage = (id) =>{
  switch (id) {
    case "1":
      return <V1 style={{ marginTop: 5, marginRight: 20 }} width={50} height={50} />
    case "2":
      return <V2 style={{ marginTop: 5, marginRight: 20 }} width={50} height={50} />
    case "3":
      return <V3 style={{ marginTop: 5, marginRight: 20 }} width={50} height={50} />
    case "4":
      return <V4 style={{ marginTop: 5, marginRight: 20 }} width={50} height={50} />
    case "5":
      return <V5 style={{ marginTop: 5, marginRight: 20 }} width={50} height={50} />
    case "6":
      return <V6 style={{ marginTop: 5, marginRight: 20 }} width={50} height={50} />
    case "7":
      return <V7 style={{ marginTop: 5, marginRight: 20 }} width={50} height={50} />
    case "8":
      return <V8 style={{ marginTop: 5, marginRight: 20 }} width={50} height={50} />
    case "9":
      return <V9 style={{ marginTop: 5, marginRight: 20 }} width={50} height={50} />
    case "10":
      return <V10 style={{ marginTop: 5, marginRight: 20 }} width={50} height={50} />
    default:
      return <V1 style={{ marginTop: 5, marginRight: 20 }} width={50} height={50} />
  }
}

  return (
    <BoxShadow setting={boxShadow}>
      <View style={{
              flexDirection: 'column',
              justifyContent: 'space-evenly',
              backgroundColor:white,
              borderRadius: 10,
              height: ITEM_WIDTH,
              marginTop:5,
              paddingBottom:8
      }}>
        <View style={{ flex: 0.15, flexDirection: "row", justifyContent: 'space-between', backgroundColor: primaryColor }}>
          <Text style={styles.textTitle}>Municipalità N°{item.Numero}</Text>
          {switchImage(item.Numero)}
        </View>
        <View style={{ flex: 0.85, flexDirection: "row", justifyContent: 'space-between' }}>
          <FlatList
            nestedScrollEnabled={true}
            data={item.Quartieri}
            initialNumToRender={50}
            renderItem={({ item, index }) => <RowWrapper item={item} index={index} munIndex={municipalitaIndex} navigation={navigation} />}
            keyExtractor={(item,index)=> index.toString()}
          />
        </View>
      </View>
    </BoxShadow>
  )
};