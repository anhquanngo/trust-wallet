import React from 'react';
import { View, Text, Image } from 'react-native';
import styled from 'styled-components/native';
import { StackingItem } from './StackingItem';

export const StakingList = (props) => {
    const { lists } = props
    return (
        <Container>
            {
                lists && lists.map((item, index) => {
                    return (
                        <StackingItem item={item} key={index} />
                    )
                })
            }
        </Container>
    )
}

StakingList.defaultProps = {
    lists: [
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