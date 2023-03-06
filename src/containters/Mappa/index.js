import React from 'react';
import {
  ScrollView,
    View,
    Dimensions,
  } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import renderItem from './components/renderItem';
// import MapImage from '../../components/mappa';
import MappaIm from '../../assets/images/mappa.svg';
import json from '../../dati/Municipalita.json';

const SLIDER_WIDTH = Dimensions.get('window').width;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.85);
function Mappa({navigation}) {
 
  const data = json.Municipalita
  const renderItem2 = ({item,index}) => {
    return renderItem(item,index,navigation)
  }
    return (
      <ScrollView style={{ height:'100%' }}>
        <View style={{width: '100%', alignItems: 'center'}}>
          <MappaIm />
        
        </View>
          <View style={{ width: '100%',height:500}}>
            <Carousel
                      layout={"default"}
                      marginTop={40}
                      data={data}
                      sliderWidth={SLIDER_WIDTH}
                      itemWidth={ITEM_WIDTH}
                      renderItem={renderItem2}
                      
                      
              />
            </View>
      </ScrollView>
    );
  };

  export default Mappa;