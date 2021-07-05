import styled from "styled-components";

const ButtonLocalization = styled.TouchableOpacity`
     elevation: 10;
     height: auto;
     border-radius: 2px;
     padding-vertical: 4px;
     padding-horizontal: 4px;
     margin: 2px;
     background-color: ${props => props.color};
     shadowColor: #000;
     shadowOpacity: 0.5;
     borderColor: ${props => props.color};
     borderWidth: 0.5px;
     justify-content: center;
     align-items: center;
     shadow-radius: 2px;
`;

const ButtonTextLocalization = styled.Text`
     font-size: ${props => props.fontSize};
     font-weight: bold;
     color: ${props => props.color};
     align-self: ${props=> props.align};
`;

export {
     ButtonLocalization,
     ButtonTextLocalization 
};

