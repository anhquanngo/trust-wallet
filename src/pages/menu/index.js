import React from 'react';
import { View } from 'react-native';

import { HeaderMenu, HistoryList } from '../../components/menu';

export default function MenuContainer() {
    return <React.Fragment>
        <View>
            <HeaderMenu />
        </View>
        <View>
            <HistoryList />
        </View>
    </React.Fragment>
}