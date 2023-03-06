import React from 'react';
import {
    Text,
    FlatList,
    View,
    StyleSheet,
    Dimensions,
    TouchableWithoutFeedback
  } from 'react-native';
import HomeIcon from '../../assets/images/home.svg';
import BagIcon from '../../assets/images/bag.svg';
  import {
    toggleStyles,
  } from '../../components/ToggleButton';

import { 
    white,
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
 
function DettaglioFascicoli(props) {
  const {route} = props
  const [value,setValue] = React.useState(0)
  const [data, setData] = React.useState([])

  const search =() =>{
    const dati = json.dati.filter((item)=> {return (item.municipalita == (route.params.munIndex+1) && item.Quartiere == (route.params.index+1) && value == item.Type)})
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
          <View style={{flexDirection: 'row',flex: 0.1, alignItems: 'center', alignSelf: 'center', paddingTop: 20, paddingBottom: 20}}>
            <TouchableWithoutFeedback onPress={() => setValue(0)}>
                <View style={[toggleStyles.buttonContainer(value === 0 ? true : false,ITEM_WIDTH/4), {flex: 0.3}]}>
                  <HomeIcon style={styles.image} width={styles.image.width} height={styles.image.height} fill={secondaryColorOpacity}/>
                  <Text style={toggleStyles.buttonText}>Residenziale</Text>
                </View>
              </TouchableWithoutFeedback>
              <TouchableWithoutFeedback onPress={() => setValue(1)}>
                <View style={[toggleStyles.buttonContainer(value === 1 ? true : false,ITEM_WIDTH/4), {flex: 0.3}]}>
                  <BagIcon style={styles.image} width={styles.image.width} height={styles.image.height} fill={secondaryColorOpacity}/>
                  <Text style={toggleStyles.buttonText}>Commerciale</Text>
                </View>
              </TouchableWithoutFeedback>
              <TouchableWithoutFeedback onPress={() => setValue(2)}>
                <View style={[toggleStyles.buttonContainer(value === 2 ? true : false,ITEM_WIDTH/4), {flex: 0.3}]}>
                  <BagIcon style={styles.image} width={styles.image.width} height={styles.image.height} fill={secondaryColorOpacity}/>
                  <Text style={toggleStyles.buttonText}>Box Auto</Text>
                </View>
              </TouchableWithoutFeedback>
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