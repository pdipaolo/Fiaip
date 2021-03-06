import styled from "styled-components";

import { lightblue } from '../../../../constants/Colors'

const ButtonMoreScheda = styled.TouchableOpacity`
    elevation: 0;
    height: 20px;
    background-color: transparent;
    borderColor: transparent;
    borderWidth: 0;
    margin.top: 16px;
`;

const ButtonTextMoreScheda = styled.Text`
    margin.right: 20px;
    font-size: 16px;
    color: ${lightblue};
`;

export {
    ButtonMoreScheda,
    ButtonTextMoreScheda 
};

