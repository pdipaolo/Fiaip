import React from 'react';
import {
  FlatList,
  Dimensions,
  TextInput,
  View, 
  Text,
  TouchableWithoutFeedback,
  Platform
} from 'react-native';
import { RowWrapper } from './components/RowWrapper';
import {
  primaryColor,
  secondaryColorOpacity,
  white,
  grey,
} from '../../constants/Colors';

import {
  toggleStyles
} from '../../components/ToggleButton';
import SQLite from 'react-native-sqlite-storage';

import { BoxShadow } from 'react-native-shadow';
import CarIcon from '../../assets/images/car.svg'
import HomeIcon from '../../assets/images/home.svg';
import BagIcon from '../../assets/images/bag.svg';
import SearchIcon from '../../assets/images/search.svg';
import NewdossierIcon from '../../assets/images/newdossier.svg';
import {
  shadowOpt,
  styles,
  shadowLine,
} from './components/BoxWrapper';
const SLIDER_WIDTH = Dimensions.get('window').width;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.85);

function Fascicoli({navigation}) {
  const [buttonType, setButtonType] = React.useState(0);
  const [provType, setProvType] = React.useState(0);
  const [dataList,setDataList] = React.useState()
  const [data, setData] = React.useState(dataList)
  const [text, setText] = React.useState('');
  const db = SQLite.openDatabase({ name: 'FiaipDB.db' });
  const searchText = () =>{
   
    db.transaction(function (txn) {
      txn.executeSql('SELECT * FROM `dossier`', [], function (tx, res) {
          let resArray = []
          for (let i = 0; i < res.rows.length; ++i) {
            if (JSON.parse( res.rows.item(i).dossier_obj).tipology == buttonType && JSON.parse( res.rows.item(i).dossier_obj).city == provType) {
              resArray.push({id:res.rows.item(i).dossier_id, obj: JSON.parse( res.rows.item(i).dossier_obj)})
            }
          }
          setDataList(resArray)
          setData(resArray) 
      });
    })
  }

  React.useEffect(()=>{
    
    searchText()
  }, [buttonType])

  React.useEffect(()=>{
    searchText()
  }, [provType])

  React.useEffect(() => {
      searchText()
  }, [text]);



  return (
    <View style={{  height: '100%', paddingTop: 30, backgroundColor: white }}>

      <View style={{  backgroundColor: '#fff',zIndex: 1}}>
        <View style={{ flexDirection: 'row', paddingLeft: 20, paddingTop: 20, paddingBottom:20 }}>
          <View style={{flex:0.90 }}>
            <BoxShadow setting={shadowOpt}>
            <View style={styles.searchContainer}>
            <SearchIcon style={styles.image} width={20} height={20} fill={grey} />
              <TextInput
                style={styles.searchBar(Platform.OS === 'ios' ? 0 : 9)}
                placeholder="Inserisci indirizzo"
                placeholderTextColor="#777" 
                onChangeText={text => setText(text)}
              />
            </View>
            </BoxShadow>
          </View>
          <TouchableWithoutFeedback onPress={()=> navigation.navigate('New Dossier',{data:null,id:null, navigation: navigation})}>
            <View style={{height:40, width: 40,}} >
              <NewdossierIcon style={[styles.image, {flex:0.10}]} width={40} height={40} fill={secondaryColorOpacity} />
            </View>
          </TouchableWithoutFeedback>  
        </View>
        <View style={[styles.quotazioni, { flexDirection: "row", justifyContent: 'center',backgroundColor: white }]}>
          <TouchableWithoutFeedback onPress={() => setButtonType(0)}>
              <View style={[toggleStyles.buttonContainer(buttonType === 0 ? true : false,ITEM_WIDTH/3), {flex: 0.33,height:'100%'}]}>
                <HomeIcon style={styles.image} width={styles.image.width} height={styles.image.height} fill={secondaryColorOpacity}/>
                <Text style={toggleStyles.buttonText}>Residenziale</Text>
              </View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={() => setButtonType(1)}>
              <View style={[toggleStyles.buttonContainer(buttonType === 1 ? true : false,ITEM_WIDTH/3), {flex: 0.33,height:'100%'}]}>
                <BagIcon style={styles.image} width={styles.image.width} height={styles.image.height} fill={secondaryColorOpacity}/>
                <Text style={toggleStyles.buttonText}>Commerciale</Text>
              </View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={() => setButtonType(2)}>
              <View style={[toggleStyles.buttonContainer(buttonType === 2 ? true : false,ITEM_WIDTH/3), {flex: 0.33,height:'100%'}]}>
                <CarIcon style={styles.image} width={styles.image.width} height={styles.image.height} fill={secondaryColorOpacity}/>
                <Text style={toggleStyles.buttonText}>Box Auto</Text>
              </View>
            </TouchableWithoutFeedback>
        </View>

        <View style={{ flexDirection: "row", justifyContent: 'center', padding: 10,backgroundColor: '#fff' }}>
          <TouchableWithoutFeedback onPress={() => setProvType(0)}>
            <View style={[styles.provContainer(provType===0?true:false),{ flex: 0.50}]} >
              <Text style={styles.provText(provType===0?true:false)}>Napoli</Text>            
            </View>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback onPress={() => setProvType(1)}>
            <View style={[styles.provContainer(provType===1?true:false),{ flex: 0.50}]} >
              <Text style={styles.provText(provType===1?true:false)}>Provincia</Text>
            </View>
          </TouchableWithoutFeedback>
        </View>

        <BoxShadow setting={shadowLine}>
          <View style={{ width: '100%', height: 1, backgroundColor: primaryColor }} />
        </BoxShadow>
      </View>

      <View style={{  backgroundColor: white ,zIndex: 0}}>
        <View style={{  paddingLeft: 20, height: 30 }} />

        <FlatList
          data={data}
          initialNumToRender={50}
          renderItem={({ item, index }) => <RowWrapper item={item} index={index} navigation={navigation}/>}

        />
      </View>
    </View>
  );
};

export default Fascicoli;