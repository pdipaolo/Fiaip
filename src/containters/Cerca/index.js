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
} from '../../constants/Colors';

import {
  ButtonContainer,
  ButtonText,
} from '../../components/ToggleButton';

import { BoxShadow } from 'react-native-shadow';
import CarIcon from '../../assets/images/car.svg'
import HomeIcon from '../../assets/images/home.svg';
import BagIcon from '../../assets/images/bag.svg';
import {
  shadowOpt,
  styles,
  ProvContainer,
  ProvText,
  shadowLine,
} from './components/BoxWrapper';

function Cerca(props) {
  const { route } = props;
  const [buttonType, setButtonType] = React.useState(0);
  const [provType, setProvType] = React.useState(0);
  const dataList = [
    { key: '1' },
    { key: '2' },
    { key: '3' },
    { key: '4' },
    { key: '5' },
    { key: '6' },
    { key: '7' },
    { key: '8' },
    { key: '9' },
    { key: '10' },
    { key: '11' },
    { key: '12' },
    { key: '13' },
    { key: '14' },
    { key: '15' },
    { key: '16' },
    { key: '17' },
    { key: '18' },
    { key: '19' },
    { key: '20' },
    { key: '21' },
    { key: '22' },
    { key: '23' },
    { key: '24' },
    { key: '25' },
    { key: '26' },
    { key: '27' },
    { key: '28' },]
  const [data, setData] = React.useState(dataList)
  const [text, setText] = React.useState('');
  React.useEffect(() => {
    setButtonType(route.params?.type)
  }, [route.params?.type]);

  React.useEffect(() => {

    const result = dataList.filter( x => x.key.toLowerCase().includes(text.toLowerCase()))
    setData(result)
  }, [text]);

  return (
    <View style={ {display:'flex', flexDirection: 'column',height: '100%',paddingTop: 30, backgroundColor: white }}>
      <View style={{flex:0.35,backgroundColor: '#fff' }}>
        <View style={{ padding: 20 }}>
          <BoxShadow setting={shadowOpt}>
            <TextInput
              style={styles.serchBar}
              placeholder="Inserisci indirizzo"
              onChangeText={text => setText(text)}
            />
          </BoxShadow>
        </View>

        <View style={[styles.quotazioni, { flexDirection: "row", justifyContent: 'center' }]}>
          <ButtonContainer style={{ flex: 0.33,height: '100%' }} onPress={() => setButtonType(0)} value={buttonType === 0 ? true : false}>
            <HomeIcon style={styles.image} width={styles.image.width} height={styles.image.height} fill={secondaryColorOpacity} />
            <ButtonText>Residenziale</ButtonText>
          </ButtonContainer>
          <ButtonContainer style={{ flex: 0.33,height: '100%' }} onPress={() => setButtonType(1)} value={buttonType === 1 ? true : false}>
            <CarIcon style={styles.image} width={styles.image.width} height={styles.image.height} fill={secondaryColorOpacity} />
            <ButtonText>Box Auto</ButtonText>
          </ButtonContainer>
          <ButtonContainer style={{ flex: 0.33,height: '100%' }} onPress={() => setButtonType(2)} value={buttonType === 2 ? true : false}>
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

        />
      </View>
    </View>
  );
};

export default Cerca;