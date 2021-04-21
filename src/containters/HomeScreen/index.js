import React, {useState} from 'react';

import {
    Text,
    View,
    StyleSheet,
    ScrollView,
  } from 'react-native';

import { 
    white,
    black,
    lightblue,
    primaryColor, 
    secondaryColor, 
    secondaryColorOpacity 
  } from '../../constants/Colors';

  import {
    ButtonContainer,
    ButtonText,
  } from '../../components/ToggleButton';

  import {
    ButtonLocalization,
    ButtonTextLocalization,
  } from './components/Localizzazione';

  import { 
    ButtonMoreScheda,
    ButtonTextMoreScheda
  } from './components/More scheda';

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
    localizzazione:{
      height: 60,
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
    geotext:{
      fontSize:14,
      fontWeight: 'bold',
      color: primaryColor,
      marginTop: 14,
      marginBottom: 14,
    },
    swipertext:{
      fontSize:14,
      fontWeight: 'bold',
      color: primaryColor,
      marginTop: 14,
    },
  });

function HomeScreen({ navigation }) {
    const [geolocalization, setGeolocalization] = useState('Nessuna posizione trovata')

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
        
        <View > 
          <View style={{ flex: 1, flexDirection: "row" }}>
            <Text style={styles.geotext}>Ricerca in base alla posizione attuale</Text>
          </View>
          <View style={[styles.localizzazione,{ flexDirection: "row", justifyContent:'center' }]}> 
            <ButtonLocalization style={{flex: 0.5}} color={white}>
              <ButtonTextLocalization color={lightblue} fontSize="8px" align="flex-start">Geolocalizzato in:</ButtonTextLocalization>
              <ButtonTextLocalization color={primaryColor} fontSize="11px" align="flex-start">{geolocalization}</ButtonTextLocalization>
            </ButtonLocalization>
            <ButtonLocalization style={{flex: 0.5}} color={primaryColor}>
              <ButtonTextLocalization color={white} fontSize="14px" align="center">Avvia Ricerca</ButtonTextLocalization>
            </ButtonLocalization>
          </View>
        </View>

        <View > 
          <View style={{ flex: 1, flexDirection: "row", justifyContent: 'space-between'}}>
            <Text style={styles.swipertext}>Ultimi fascicoli</Text>
            <ButtonMoreScheda>
              <ButtonTextMoreScheda>+ Crea fascicolo</ButtonTextMoreScheda>
            </ButtonMoreScheda>
          </View>
        </View>
     
      </ScrollView>
    );
  };

  export default HomeScreen;