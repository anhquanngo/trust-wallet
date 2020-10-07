import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';

export const CollectionTab = () => {
    return <React.Fragment>
        <Container style={{ height: "100%", alignItems: "center", justifyContent: "center" }}>
            <Image style={{ height: 220, width: 180 }} source={{ uri: 'https://i.pinimg.com/originals/27/17/a4/2717a45d2f1ff04ccec8de30ea2661c3.png' }}></Image>
            <TextPrimary style={{ padding: 20, fontSize: 20 }}>Bộ sưu tập sẽ xuất hiện ở đây</TextPrimary>
            <ButtonStyle            >
                <Text >Nhận</Text>
            </ButtonStyle>
        </Container>
    </React.Fragment>
}

const Container = styled.View`
    background-color: ${(props) => props.theme.BACKGROUND_COLOR_PRIMARY};
    height: 100%; 
    align-items: center; 
    justify-content: center;
`

const TextPrimary = styled.Text`
    color: ${(props) => props.theme.TEXT_COLOR_PRIMARY};
`
const TextSecondary = styled.Text`
    color: ${(props) => props.theme.TEXT_COLOR_SECONDARY};
`
const ButtonStyle = styled.TouchableOpacity`
    align-items:center;
    background-color: ${(props) => props.theme.TEXT_COLOR_THIRDARY};
    padding-top: 10;
    padding-bottom: 10;
    width: 100;
`