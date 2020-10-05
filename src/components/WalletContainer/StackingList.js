import React from 'react';
import { View, Text, Image } from 'react-native';
import { StackingItem } from './StackingItem';

export const StakingList = (props) => {
    const { lists } = props
    return (
        <View>
            <Text style={{ color: "#3E7CBE", fontWeight: "bold", fontSize: 20, padding: 15 }}>Staking</Text>
            {
                lists && lists.map((item, index) => {
                    return (
                        <StackingItem item={item} key={index}/>
                    )
                })
            }
        </View>
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