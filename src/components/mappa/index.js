import React from 'react';
import {
    View,
    TouchableOpacity,
  } from 'react-native';
import V1 from '../../assets/images/mappa/V1.svg';
import V2 from '../../assets/images/mappa/V2.svg';
import V3 from '../../assets/images/mappa/V3.svg';
import V4 from '../../assets/images/mappa/V4.svg';
import V5 from '../../assets/images/mappa/V5.svg';
import V6 from '../../assets/images/mappa/V6.svg';
import V7 from '../../assets/images/mappa/V7.svg';
import V8 from '../../assets/images/mappa/V8.svg';
import V9 from '../../assets/images/mappa/V9.svg';
import V10 from '../../assets/images/mappa/V10.svg';

function MapImage() {

    return (
        <View style={{width:'100%',flex:0.5}}>

            <V1 style={{position: 'absolute', top: 175, left: 120 , zIndex:10}} onPress={() => {
              
            }}/>
        
          <V2 style={{position: 'absolute', top: 142, left: 230}}/>
          <V3 style={{position: 'absolute', top: 68, left: 212}}/>
          <V4 style={{position: 'absolute', top: 85, left: 250}}/>
          <V5 style={{position: 'absolute', top: 96, left: 142}}/>
          <V6 style={{position: 'absolute', top: 84, left: 318}}/>
          <V7 style={{position: 'absolute', top: 32, left: 248}}/>
          <V8 style={{position: 'absolute', top: 0, left: 140}}/>
          <V9 style={{position: 'absolute', top: 100, left: 50}}/>
          <V10 style={{position: 'absolute', top: 170, left: 80 , zIndex:10}} onPress={() => {
              
            }}/>
          
        </View>
    );
  };

export default MapImage;