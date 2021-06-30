import React from 'react';
import {
    View,
    Text,
    TouchableWithoutFeedback
  } from 'react-native';
import SplashIcon from '../../assets/images/splash.svg';
import { primaryColor } from '../../constants/Colors';
function Login({ navigation }) {
    const dateSett = new Date("2021/9/01");
    const date = new Date()
    
    return (

      <View style={{flexDirection:'column', height:'100%'}}>
          <View style={{flex: 0.6, width:'100%', alignItems: 'center', marginTop: 80}}>
            <SplashIcon width={'90%'} height={180} paddingTop={20} />
          </View>
          <View style={{flex: 0.4, width: '100%', alignItems: 'center'}}>
            <TouchableWithoutFeedback disabled={ dateSett<date ? true : false} onPress={() => navigation.navigate('Home')}>
            <View style={{ width: '50%', height: 80, alignItems: 'center',backgroundColor:primaryColor, paddingVertical: 20, elevation:5}}>
              <Text style={{fontSize: 24, color: 'white'}}>Entra</Text>
            </View>
            </TouchableWithoutFeedback>
          </View>
      </View>
      // <View style={{alignItems: 'center' }}>
      //   <View style={{width:'100%', alignItems: 'center', paddingTop: 120}}>
      //     <SplashIcon width={'90%'} height={180} paddingTop={20} />
      //   </View>

      //   <View style={{height: '70%', width:'80%', alignItems: 'center',justifyContent:'center'}}>
      //   <Button
      //     color={primaryColor}
      //     height="40"
      //     width="120"
      //     disabled={ dateSett<date ? true : false}
      //     title="Entra"
      //     onPress={() => navigation.navigate('Home')}
      //     />
      //   </View>

      // </View>
    );
  };

export default Login;