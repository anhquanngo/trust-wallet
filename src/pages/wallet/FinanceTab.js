import React from 'react';
import { View, Text } from 'react-native';

import { StackingList } from '../../components/wallet';

export default function FinanceTab() {
    return <React.Fragment>
        <View>
            <StackingList />
        </View>
    </React.Fragment>
}