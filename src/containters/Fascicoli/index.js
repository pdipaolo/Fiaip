import React from 'react';
import {
  FlatList,
  Dimensions,
  TextInput,
  View
} from 'react-native';
import { useIsFocused } from "@react-navigation/native";
import { RowWrapper } from './components/RowWrapper';
import {
  primaryColor,
  secondaryColorOpacity,
  white,
  grey,
} from '../../constants/Colors';

import {
  ButtonContainer,
  ButtonText,
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
  ProvContainer,
  ProvText,
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
  const isFocused = useIsFocused();
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
  
    // const result = dataList?.filter(x => { return (x.obj.indirizzo.toLowerCase().includes(text.toLowerCase())) && x.obj.tipology == buttonType && x.obj.city == provType})
    // setData(result)
  }

  // React.useEffect(()=>{
  //   searchText()
  // }, [])
  React.useEffect(()=>{
    
    searchText()
  }, [buttonType])

  React.useEffect(()=>{
    searchText()
  }, [provType])

  // React.useEffect(() => {
  //   route.params?.type ? setButtonType(route.params?.type) : setButtonType(0)
  //   // setButtonType(route.params?.type)
  // }, [route.params?.type]);

  React.useEffect(() => {
      searchText()
  }, [text]);

  React.useEffect(()=>{
    console.log("ciao");

  },[isFocused])

  // React.useEffect(() => {
  //    const result = dataList?.filter(x => x.obj.indirizzo.toLowerCase().includes(text.toLowerCase()))
  //     setData(result)
  // }, [text]);

  return (
    <View style={{  height: '100%', paddingTop: 30, backgroundColor: white }}>

      <View style={{  backgroundColor: '#fff',zIndex: 1}}>
        <View style={{ flexDirection: 'row', paddingLeft: 20, paddingTop: 20, paddingBottom:20 }}>
          <View style={{flex:0.90 }}>
            <BoxShadow setting={shadowOpt}>
            <View style={styles.searchContainer}>
            <SearchIcon style={styles.image} width={20} height={20} fill={grey} />
              <TextInput
                style={styles.searchBar}
                placeholder="Inserisci indirizzo"
                onChangeText={text => setText(text)}
              />
            </View>
            </BoxShadow>
          </View>
          <NewdossierIcon style={[styles.image, {flex:0.10}]} width={40} height={40} fill={secondaryColorOpacity} onPress={()=> navigation.navigate('New Dossier',{data:null,id:null, navigation: navigation})} />  
        </View>
        <View style={[styles.quotazioni, { flexDirection: "row", justifyContent: 'center',backgroundColor: white }]}>
          <ButtonContainer style={{ flex: 0.33,height:'100%' }} onPress={() => setButtonType(0)} value={buttonType === 0 ? true : false} height={ITEM_WIDTH/3}>
            <HomeIcon style={styles.image} width={styles.image.width} height={styles.image.height} fill={secondaryColorOpacity} />
            <ButtonText>Residenziale</ButtonText>
          </ButtonContainer>
          <ButtonContainer style={{ flex: 0.33,height:'100%' }} onPress={() => setButtonType(1)} value={buttonType === 1 ? true : false} height={ITEM_WIDTH/3}>
            <BagIcon style={styles.image} width={styles.image.width} height={styles.image.height} fill={secondaryColorOpacity} />
            <ButtonText>Commerciale</ButtonText>
          </ButtonContainer>
          <ButtonContainer style={{ flex: 0.33,height:'100%' }} onPress={() => setButtonType(2)} value={buttonType === 2 ? true : false} height={ITEM_WIDTH/3}>
            <CarIcon style={styles.image} width={styles.image.width} height={styles.image.height} fill={secondaryColorOpacity} />
            <ButtonText>Box Auto</ButtonText>
          </ButtonContainer>
        </View>

        <View style={{ flexDirection: "row", justifyContent: 'center', padding: 10,backgroundColor: '#fff' }}>
          <ProvContainer style={{ flex: 0.50 }} onPress={() => setProvType(0)} value={provType === 0 ? true : false}>
            <ProvText value={provType === 0 ? true : false}>Napoli</ProvText>
          </ProvContainer>
          <ProvContainer style={{ flex: 0.50 }} onPress={() => setProvType(1)} value={provType === 1 ? true : false}>
            <ProvText value={provType === 1 ? true : false}>Provincia</ProvText>
          </ProvContainer>
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