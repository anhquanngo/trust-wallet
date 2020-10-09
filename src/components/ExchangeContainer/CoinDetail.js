import React from 'react';
import { Text, View } from 'react-native';
import styled from 'styled-components/native';

export default function CoinDetail(props) {
    const { currency, quality, qualityBalance } = props
    return (
        <Container>
            <View
                style={{
                    width: '50%',
                    justifyContent: 'space-around',
                    marginLeft: 20,
                    marginTop: 5,
                }}>
                <TextSECONDARY>Currency</TextSECONDARY>
                <TextPRIMARY style={{ fontWeight: 'bold', fontSize: 22 }}>{quality}</TextPRIMARY>
                <TextSECONDARY>Balance: {qualityBalance} {currency}</TextSECONDARY>
            </View>

            <View
                style={{
                    width: '50%',
                    flexDirection: 'row',
                    justifyContent: 'space-evenly',
                    alignItems: 'center',
                }}>
                <TextPRIMARY>image</TextPRIMARY>
                <TextPRIMARY style={{ fontWeight: 'bold', fontSize: 22 }}>{currency}</TextPRIMARY>
                <TextPRIMARY style={{ color: 'gray', fontSize: 24, fontWeight: 'bold' }}>
                    {'>'}
                </TextPRIMARY>
            </View>
        </Container>
    )
}

CoinDetail.defaultProps = {
    currency: "ETH",
    quality: 20,
    qualityBalance: 30
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

