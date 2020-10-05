import React, { useState } from 'react'
import { View, Text, Switch, Image } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';

export const DetailStackCoin = () => {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    return (
        < View style={{ flexDirection: "row", justifyContent: "space-between", borderBottomWidth: 0.5 }}>
            <View style={{ flexDirection: "row" }}>
                <View style={{ justifyContent: "center" }}>
                    <View >
                        <Image
                            source={{ uri: `${Coin.imageUrl}` }}
                            style={{ width: 50, height: 50, margin: 15 }}
                        />
                    </View>
                </View>
                <View style={{ justifyContent: "center" }}>
                    <Text style={{ fontSize: 22 }} >
                        {Coin.title}
                    </Text>
                </View>
            </View>
            <View style={{ justifyContent: "center" }}>
                <Text style={{ fontSize: 22, margin: 10 }} >
                    <Switch
                        trackColor={{ false: "#767577", true: "#81b0ff" }}
                        thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={toggleSwitch}
                        value={isEnabled}
                    />
                </Text>
            </View>
        </View >
    )
}