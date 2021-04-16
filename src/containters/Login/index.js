import React from 'react';
import {
    Text,
    View,
    Button,
  } from 'react-native';

function Login({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Login</Text>
        <Button
        title="Effettua Login"
        onPress={() => navigation.navigate('Home')}
      />
      </View>
    );
  };

export default Login;