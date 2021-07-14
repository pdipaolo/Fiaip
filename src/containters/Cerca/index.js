import React from 'react';
import {
  FlatList,
  Text,
  TextInput,
  View,
  Dimensions,
  TouchableWithoutFeedback,
  Platform,
} from 'react-native';
import { useIsFocused } from "@react-navigation/native";
import { BoxShadow } from 'react-native-shadow';

import { RowWrapper } from './components/RowWrapper';
import {
  primaryColor,
  secondaryColorOpacity,
  white,
  grey,
} from '../../constants/Colors';

import {
  toggleStyles,
} from '../../components/ToggleButton';


import {
  shadowOpt,
  styles,
  shadowLine,
} from './components/BoxWrapper';

import CarIcon from '../../assets/images/car.svg'
import HomeIcon from '../../assets/images/home.svg';
import BagIcon from '../../assets/images/bag.svg';
import SearchIcon from '../../assets/images/search.svg';
import json from '../../dati/dataRicerca.json';

const SLIDER_WIDTH = Dimensions.get('window').width;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.85);
function Cerca(props) {
  const { route } = props;
  
  const [text, setText] = React.useState('');
  const [buttonType, setButtonType] = React.useState(0);
  const [provType, setProvType] = React.useState(0);
  const dataList = json.dati
  const [data, setData] = React.useState(dataList)
  const isFocused = useIsFocused();
  
  const searchText = () =>{
    const result = dataList.filter( x => { return (x.Address?.toLowerCase().includes(text.toLowerCase())) && x.Type == buttonType && x.City == provType})
    setData(result)
  }
  React.useEffect(()=>{
   setText( route.params?.address.split(",")[0] ? route.params?.address.split(",")[0] : '')
  },[isFocused])

  React.useEffect(()=>{
    
    searchText()
  }, [buttonType])

  React.useEffect(()=>{
    searchText()
  }, [provType])

  React.useEffect(() => {
    route.params?.type ? setButtonType(route.params?.type) : setButtonType(0)
    // setButtonType(route.params?.type)
  }, [route.params?.type]);

  React.useEffect(() => {
      searchText()
  }, [text]);

  return (
    <View style={ {height: '100%',paddingTop: 30, backgroundColor: white }}>
      <View style={{backgroundColor: white,zIndex: 1 }}>
        <View style={{ padding: 20, backgroundColor: '#fff'}}>
          <BoxShadow setting={shadowOpt}>
            <View style={styles.searchContainer}>
            <SearchIcon style={styles.image} width={20} height={20} fill={grey} />
              <TextInput
                defaultValue={route.params?.address.split(",")[0]}
                style={styles.searchBar(Platform.OS === 'ios' ? 0 : 9)}
                placeholder="Inserisci indirizzo"
                onChangeText={text => setText(text)}
              />
            </View>

          </BoxShadow>
        </View>

        <View style={[styles.quotazioni, { flexDirection: "row", justifyContent: 'center',backgroundColor: '#fff' }]}>

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

      <View style={{backgroundColor: 'white',zIndex: 0 ,paddingTop:16}}>
        <View style={{ flexDirection: "row", paddingLeft: 20, height: 30 }}>
          <View style={{ flex: 0.60, height: 30 }}></View>
          <Text style={{ flex: 0.20, height: 30, textAlign: 'center' }}>V.M.U</Text>
          <Text style={{ flex: 0.20, height: 30, textAlign: 'center' }}>V.L.U</Text>
        </View>
        <FlatList
          data={data}
          initialNumToRender={50}
          renderItem={({ item, index }) => <RowWrapper item={item} index={index} />}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    </View>
  );
};

export default Cerca;