import React from 'react';
import {
    Text,
    View,
    TouchableWithoutFeedback,
  } from 'react-native';

import { lightblue, primaryColor, secondaryColor, white } from '../../../constants/Colors';

  function RowWrapper(props){
    
      const {item, index, navigation} = props;
      const backgroundColor = index%2 ? white : lightblue;
      const textColor = index%2 ? primaryColor : secondaryColor;
    return(
      <TouchableWithoutFeedback onPress={()=>navigation.navigate('Dettaglio Municipio')}>
        <View style={{flexDirection: "row",paddingLeft:20, height: 60, backgroundColor: backgroundColor}} >
          
            <Text style={{flex: 0.80, height: 60, color: textColor,paddingTop:20}}>{item.nome}</Text>
           
        </View>
      </TouchableWithoutFeedback>
    )
  };

  export {RowWrapper};