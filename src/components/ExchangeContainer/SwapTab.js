import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import CoinDetail from './CoinDetail'

const SwapTab = () => (
    <Container >
        <CoinDetail />
        <ButtonExchange>
            <TextButtonExchange>
                ↑↓
                </TextButtonExchange>
        </ButtonExchange>
        <CoinDetail />
        <ViewPercent>
            <ButtonPercent>
                <TextThirdary>25%</TextThirdary>
            </ButtonPercent>
            <ButtonPercent>
                <TextThirdary>50%</TextThirdary>
            </ButtonPercent>
            <ButtonPercent>
                <TextThirdary>75%</TextThirdary>
            </ButtonPercent>
            <ButtonPercent>
                <TextThirdary>100%</TextThirdary>
            </ButtonPercent>
        </ViewPercent>

        <View style={{ height: 40, marginTop: 15, }}>
            <NumberExchange >1 BNB ~ 4,751.722 MITH </NumberExchange>
        </View>

        <View style={{ justifyContent: 'center', alignContent: 'center' }}>
            <ButtonNext >Next</ButtonNext>
        </View>
    </Container>
);

const Container = styled.View`
    height:100%;
    padding-top: 15;
    padding-right: 15;
    padding-bottom: 15;
    padding-left: 15;
    background-color: ${(props) => props.theme.BACKGROUND_COLOR_PRIMARY};
`;

const ButtonNext = styled.Text`
    padding-top: 15;
    padding-left: 15;
    padding-right: 15;
    padding-bottom: 15;
    border-radius:10;
    text-align: center;
    font-size: 20;
    font-weight: bold;
    color: ${(props) => props.theme.TEXT_COLOR_PRIMARY};
    background-color: ${(props) => props.theme.BACKGROUND_COLOR_SECONDARY};
`;

const ButtonExchange = styled.View`
    height: 50;
    width: 50;
    border-radius: 25;
    border-color:  ${(props) => props.theme.TEXT_COLOR_THIRDARY};
    border-width: 2;
    background-color: ${(props) => props.theme.BACKGROUND_COLOR_SECONDARY};
    justify-content: center;
    align-items: center;
    margin-top: -25;
    margin-bottom: -25;
    left: 270;
    z-index:10;
`

const TextButtonExchange = styled.Text`
    color: ${(props) => props.theme.TEXT_COLOR_THIRDARY};;
    font-size: 20;
    font-weight: bold;
`

const ViewPercent = styled.View`
    margin-top: 15;
    height: 40;
    width: 100%;
    flex-direction: row;
    justify-content: space-around; 
`

const ButtonPercent = styled.TouchableOpacity`
    width: 23%;
    justify-content: center;
    align-items: center;
    background-color: ${(props) => props.theme.BACKGROUND_COLOR_SECONDARY};
    border-radius: 10;
`
const TextThirdary = styled.Text`
    color: ${(props) => props.theme.TEXT_COLOR_THIRDARY};
`
const NumberExchange = styled.Text`
    font-size:18;
    text-align: center;
    color: ${(props) => props.theme.TEXT_COLOR_SECONDARY}
`




export default SwapTab;

