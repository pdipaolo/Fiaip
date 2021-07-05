import {
    StyleSheet
  } from 'react-native';

import { 
    primaryColor,
    secondaryColor
} from '../../../../constants/Colors';

const styles = StyleSheet.create({  
    image:{
      justifyContent: 'center',
      alignItems: 'center',
      width: 40,
      height: 40,
      flex: 0.1,
    },
    textTitle:{
      fontSize: 20,
      color: primaryColor,
      fontWeight: 'bold',
      flex: 0.9
    },
    textCity:{
      fontSize: 16,
      color: primaryColor,
      top: -8
    },
    typeText: {
      fontSize: 18,
      color: secondaryColor,
      fontWeight: 'bold',
      flex: 0.65,
    },
    statusText: {
      fontWeight:'bold',
      fontSize: 16,
      color: primaryColor,
      flex: 0.35,
      textAlign: 'right'
    },
    descriptionText: {
      fontSize: 18,
      color: primaryColor
    }
  });

  export default styles;