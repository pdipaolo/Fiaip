import {
  StyleSheet,
} from 'react-native';
import {
    white,
    primaryColor, 
  } from '../../constants/Colors';

<<<<<<< HEAD
=======
const ButtonContainer = styled.TouchableOpacity`
elevation: ${(props) => props.value ? 1 : 12};
height: ${(props) => props.height};
border-radius: 2px;
padding-vertical: 4px;
padding-horizontal: 4px;
margin: 10px;
background-color: ${white};
justify-content: center;
align-items: center;
shadow-radius: 2px;
`;
>>>>>>> parent of 1dc29413... ios fix

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