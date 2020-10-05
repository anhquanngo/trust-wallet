import React from 'react';
import { View, Text } from 'react-native';
import styled from 'styled-components/native';

export const Notification = () => {
    return <View>
        <Text>Notification Stack</Text>
        <TextStyle>Hello</TextStyle>
    </View>
}


const TextStyle = styled.Text`
    color: ${props => props.theme.PRIMARY_TEXT_COLOR}
`;
