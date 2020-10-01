import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';

export default function SettingWallet({ navigation }) {
    return <React.Fragment>
        <View style={{ backgroundColor: "fff" }} >
            <View style={{ margin: 10 }}>
                <Text style={{ fontSize: 16, color: "#8F9CB8" }}>CÁC VI MULTI-COIN</Text>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate("Setting-Wallet")}>
                <View style={{ flexDirection: "row", justifyContent: "space-between", borderBottomWidth: 0.5 }}>
                    <View style={{ flexDirection: "row" }}>
                        <View style={{ justifyContent: "center", margin: 10 }}>
                            <View style={{
                                justifyContent: "center", alignItems: "center",
                                height: 50, width: 50, backgroundColor: "#30B939", borderRadius: 10
                            }}>
                                <AntDesign name="wallet" size={35} color="#fff" />
                            </View>
                        </View>
                        <View style={{ justifyContent: "center" }}>
                            <Text style={{ fontSize: 22 }} >
                                Wallets
                    </Text>
                            <Text style={{ fontSize: 18, color: "#989898" }}  >
                                Multi-Coin Wallet Quan
                    </Text>
                        </View>
                    </View>
                    <View style={{ justifyContent: "center" }}>
                        <Text style={{ fontSize: 22, margin: 10 }} >
                            <AntDesign size={20} color="#3B99FC" name="infocirlceo" />
                        </Text>
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    </React.Fragment>
}