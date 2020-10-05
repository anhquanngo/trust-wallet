import React from 'react';
import { View, Text } from 'react-native';
import styled from 'styled-components/native';
import Ionicon from 'react-native-vector-icons/Ionicons';

export const Notification = () => {
    return <View>
        <Text>Notification Stack</Text>
        <TextStyle>Hello</TextStyle>
        <Ionicon name="shield" size={30} color="#f00"/>
        <WrapIcon name="shield" size={30}/>
    </View>
}


const TextStyle = styled.Text`
    color: ${props => props.theme.PRIMARY_TEXT_COLOR}
`;

const WrapIcon = styled(Ionicon)`
    color: #0f0;
`;