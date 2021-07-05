import React, {useState} from 'react';
import Carousel from 'react-native-snap-carousel';
import Geolocation from 'react-native-geolocation-service';
import Geocoder from 'react-native-geocoding';
import SQLite from 'react-native-sqlite-storage';
import { Platform, PermissionsAndroid } from 'react-native';
import { useIsFocused } from "@react-navigation/native";
import {
    Text,
    View,
    StyleSheet,
    ScrollView,
    Dimensions,
    Alert, 
    TouchableWithoutFeedback
  } from 'react-native';

import styles from './styles';
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
    ButtonMoreScheda,
    ButtonTextMoreScheda
  } from './components/More scheda';

  import renderItem from './components/Fascicoli/index';
  import CarIcon from '../../assets/images/car.svg';
  import HomeIcon from '../../assets/images/home.svg';
  import BagIcon from '../../assets/images/bag.svg';


  const SLIDER_WIDTH = Dimensions.get('window').width;
  const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.85);


  
function HomeScreen({ navigation }) {
    const [geolocalization, setGeolocalization] = useState('Nessuna posizione trovata')
    const [carouselItems, setcarouselItems] = useState(undefined);
    const db = SQLite.openDatabase({ name: 'FiaipDB.db' });
    
    const isFocused = useIsFocused();

    const renderItem2 = ({item}) => {
      
      return renderItem(item,navigation)
    }

    React.useEffect(()=>{
      
      db.transaction(function (txn) {
        txn.executeSql('SELECT * FROM `dossier`', [], function (tx, res) {
            let resArray = []
            for (let i = 0; i < res.rows.length; ++i) {
              resArray.push({id:res.rows.item(i).dossier_id, obj: JSON.parse( res.rows.item(i).dossier_obj)})
            }
          const array = resArray.reverse().splice(0,10)
         
            setcarouselItems(array)
        });
    })
    },[isFocused])

    async function requestPermissions() {
      if (Platform.OS === 'ios') {
      //   Geolocation.requestAuthorization();
      //   Geolocation.setRNConfiguration({
      //     skipPermissionRequests: false,
      //    authorizationLevel: 'whenInUse',
      //  });
      }
    
      if (Platform.OS === 'android') {
        await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        );
      }
    }
  // React.useEffect(()=>{
    requestPermissions() 
    Geolocation.getCurrentPosition(
      position => {
        const initialPosition = JSON.stringify(position);
        Geocoder.init('AIzaSyB5h4Y6aG0MMm4x3LLq1E6zRxFVdT9bxh0');
        
        Geocoder.from(position.coords.latitude, position.coords.longitude)
        // Geocoder.from('40.87682047278474', '15.185810238033884')
            .then(json => {
                var addressComponent = json.results[0].formatted_address
                setGeolocalization(addressComponent)

            })
            .catch(error =>
                console.warn("error",error)
            );
      },
      // error => Alert.alert('Errore', 'Localizazione non permessa'),
      // {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000},
    );


    return (
      <ScrollView style={styles.container}>
          <View style={{padding:20}}>
            <Text style={styles.text}>Ricerca Rapida Quotazioni</Text>
          </View>
          <View style={{ flexDirection: "row", justifyContent:'center', padding: 10 , height: ITEM_WIDTH/3}}> 
            <ButtonContainer style={{flex: 0.33}} onPress={() => navigation.navigate('Cerca', {type:0, address:''})} value={false} height={ITEM_WIDTH/3}>
              <HomeIcon style={styles.image} width={styles.image.width} height={styles.image.height} fill={secondaryColorOpacity}/>
              <ButtonText>Residenziale</ButtonText>
            </ButtonContainer>
            <ButtonContainer style={{flex: 0.33}} onPress={() => navigation.navigate('Cerca', {type:1, address:''})} value={false} height={ITEM_WIDTH/3}>
              <BagIcon style={styles.image} width={styles.image.width} height={styles.image.height} fill={secondaryColorOpacity}/>
              <ButtonText>Commerciale</ButtonText>
            </ButtonContainer>
            <ButtonContainer style={{flex: 0.33}} onPress={() => navigation.navigate('Cerca', {type:2, address:''})} value={false} height={ITEM_WIDTH/3}>
              <CarIcon style={styles.image} width={styles.image.width} height={styles.image.height} fill={secondaryColorOpacity}/>
              <ButtonText>Box Auto</ButtonText>
            </ButtonContainer>
          </View>
        
        <View style={{padding: 20}}> 
          <View style={{ flex: 1, flexDirection: "row" }}>
            <Text style={styles.geotext}>Ricerca in base alla posizione attuale</Text>
          </View>
          <View style={[styles.localizzazione,{ flexDirection: "row", justifyContent:'center' }]}> 
            <View style={styles.geolocalitationFirstView}>
              <Text style={styles.geolocalitationInText}>Geolocalizzato in:</Text>
              <Text style={styles.geolocalitationText}>{geolocalization}</Text>
            </View>
            <TouchableWithoutFeedback onPress={()=> navigation.navigate('Cerca', {address:geolocalization})}>
              <View style={styles.geolocalitationSecondView}>
                <Text style={styles.geolocalitationAvvia}>Avvia Ricerca</Text>
              </View>
            </TouchableWithoutFeedback>
          </View>
        </View>

        <View style={{marginBottom: 20, paddingTop: 16,paddingBottom:16, height:500}}> 
          <View style={{ flex: 1, flexDirection: "row", justifyContent: 'space-between'}}>
            <Text style={styles.swipertext}>Ultimi fascicoli</Text>
            <ButtonMoreScheda>
              <ButtonTextMoreScheda onPress={()=> navigation.navigate('New Dossier', {data:null,id:null, navigation: navigation})}>+ Crea fascicolo</ButtonTextMoreScheda>
            </ButtonMoreScheda>
          </View>
          <Carousel
                  layout={"default"}
                  marginTop={40}
                  data={carouselItems}
                  sliderWidth={SLIDER_WIDTH}
                  itemWidth={ITEM_WIDTH}
                  renderItem={renderItem2}
                 
          />
        </View>
      </ScrollView>
    );
  };

  export default HomeScreen;