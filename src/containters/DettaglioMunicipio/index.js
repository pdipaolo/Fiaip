import React from 'react';
import {
    Text,
    ScrollView,
    FlatList,
    View,
    StyleSheet,
    Dimensions
  } from 'react-native';
import HomeIcon from '../../assets/images/home.svg';
import BagIcon from '../../assets/images/bag.svg';
  import {
    ButtonContainer,
    ButtonText,
  } from '../../components/ToggleButton';

import { 
    white,
    lightblue,
    primaryColor,
    secondaryColorOpacity 
  } from '../../constants/Colors';

import { RowWrapper } from './components/RowWrapper';
import json from '../../dati/dataRicerca.json';
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
  });
  const SLIDER_WIDTH = Dimensions.get('window').width;
  const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.85);
 
  const dataEx = [
    { Address: 'a',VMU: 1,VLU:1 },
    { Address: 's',VMU: 2,VLU:2 },
    { Address: 'd',VMU: 3,VLU:3 },
    { Address: 'f',VMU: 4,VLU:4 },
    { Address: 'g',VMU: 5,VLU:5 },
  ]
  const dataEx2 = [
    { Address: 'q',VMU: 1,VLU:1 },
    { Address: 'w',VMU: 2,VLU:2 },
    { Address: 'e',VMU: 3,VLU:3 },
    { Address: 'r',VMU: 4,VLU:4 },
    { Address: 't',VMU: 5,VLU:5 },
  ]
function DettaglioFascicoli(props) {
  const {route} = props
  const [value,setValue] = React.useState(false)
  const [data, setData] = React.useState([])

  const search =() =>{
    const valoreType = value ? 1 : 0
    const dati = json.dati.filter((item)=> {return (item.municipalita == (route.params.munIndex+1) && item.Quartiere == (route.params.index+1) && valoreType == item.Type)})
    setData(dati)
  }

  React.useEffect(()=>{
    search()
  },[])


  React.useEffect(()=>{
    search()
  },[value])

    return (
      <View style={{flexDirection: 'column',width: SLIDER_WIDTH, height: '100%'}}>
          <View style={{flexDirection: 'row',flex: 0.2, width:260, alignItems: 'center', alignSelf: 'center'}}>
            <ButtonContainer style={{flex: 0.5}} onPress={() => setValue(false)} value={!value} height={ITEM_WIDTH/3}>
              <HomeIcon style={styles.image} width={styles.image.width} height={styles.image.height} fill={secondaryColorOpacity}/>
              <ButtonText>Residenziale</ButtonText>
            </ButtonContainer>
            <ButtonContainer style={{flex: 0.5}} onPress={() => setValue(true)} value={value} height={ITEM_WIDTH/3}>
              <BagIcon style={styles.image} width={styles.image.width} height={styles.image.height} fill={secondaryColorOpacity}/>
              <ButtonText>Commerciale</ButtonText>
            </ButtonContainer>
          </View>

          <View style={{ flex: 0.8, flexDirection: "column", justifyContent: 'space-between' }}>
          <View style={{ flexDirection: "row", paddingLeft: 20, height: 30 }}>
            <View style={{ flex: 0.60, height: 30 }}></View>
            <Text style={{ flex: 0.20, height: 30, textAlign: 'center' }}>V.M.U</Text>
            <Text style={{ flex: 0.20, height: 30, textAlign: 'center'}}>V.L.U</Text>
        </View>
          <FlatList
            data={data}
            initialNumToRender={50}
            renderItem={({ item, index }) => <RowWrapper item={item} index={index}/>}
            keyExtractor={(item, index) => index.toString()}

          />
        </View>
      </View>
    );
  };

  export default DettaglioFascicoli;