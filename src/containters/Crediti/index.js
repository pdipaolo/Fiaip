import React from 'react';
import {
    Text,
    ScrollView,
  } from 'react-native';

import RowWrapper from './components/RowWrapper'
import LogoFiaip from '../../assets/images/logoFiaip.svg';
import UserImage from '../../assets/images/user.svg';
import LetterF from '../../assets/images/letter-f.svg';
import MagicWand from '../../assets/images/magic-wand.svg';
import Rectangle from '../../assets/images/rectangle.svg';

import { primaryColor, secondaryColor, white } from '../../constants/Colors';
function Crediti({navigation}) {
    return (
      <ScrollView style={{padding: 10}}>
          <LogoFiaip width={'100%'} height={180}/>
          <RowWrapper image={<UserImage width={40} height={40} fill={white}/>} text={'Profilo'} click={()=> navigation.navigate('Profilo')}/>
          <RowWrapper image={<LetterF width={40} height={40} fill={white}/>} text={'Chi Siamo'} click={()=> navigation.navigate('Chi Siamo')}/>
          <RowWrapper image={<Rectangle width={40} height={40} fill={white}/>} text={'Tutorial'} click={()=> navigation.navigate('Tutorial')}/>
          <RowWrapper image={<MagicWand width={40} height={40} fill={white}/>} text={'FeedBack'} click={()=> navigation.navigate('FeedBack')}/>
          <Text style={{paddingTop:20, fontSize:22, color: primaryColor, fontWeight: 'bold', textAlign: 'justify'}}>
            Chiunque ad un certo punto della vita mette su casa. La parte difficile è costruire una casa del cuore. Un posto non soltanto per dormire, ma anche per sognare. Un posto dove crescere una famiglia con amore, un posto non per trovare riparo dal freddo ma un angolino tutto nostro da cui ammirare il cambiamento delle stagioni; un posto non semplicemente dove far passare il tempo, ma dove provare gioia per il resto della vita.
          </Text>
          <Text style={{fontSize:22, color: secondaryColor, fontWeight: 'bold',paddingTop:20}}>
            <Text style={{fontSize:22, color: primaryColor, fontWeight: 'bold'}}> 
              {'Cit.  '}
            </Text>
            Sergio Bambarén 
          </Text>
      </ScrollView>
    );
  };

  export default Crediti;