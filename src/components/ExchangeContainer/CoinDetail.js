import React from 'react';
import { Text, View } from 'react-native';
import styled from 'styled-components/native';

export default function CoinDetail() {
    return (
        <Container>
            <View
                style={{
                    width: '50%',
                    justifyContent: 'space-around',
                    marginLeft: 20,
                    marginTop: 5,
                }}>
                <TextSECONDARY>You Pay</TextSECONDARY>
                <TextPRIMARY style={{ fontWeight: 'bold', fontSize: 22 }}>0</TextPRIMARY>
                <TextSECONDARY>Balance: 0 BNB</TextSECONDARY>
            </View>

            <View
                style={{
                    width: '50%',
                    flexDirection: 'row',
                    justifyContent: 'space-evenly',
                    alignItems: 'center',
                }}>
                <TextPRIMARY>image</TextPRIMARY>
                <TextPRIMARY style={{ fontWeight: 'bold', fontSize: 22 }}>BNB</TextPRIMARY>
                <TextPRIMARY style={{ color: 'gray', fontSize: 24, fontWeight: 'bold' }}>
                    {'>'}
                </TextPRIMARY>
            </View>
        </Container>
    )
}


const Container = styled.View`
    margin-bottom:5px;
    background-color: ${(props) => props.theme.BACKGROUND_COLOR_SECONDARY};
    border-radius: 5px;
    height: 100px;
    width: 100%;
    flex-direction: row;
`

const TextPRIMARY = styled.Text`
    color: ${(props) => props.theme.TEXT_COLOR_PRIMARY}
`
const TextSECONDARY = styled.Text`
    color: ${(props) => props.theme.TEXT_COLOR_SECONDARY}
`

