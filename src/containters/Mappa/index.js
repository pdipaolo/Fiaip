import React from 'react';
import {
    View,
    Dimensions,
  } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import renderItem from './components/renderItem';
// import MapImage from '../../components/mappa';
import MappaIm from '../../assets/images/mappa.svg';
import json from '../../dati/Municipalita.json';

const SLIDER_WIDTH = Dimensions.get('window').width;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.8);
function Mappa({navigation}) {
 
  // const data = [{id: 1, lista: ["a1,a2,a3"]},{id: 2, lista: ["b1,b2,b3"]},{id: 3, lista: ["c1,c2,c3"]}]
  const data = json.Municipalita
  const renderItem2 = ({item}) => {
    return renderItem(item,navigation)
  }
    return (
      <View style={{ height:'100%', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center' }}>
        <View style={{width: '100%', flex:0.4, alignItems: 'center'}}>
          <MappaIm />
        {/* <MapImage viewBox="-16 -16 544 544"/> */}
        </View>
          <View style={{ width: '100%', flex:0.6}}>
            <Carousel
                      layout={"default"}
                      marginTop={40}
                      data={data}
                      sliderWidth={SLIDER_WIDTH}
                      itemWidth={ITEM_WIDTH}
                      renderItem={renderItem2}
                      sliderHeight={300}
                      
              />
            </View>
      </View>
    );
  };

  export default Mappa;