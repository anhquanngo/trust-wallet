import React from 'react';
import { View, Text } from 'react-native';

export default function Setting({navigation}) {
    return <React.Fragment>
        <View>
            <Text onPress={() => navigation.navigate('SettingStack')}>Setting Stack - </Text>
        </View>
    </React.Fragment>
}