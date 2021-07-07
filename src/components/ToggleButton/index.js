import {
  StyleSheet,
} from 'react-native';
import {
    white,
    primaryColor, 
  } from '../../constants/Colors';


const toggleStyles = StyleSheet.create({
  buttonContainer : (value,height) => ({
    elevation: value?1:12,
    height:height,
    borderRadius: 2,
    paddingVertical: 4,
    paddingHorizontal: 4,
    margin: 10,
    backgroundColor: white,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 3.84,
    shadowOpacity: value ? 0 : 0.25,
    justifyContent: 'center',
    alignItems: 'center',
  }),
  buttonText:{
    fontSize: 14,
    color: primaryColor,
    alignSelf: 'center',
    marginTop: 8,
  }
});

export {
    toggleStyles
};