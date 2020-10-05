import React from 'react';
import {View} from 'react-native';

import {HeaderMenu} from './HeaderMenu';
import {HistoryList} from './HistoryList';

export default function MenuContainer() {
  return (
    <React.Fragment>
      <View>
        <HeaderMenu />
      </View>
      <View>
        <HistoryList />
      </View>
    </React.Fragment>
  );
}
