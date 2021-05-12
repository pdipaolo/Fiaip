import React, {useState} from 'react';
import Carousel from 'react-native-snap-carousel';
import Geolocation from 'react-native-geolocation-service';
import Geocoder from 'react-native-geocoding';

import {
    Text,
    View,
    StyleSheet,
    ScrollView,
    Dimensions,
  } from 'react-native';

import { 
    white,
    lightblue,
    primaryColor,
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

  import renderItem from './components/Fascicoli/index';
  import CarIcon from '../../assets/images/car.svg';
  import HomeIcon from '../../assets/images/home.svg';
  import BagIcon from '../../assets/images/bag.svg';

  const SLIDER_WIDTH = Dimensions.get('window').width;
  const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7);

  const styles = StyleSheet.create({  
    safeArea: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 50
  },
    container: {
      flex: 1,
      padding: 0,
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
      fontSize:18,
      fontWeight: 'bold',
      color: primaryColor,
    },
    geotext:{
      fontSize:18,
      fontWeight: 'bold',
      color: primaryColor,
      marginTop: 14,
      marginBottom: 14,
    },
    swipertext:{
      fontSize:18,
      fontWeight: 'bold',
      color: primaryColor,
      marginTop: 14,
    },
  });

function HomeScreen({ navigation }) {
    const [geolocalization, setGeolocalization] = useState('Nessuna posizione trovata')
    const [carouselItems, setcarouselItems] = useState([
      {
          title:"Item 10'",
          text: "Text 1",
      },
      {
          title:"Item 2",
          text: "Text 2",
      },
      {
          title:"Item 3",
          text: "Text 3",
      },
      {
          title:"Item 4",
          text: "Text 4",
      },
      {
          title:"Item 5",
          text: "Text 5",
      },
    ]);

  Geolocation.getCurrentPosition(
    (position) => {
      Geocoder.init('AIzaSyCY1LXStnB44VPJZYDUM2d6FD5oN-wpSRY');+
      Geocoder.from(position.coords.latitude, position.coords.longitude)
          .then(json => {
              var addressComponent = json.results[0].address_components[0];
              console.log(addressComponent);
          })
          .catch(error =>
              console.warn(error)
          );
        console.log(position.coords);
    },
    (error) => {
        console.log(error.code, error.message);
    },
    {
        enableHighAccuracy: false,
        timeout: 10000,
        maximumAge: 100000
    }
);

    return (
      <ScrollView style={styles.container}>
          <View style={{padding:20}}>
            <Text style={styles.text}>Ricerca Rapida Quotazioni</Text>
          </View>
          <View style={{ flexDirection: "row", justifyContent:'center', padding: 10 , height: 160}}> 
            <ButtonContainer style={{flex: 0.33}} onPress={() => navigation.navigate('Cerca', {type:0})} value={false}>
              <HomeIcon style={styles.image} width={styles.image.width} height={styles.image.height} fill={secondaryColorOpacity}/>
              <ButtonText>Residenziale</ButtonText>
            </ButtonContainer>
            <ButtonContainer style={{flex: 0.33}} onPress={() => navigation.navigate('Cerca', {type:1})} value={false}>
              <CarIcon style={styles.image} width={styles.image.width} height={styles.image.height} fill={secondaryColorOpacity}/>
              <ButtonText>Box Auto</ButtonText>
            </ButtonContainer>
            <ButtonContainer style={{flex: 0.33}} onPress={() => navigation.navigate('Cerca', {type:2})} value={false}>
              <BagIcon style={styles.image} width={styles.image.width} height={styles.image.height} fill={secondaryColorOpacity}/>
              <ButtonText>Commerciale</ButtonText>
            </ButtonContainer>
          </View>
        
        <View style={{padding: 20}}> 
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

        <View style={{marginBottom: 60, padding: 20}}> 
          <View style={{ flex: 1, flexDirection: "row", justifyContent: 'space-between'}}>
            <Text style={styles.swipertext}>Ultimi fascicoli</Text>
            <ButtonMoreScheda>
              <ButtonTextMoreScheda>+ Crea fascicolo</ButtonTextMoreScheda>
            </ButtonMoreScheda>
          </View>
          <Carousel
                  layout={"default"}
                  layoutCardOffset={9}
                  marginTop={40}
                  data={carouselItems}
                  sliderWidth={SLIDER_WIDTH}
                  itemWidth={ITEM_WIDTH}
                  renderItem={renderItem}
          />
        </View>
      </ScrollView>
    );
  };

  export default HomeScreen;