import React from 'react';
import {
    Text,
    View,
    Button,
  } from 'react-native';
function Login({ navigation }) {

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button
        title="Entra"
        onPress={() => navigation.navigate('Home')}
      />
      </View>
    );
  };

export default Login;