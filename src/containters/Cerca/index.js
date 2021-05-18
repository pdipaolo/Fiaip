import React from 'react';
import {
  FlatList,
  Text,
  TextInput,
  View
} from 'react-native';

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

import { BoxShadow } from 'react-native-shadow';
import CarIcon from '../../assets/images/car.svg'
import HomeIcon from '../../assets/images/home.svg';
import BagIcon from '../../assets/images/bag.svg';
import SearchIcon from '../../assets/images/search.svg';
import {
  shadowOpt,
  styles,
  ProvContainer,
  ProvText,
  shadowLine,
} from './components/BoxWrapper';

import json from './dataRicerca.json';

function Cerca(props) {
  const { route } = props;
  const [buttonType, setButtonType] = React.useState(0);
  const [provType, setProvType] = React.useState(0);
  const dataList = json.Na_residenziale
  const [data, setData] = React.useState(dataList)
  const [text, setText] = React.useState('');
  const searchText = () =>{
    const result = dataList.filter( x => { return x.Address?.toLowerCase().includes(text.toLowerCase()) && x.Type == buttonType && x.City == provType})
    setData(result)
  }

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
    console.log("here");
      searchText()
  }, [text]);

  return (
    <View style={ {display:'flex', flexDirection: 'column',height: '100%',paddingTop: 30, backgroundColor: white }}>
      <View style={{flex:0.35,backgroundColor: '#fff' }}>
        <View style={{ padding: 20 }}>
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

        <View style={[styles.quotazioni, { flexDirection: "row", justifyContent: 'center' }]}>
          <ButtonContainer style={{ flex: 0.33,height: '100%' }} onPress={() => {setButtonType(0)}} value={buttonType === 0 ? true : false}>
            <HomeIcon style={styles.image} width={styles.image.width} height={styles.image.height} fill={secondaryColorOpacity} />
            <ButtonText>Residenziale</ButtonText>
          </ButtonContainer>
          <ButtonContainer style={{ flex: 0.33,height: '100%' }} onPress={() => {setButtonType(1)}} value={buttonType === 1 ? true : false}>
            <CarIcon style={styles.image} width={styles.image.width} height={styles.image.height} fill={secondaryColorOpacity} />
            <ButtonText>Box Auto</ButtonText>
          </ButtonContainer>
          <ButtonContainer style={{ flex: 0.33,height: '100%' }} onPress={() => {setButtonType(2)}} value={buttonType === 2 ? true : false}>
            <BagIcon style={styles.image} width={styles.image.width} height={styles.image.height} fill={secondaryColorOpacity} />
            <ButtonText>Commerciale</ButtonText>
          </ButtonContainer>
        </View>

        <View style={{ flexDirection: "row", justifyContent: 'center', padding: 10 }}>
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

      <View style={{flex:0.65,backgroundColor: white }}>
        <View style={{ flexDirection: "row", paddingLeft: 20, height: 30 }}>
          <View style={{ flex: 0.60, height: 30 }}></View>
          <Text style={{ flex: 0.20, height: 30 }}>V.M.U</Text>
          <Text style={{ flex: 0.20, height: 30 }}>V.L.U</Text>
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