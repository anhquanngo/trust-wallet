import React from 'react'
import { View, Text, Image } from 'react-native'
import styled from 'styled-components/native';


export const FinanceTab = (props) => {
    const { lists } = props
    return (
        <Container >
            <TextSecondary style={{ fontWeight: "bold", fontSize: 20, padding: 10 }}>Staking</TextSecondary>
            {
                lists && lists.map((item, index) => {
                    return (
                        <ItemCoin key={index}>
                            <View>
                                <Image source={{ uri: `${item.imageUrl}` }} style={{ width: 50, height: 50, margin: 15 }} />
                            </View>
                            <View style={{ justifyContent: "center" }}>
                                <TextPrimary style={{ fontSize: 20 }}>{item.title}</TextPrimary>
                                <TextSecondary style={{ fontSize: 16, color: "gray" }}>APR {item.percent}%</TextSecondary>
                            </View>
                        </ItemCoin>
                    )
                })
            }
        </Container>
    )
}

FinanceTab.defaultProps = {
    lists: [

        {
            imageUrl: "https://cdn.iconscout.com/icon/premium/png-512-thumb/tron-1429786-1210336.png",
            title: "Tron (TRX)",
            percent: "0,74"

        },
        {
            imageUrl: "https://assets.coingecko.com/coins/images/1481/large/cosmos_hub.png?1555657960",
            title: "Cosmos (ATOM)",
            percent: "8,06"

        },
        {
            imageUrl: "https://s2.coinmarketcap.com/static/img/coins/200x200/2011.png",
            title: "Tezos (XTZ)",
            percent: "6,09"

        },
        {
            imageUrl: "https://cdn.iconscout.com/icon/premium/png-512-thumb/tron-1429786-1210336.png",
            title: "Tron (TRX)",
            percent: "0,74"

        },
        {
            imageUrl: "https://assets.coingecko.com/coins/images/1481/large/cosmos_hub.png?1555657960",
            title: "Cosmos (ATOM)",
            percent: "8,06"

        },
        {
            imageUrl: "https://assets.coingecko.com/coins/images/1481/large/cosmos_hub.png?1555657960",
            title: "Cosmos (ATOM)",
            percent: "8,06"

        },
        {
            imageUrl: "https://assets.coingecko.com/coins/images/1481/large/cosmos_hub.png?1555657960",
            title: "Cosmos (ATOM)",
            percent: "8,06"

        },

    ]
}

const Container = styled.View`
    background-color: ${(props) => props.theme.BACKGROUND_COLOR_PRIMARY};
`

const TextPrimary = styled.Text`
    color: ${(props) => props.theme.TEXT_COLOR_PRIMARY};
`
const TextSecondary = styled.Text`
    color: ${(props) => props.theme.TEXT_COLOR_SECONDARY};
`

const ItemCoin = styled.View`
    flex-direction: row;
    border-bottom-width: 0.5;
    background-color: ${(props) => props.theme.BACKGROUND_COLOR_SECONDARY};
    border-radius:10   
`