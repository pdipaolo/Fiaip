import React from 'react';
import {
    Text,
    View,
    ScrollView,
    StyleSheet,
  } from 'react-native';


import {
    white,
    primaryColor,
    secondaryColorOpacity 
  } from '../../constants/Colors';

import {
    ButtonContainer,
    ButtonText,
  } from '../../components/ToggleButton';

  import CarIcon from '../../assets/images/car.svg'
  import HomeIcon from '../../assets/images/home.svg';
  import BagIcon from '../../assets/images/bag.svg'

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
      backgroundColor: white,
    },
    quotazioni:{
      height: 110,
    },
    image:{
      justifyContent: 'center',
      alignItems: 'center',
      width: 30,
      height: 30,
    },
    text:{
      fontSize:14,
      fontWeight: 'bold',
      color: primaryColor,
    },
  });

function Cerca(props) {
  const { route } = props;
  const [buttonType, setButtonType] = React.useState(0)
  React.useEffect(()=>{
    setButtonType(route.params.type)
  },[route.params.type])
    return (
      <ScrollView style={styles.container}>
          <View>
            <Text style={styles.text}>Ricerca Rapida Quotazioni</Text>
          </View>
          <View style={[styles.quotazioni,{ flexDirection: "row", justifyContent:'center' }]}> 
            <ButtonContainer style={{flex: 0.33}} onPress={() => navigation.navigate('Cerca', {type:0})} >
              <HomeIcon style={styles.image} width={styles.image.width} height={styles.image.height} fill={secondaryColorOpacity}/>
              <ButtonText>Residenziale</ButtonText>
            </ButtonContainer>
            <ButtonContainer style={{flex: 0.33}} onPress={() => navigation.navigate('Cerca', {type:1})} >
              <CarIcon style={styles.image} width={styles.image.width} height={styles.image.height} fill={secondaryColorOpacity}/>
              <ButtonText>Box Auto</ButtonText>
            </ButtonContainer>
            <ButtonContainer style={{flex: 0.33}} onPress={() => navigation.navigate('Cerca', {type:2})} >
              <BagIcon style={styles.image} width={styles.image.width} height={styles.image.height} fill={secondaryColorOpacity}/>
              <ButtonText>Commerciale</ButtonText>
            </ButtonContainer>
          </View>
      </ScrollView>
    );
  };

  export default Cerca;