import React from 'react';
import {
    Text,
    ScrollView,
    Linking,
    Image
  } from 'react-native';

import RowWrapper from './components/RowWrapper';
import GuidaIcon from '../../assets/images/guida.svg';
import LetterF from '../../assets/images/letter-f.svg';
import MagicWand from '../../assets/images/magic-wand.svg';
import Rectangle from '../../assets/images/rectangle.svg';

import { primaryColor, secondaryColor, white } from '../../constants/Colors';

function Crediti({navigation}) {
    return (
      <ScrollView style={{padding: 8}}>
        <Image
        style={{width:'100%', height: 180}}
        source={require('../../assets/images/logoFiaip.png')}
        resizeMode='contain'
        resizeMethod='auto'
        />
          <RowWrapper image={<GuidaIcon width={40} height={40} fill={white}/>} text={'Guida alla lettura dei valori'} click={()=> navigation.navigate('Profilo')}/>
          <RowWrapper image={<LetterF width={40} height={40} fill={white}/>} text={'Chi Siamo'} click={()=> navigation.navigate('Chi Siamo')}/>
          <RowWrapper image={<Rectangle width={40} height={40} fill={white}/>} text={'Tutorial'} click={()=> navigation.navigate('Tutorial')}/>
          <RowWrapper image={<MagicWand width={40} height={40} fill={white}/>} text={'FeedBack'} click={() => Linking.openURL('mailto:juni.startup@gmail.com?subject=[feedback fiaip app - segnalazioni]')}/>
          <Text style={{paddingTop:20, fontSize:22, color: primaryColor, fontWeight: 'bold', textAlign: 'justify'}}>
            Chiunque ad un certo punto della vita mette su casa. La parte difficile è costruire una casa del cuore. Un posto non soltanto per dormire, ma anche per sognare. Un posto dove crescere una famiglia con amore, un posto non per trovare riparo dal freddo ma un angolino tutto nostro da cui ammirare il cambiamento delle stagioni; un posto non semplicemente dove far passare il tempo, ma dove provare gioia per il resto della vita.
          </Text>
          <Text style={{fontSize:22, color: secondaryColor, fontWeight: 'bold',paddingTop:10, paddingBottom:10}}>
            <Text style={{fontSize:22, color: primaryColor, fontWeight: 'bold'}}> 
              {'Cit.  '}
            </Text>
            Sergio Bambarén 
          </Text>
      </ScrollView>
    );
  };

  export default Crediti;