import React from 'react';
import Home from '../../assets/images/home.svg'
import {
    Text,
    View,
    Image,
    StyleSheet,
  } from 'react-native';
  const styles = StyleSheet.create({
    icon: {
      width: 126,
     height: 126,
    },
   });
function HomeScreen() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Home!</Text>
        
      </View>
    );
  };

  export default HomeScreen;