import styled from 'styled-components/native';

export const Container = styled.View`
    display: flex;
    flex: 1;
    background-color: #eeeeee;
    padding: 10px;
    justify-content: center;
`;

export const FormContainer = styled.View`
    display: flex;
    flex: 1;
    padding: 0px 40px;
    justify-content: center;
    align-items: stretch;
    
`;

export const Title = styled.Text`
    text-align: center;
    color: #000;
    font-size: 25px;
    font-weight: bold;
`;

export const CardContainer = styled.View`

    background-color: ${props => props.theme.box.backgroundColor};
    border-radius: ${props => props.theme.box.borderRadius}px;
    padding: ${props => props.theme.box.padding / 2}px;
    margin-top: 10px;
    shadow-color: #000;
    shadow-offset: 0 0;
    shadow-opacity: 1;
    elevation: 1;

`;

export const Label = styled.Text`
    text-align: left;
    color: #333;
    font-size: 14px;
    font-weight: bold;
`;

export const TextInformation = styled.Text`
    text-align: center;
    margin-top: 10px;
    font-size: 14px;
    color: #DDDDDD;
    line-height: 21px;
`;

export const Error = styled.Text`
    color: #E37A7A;
    text-align: center;
    margin-top: 10px;
`;

export const Form = styled.View`
    margin-top: 20px;
`;

export const Input = styled.TextInput`
    margin-top: 10px;
    background-color: #FFFFFF;
    border-radius: 3px;
    height: 39px;
    padding: 0px 20px;
    elevation: 1;
    
`;

export const Button = styled.TouchableOpacity`
    background-color: #7A91CA;
    border-radius: 3px;
    height: 44px;
    padding: 0px 20px;
    margin-top: 10px;
    justify-content: center;
    align-items: center;
`;

export const ButtonText = styled.Text`
    color: #FFFFFF;
    font-weight: bold;
    font-size: 14px;
`;