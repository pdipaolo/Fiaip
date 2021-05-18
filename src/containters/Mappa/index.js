import React from 'react';
import {
    View,
  } from 'react-native';
import MapImage from '../../components/mappa'

function Mappa() {
  
    return (
      <View style={{ flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center' }}>
        <MapImage viewBox="-16 -16 544 544"/>
        
      </View>
    );
  };

  export default Mappa;