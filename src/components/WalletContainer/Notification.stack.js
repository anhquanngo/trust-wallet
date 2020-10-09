import React from 'react';
import { View, Text } from 'react-native';
import styled from 'styled-components/native';
import Ionicon from 'react-native-vector-icons/Ionicons';

export const Notification = () => {
    return <Container>
        <TextPrimary>Notification</TextPrimary>
    </Container>
}


const TextStyle = styled.Text`
    color: ${props => props.theme.TEXT_COLOR_PRIMARY};
`;

const WrapIcon = styled(Ionicon)`
    color: #0f0;
`;

const Container = styled.View`
    background-color: ${(props) => props.theme.BACKGROUND_COLOR_PRIMARY};
    height: 100%; 
`

const TextPrimary = styled.Text`
    color: ${(props) => props.theme.TEXT_COLOR_PRIMARY};
`
const TextSecondary = styled.Text`
    color: ${(props) => props.theme.TEXT_COLOR_SECONDARY};
`