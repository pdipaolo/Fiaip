import React from 'react';
import {
    Text,
    View,
  } from 'react-native';
import { lightblue, primaryColor, secondaryColor, white } from '../../../constants/Colors';

  function RowWrapper(props){
      const {item, index} = props;
      const backgroundColor = index%2 ? white : lightblue;
      const textColor = index%2 ? secondaryColor : primaryColor;

    return(
        <View style={{flexDirection: "row",paddingTop:20,paddingLeft:20, height: 60, backgroundColor: backgroundColor}}>
            <Text style={{flex: 0.60, height: 60, color: textColor}}>{item.key}</Text>
            <Text style={{flex: 0.20, height: 60, color: textColor}}>{item.key}</Text>
            <Text style={{flex: 0.20, height: 60, color: textColor}}>{item.key}</Text>
        </View>
    )
  };

  export {RowWrapper};