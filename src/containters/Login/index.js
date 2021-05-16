import React from 'react';
import {
    Text,
    View,
    Button,
  } from 'react-native';
import MapImage from '../../components/mappa'
function Login({ navigation }) {

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <MapImage/>
        <Text>Login</Text>
        <Button
        title="Effettua Login"
        onPress={() => navigation.navigate('Home')}
      />
      </View>
    );
  };

export default Login;