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
      width: 40,
      height: 40,
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
      marginLeft: 20,
    },
  });

  
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

            setcarouselItems(resArray)
        });
    })
    //   var db = SQLite.openDatabase({
    //     name: 'FiaipAppTest.db', createFromLocation: '../../db/FiaipAppTest2.db', },
    //     () => {},
    //     error => {
    //       // TODO: Insert alert if db not work
    //       //  console.log("error while opening DB: " + error);
    //     });
    //   db.transaction(function (txn) {
    //     // // Drop the table if it exists
    //     // txn.executeSql('DROP TABLE IF EXISTS Users', []);
    
    //     // // Create the table and define the properties of the columns
    //     // txn.executeSql('CREATE TABLE IF NOT EXISTS Users(user_id INTEGER PRIMARY KEY NOT NULL, name VARCHAR(30))', []);
    
    //     // // Insert a record
    //     // txn.executeSql('INSERT INTO Users (name) VALUES (:name)', ['nora']);
    
    //     // // Insert another record
    //     // txn.executeSql('INSERT INTO Users (name) VALUES (:name)', ['takuya']);
    
    //     // Select all inserted records, loop over them while printing them on the console.
    //     txn.executeSql('SELECT * FROM `dossier`', [], function (tx, res) {
    //       console.log("Query completed");
    //         let resArray = []
    //         for (let i = 0; i < res.rows.length; ++i) {
    //           resArray.push(res.rows.item(i))
    //         }
    //         setcarouselItems(resArray)
    //     });
    
    // });
    },[isFocused])

    async function requestPermissions() {
      if (Platform.OS === 'ios') {
        Geolocation.requestAuthorization();
        Geolocation.setRNConfiguration({
          skipPermissionRequests: false,
         authorizationLevel: 'whenInUse',
       });
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
        // Geocoder.from(position.coords.latitude, position.coords.longitude)
        Geocoder.from('40.87682047278474', '15.185810238033884')
            .then(json => {
                var addressComponent = json.results[0].formatted_address
                setGeolocalization(addressComponent)

            })
            .catch(error =>
                console.warn("error",error)
            );
      },
      error => Alert.alert('Error', JSON.stringify(error)),
      {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000},
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
              <BagIcon style={styles.image} width={styles.image.width} height={styles.image.height} fill={secondaryColorOpacity}/>
              <ButtonText>Commerciale</ButtonText>
            </ButtonContainer>
            <ButtonContainer style={{flex: 0.33}} onPress={() => navigation.navigate('Cerca', {type:2})} value={false}>
              <CarIcon style={styles.image} width={styles.image.width} height={styles.image.height} fill={secondaryColorOpacity}/>
              <ButtonText>Box Auto</ButtonText>
            </ButtonContainer>
          </View>
        
        <View style={{padding: 20}}> 
          <View style={{ flex: 1, flexDirection: "row" }}>
            <Text style={styles.geotext}>Ricerca in base alla posizione attuale</Text>
          </View>
          <View style={[styles.localizzazione,{ flexDirection: "row", justifyContent:'center' }]}> 
            <ButtonLocalization style={{flex: 0.5}} color={white}>
              <ButtonTextLocalization color={lightblue} fontSize="13px" align="flex-start">Geolocalizzato in:</ButtonTextLocalization>
              <ButtonTextLocalization color={primaryColor} fontSize="12px" align="flex-start">{geolocalization}</ButtonTextLocalization>
            </ButtonLocalization>
            <ButtonLocalization style={{flex: 0.5}} color={primaryColor}>
              <ButtonTextLocalization color={white} fontSize="14px" align="center">Avvia Ricerca</ButtonTextLocalization>
            </ButtonLocalization>
          </View>
        </View>

        <View style={{marginBottom: 60, padding: 0}}> 
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
                  sliderHeight={300}
          />
        </View>
      </ScrollView>
    );
  };

  export default HomeScreen;