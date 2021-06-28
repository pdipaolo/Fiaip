import styled from "styled-components";
import {
    white,
    primaryColor, 
    secondaryColor, 
    secondaryColorOpacity 
  } from '../../constants/Colors';

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

const ButtonText = styled.Text`
font-size: 14px;
color: ${primaryColor};
align-self: center;
margin-top: 8px;
`;

export {
    ButtonContainer,
    ButtonText,
};