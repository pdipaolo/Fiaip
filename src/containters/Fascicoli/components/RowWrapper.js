import React from 'react';
import {
    Text,
    View,
    StyleSheet,
    TouchableWithoutFeedback,
  } from 'react-native';

import { lightblue, primaryColor, secondaryColor, secondaryColorOpacity, white } from '../../../constants/Colors';
import {switchImage} from '../../../utils/switchIcon';
const styles = StyleSheet.create({
    image:{
      justifyContent: 'center',
      alignItems: 'center',
      width: 30,
      height: 30,
      flex: 0.50,
      paddingTop:10,
    },})
  function RowWrapper(props){
      const {item, index, navigation} = props;
      const backgroundColor = index%2 ? white : lightblue;
      const textColor = index%2 ? primaryColor : secondaryColor;

    return(
      <TouchableWithoutFeedback onPress={()=>navigation.navigate('Dettaglio Fascicolo', {data:item, navigation: navigation})}>
        <View style={{flexDirection: "row",paddingLeft:20, height: 60, backgroundColor: backgroundColor}} >
          
            <Text style={{flex: 0.80, height: 60, color: textColor,paddingTop:20, fontSize: 18}}>{item.obj.indirizzo}</Text>
            <View style={{flex: 0.20, height: 80, color: textColor, flexDirection:'column',alignItems:'center',paddingTop:5}}>
                {switchImage(item.obj.tipology)}
                <Text style={{flex: 0.50, height: 60, color: textColor,paddingTop:5}}>{`${item.obj.prezzo} €`}</Text>
            </View>
           
        </View>
      </TouchableWithoutFeedback>
    )
  };

  export {RowWrapper};