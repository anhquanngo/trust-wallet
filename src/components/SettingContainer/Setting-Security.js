import React, { useState } from 'react'
import { View, Text, Switch } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign';

export const SettingSecurity = () => {
    const [isEnabled1, setIsEnabled1] = useState(false);
    const toggleSwitch1 = () => setIsEnabled1(previousState => !previousState);
    const [isEnabled2, setIsEnabled2] = useState(false);
    const toggleSwitch2 = () => setIsEnabled2(previousState => !previousState);
    return (
        <View>
            <View style={{ flexDirection: "row", justifyContent: "space-between", borderTopWidth: 0.5, borderBottomWidth: 0.5 }}>
                <View style={{ flexDirection: "row" }}>
                    <View style={{ justifyContent: "center", margin: 10 }}>
                        <Text style={{ fontSize: 22 }} >
                            Khóa ứng dụng
                    </Text>
                    </View>
                </View>
                <View style={{ justifyContent: "center" }}>
                    <Text style={{ fontSize: 22, margin: 10 }} >
                        <Switch
                            trackColor={{ false: "#767577", true: "#81b0ff" }}
                            thumbColor={isEnabled1 ? "#f5dd4b" : "#f4f3f4"}
                            ios_backgroundColor="#3e3e3e"
                            onValueChange={toggleSwitch1}
                            value={isEnabled1}
                        />
                    </Text>
                </View>
            </View>
            <View style={{ margin: 10 }}>
                <Text style={{ fontSize: 16, color: "#8F9CB8" }}>QUYỀN RIÊNG TƯ</Text>
            </View>
            <View style={{ flexDirection: "row", justifyContent: "space-between", borderTopWidth: 0.5, borderBottomWidth: 0.5 }}>
                <View style={{ flexDirection: "row" }}>
                    <View style={{ justifyContent: "center", margin: 10 }}>
                        <Text style={{ fontSize: 22 }} >
                            Tự động thay đổi địa chỉ
                    </Text>
                    </View>
                </View>
                <View style={{ justifyContent: "center" }}>
                    <Text style={{ fontSize: 22, margin: 10 }} >
                        <Switch
                            trackColor={{ false: "#767577", true: "#81b0ff" }}
                            thumbColor={isEnabled2 ? "#f5dd4b" : "#f4f3f4"}
                            ios_backgroundColor="#3e3e3e"
                            onValueChange={toggleSwitch2}
                            value={isEnabled2}
                        />
                    </Text>
                </View>
            </View>
        </View>
    )
}
