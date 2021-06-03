import React from 'react';
import {
    Text,
    TouchableWithoutFeedback,
    View,
  } from 'react-native';
import { 
        primaryColor, 
        white 
    } 
    from '../../../constants/Colors';
import UserImage from '../../../assets/images/user.svg';
import RightArrow from '../../../assets/images/right-arrow.svg';

  function RowWrapper(props) {
     
      const { image, text, click } = props
      return(
        <TouchableWithoutFeedback onPress={click}>
        <View style={{flexDirection:'row', backgroundColor: primaryColor, height: 80, width:'100%', paddingVertical:20, paddingHorizontal: 20, marginBottom: 10}}>
            <View style={{flex: 0.2}}>
                {image}
            </View>
            <Text style={{color: white, fontSize: 24, flex: 0.8, paddingLeft: 30,paddingTop:5}}>
                {text}
            </Text>
            <RightArrow width={20} height={20} fill={white} paddingVertical={20}/>
        </View>
        </TouchableWithoutFeedback>
      );
  }
  export default RowWrapper;