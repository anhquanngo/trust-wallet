import React, { useState } from 'react'
import { View, Text, Switch } from 'react-native'
import DetailStackCoin from './Detail.stack.coin'

export const DetailStack = () => {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    return <View>
        <DetailStackCoin {...props} />
    </View >
}

DetailStack.defaultProps = {
    listCoin: [
        {
            imageUrl: 'https://refur.eu/wp-content/uploads/2016/04/opengraph.png',
            title: 'Bitcoin'
        },
        {
            imageUrl: 'https://www.iconfinder.com/data/icons/cryptocoins/227/ETH-alt-512.png',
            title: 'Ethererum'
        },
        {
            imageUrl: 'https://en.bitcoinwiki.org/upload/en/images/thumb/1/1d/Binance-Coin-BNB-icon.png/300px-Binance-Coin-BNB-icon.png',
            title: 'BNB'
        },
    ]
}