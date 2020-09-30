import React from 'react';
import { View, Text } from 'react-native';

//import component
import { TokenWallet, CoinList } from '../../components/wallet';

export default function TokenTab() {
    return <React.Fragment>
        <View>
            <TokenWallet />
        </View>
        <View>
            <CoinList />
        </View>
    </React.Fragment>
}