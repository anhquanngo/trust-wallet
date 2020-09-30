import React from 'react';
import { View, Text } from 'react-native';

export default function SettingList({navigation}) {
    return <React.Fragment>
        <View>
            <Text onPress={() => navigation.navigate('SettingStack')}>Setting Item - </Text>
        </View>
    </React.Fragment>
}