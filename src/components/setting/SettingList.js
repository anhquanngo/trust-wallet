import React, { useState } from 'react'
import { View, Text, Switch, ScrollView } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export default function Settings() {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    return (
        <ScrollView>
            <View>

                <View style={{ flexDirection: "row", justifyContent: "space-between", borderBottomWidth: 0.5 }}>
                    <View style={{ flexDirection: "row" }}>
                        <View style={{ justifyContent: "center", margin: 10 }}>
                            <View style={{
                                justifyContent: "center", alignItems: "center",
                                height: 50, width: 50, backgroundColor: "#D1D1D1", borderRadius: 10
                            }}>
                                <AntDesign name="wallet" size={40} color="#30B939" />
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
                            <SimpleLineIcons size={20} name="arrow-right" />
                        </Text>
                    </View>
                </View>
                <View style={{ flexDirection: "row", justifyContent: "space-between", borderBottomWidth: 0.5 }}>
                    <View style={{ flexDirection: "row" }}>
                        <View style={{ justifyContent: "center", margin: 10 }}>
                            <View style={{
                                justifyContent: "center", alignItems: "center",
                                height: 50, width: 50, backgroundColor: "#D1D1D1", borderRadius: 10
                            }}>
                                <Ionicons name="moon" size={40} color="#000" />
                            </View>
                        </View>
                        <View style={{ justifyContent: "center" }}>
                            <Text style={{ fontSize: 22 }} >
                                Dark Mode
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
                </View>
                <View style={{ flexDirection: "row", justifyContent: "space-between", borderBottomWidth: 0.5 }}>
                    <View style={{ flexDirection: "row" }}>
                        <View style={{ justifyContent: "center", margin: 10 }}>
                            <View style={{
                                justifyContent: "center", alignItems: "center",
                                height: 50, width: 50, backgroundColor: "#D1D1D1", borderRadius: 10
                            }}>
                                <AntDesign name="gift" size={40} color="#FFC000" />
                            </View>
                        </View>
                        <View style={{ justifyContent: "center" }}>
                            <Text style={{ fontSize: 22 }} >
                                Invite a Friend
                    </Text>
                            <Text style={{ fontSize: 18, color: "#989898" }}  >
                                Get TWT Tokens
                    </Text>
                        </View>
                    </View>
                    <View style={{ justifyContent: "center" }}>
                        <Text style={{ fontSize: 22, margin: 10 }} >
                            <SimpleLineIcons size={20} name="arrow-right" />
                        </Text>
                    </View>
                </View>
                <View style={{ flexDirection: "row", justifyContent: "space-between", borderBottomWidth: 0.5 }}>
                    <View style={{ flexDirection: "row" }}>
                        <View style={{ justifyContent: "center", margin: 10 }}>
                            <View style={{
                                justifyContent: "center", alignItems: "center",
                                height: 50, width: 50, backgroundColor: "#D1D1D1", borderRadius: 10
                            }}>
                                <MaterialIcons name="security" size={40} color="#000" />
                            </View>
                        </View>
                        <View style={{ justifyContent: "center" }}>
                            <Text style={{ fontSize: 22 }} >
                                Security
                    </Text>
                        </View>
                    </View>
                    <View style={{ justifyContent: "center" }}>
                        <Text style={{ fontSize: 22, margin: 10 }} >
                            <SimpleLineIcons size={20} name="arrow-right" />
                        </Text>
                    </View>
                </View>
                <View style={{ flexDirection: "row", justifyContent: "space-between", borderBottomWidth: 0.5 }}>
                    <View style={{ flexDirection: "row" }}>
                        <View style={{ justifyContent: "center", margin: 10 }}>
                            <View style={{
                                justifyContent: "center", alignItems: "center",
                                height: 50, width: 50, backgroundColor: "#D1D1D1", borderRadius: 10
                            }}>
                                <Ionicons name="notifications" size={40} color="#000" />

                            </View>
                        </View>
                        <View style={{ justifyContent: "center" }}>
                            <Text style={{ fontSize: 22 }} >
                                Notifications
                    </Text>
                        </View>
                    </View>
                    <View style={{ justifyContent: "center" }}>
                        <Text style={{ fontSize: 22, margin: 10 }} >
                            <SimpleLineIcons size={20} name="arrow-right" />
                        </Text>
                    </View>
                </View>
                <View style={{ flexDirection: "row", justifyContent: "space-between", borderBottomWidth: 0.5 }}>
                    <View style={{ flexDirection: "row" }}>
                        <View style={{ justifyContent: "center", margin: 10 }}>
                            <View style={{
                                justifyContent: "center", alignItems: "center",
                                height: 50, width: 50, backgroundColor: "#D1D1D1", borderRadius: 10
                            }}>
                                <AntDesign name="setting" size={40} color="#000" />
                            </View>
                        </View>
                        <View style={{ justifyContent: "center" }}>
                            <Text style={{ fontSize: 22 }} >
                                Setting
                    </Text>
                        </View>
                    </View>
                    <View style={{ justifyContent: "center" }}>
                        <Text style={{ fontSize: 22, margin: 10 }} >
                            <SimpleLineIcons size={20} name="arrow-right" />
                        </Text>
                    </View>
                </View>
                <View style={{ flexDirection: "row", justifyContent: "space-between", borderBottomWidth: 0.5 }}>
                    <View style={{ flexDirection: "row" }}>
                        <View style={{ justifyContent: "center", margin: 10 }}>
                            <View style={{
                                justifyContent: "center", alignItems: "center",
                                height: 50, width: 50, backgroundColor: "#D1D1D1", borderRadius: 10
                            }}>
                                <Feather name="link" size={40} color="#3B99FC" />
                            </View>
                        </View>
                        <View style={{ justifyContent: "center" }}>
                            <Text style={{ fontSize: 22 }} >
                                WalletConnect
                    </Text>
                        </View>
                    </View>
                    <View style={{ justifyContent: "center" }}>
                        <Text style={{ fontSize: 22, margin: 10 }} >
                            <SimpleLineIcons size={20} name="arrow-right" />
                        </Text>
                    </View>
                </View>
                <View style={{ margin: 10, paddingTop: 10, paddingBottom: 10 }}>
                    <Text style={{ fontWeight: "bold", fontSize: 20, color: "#3375BB" }}>Join Community</Text>
                </View>
                <View style={{ flexDirection: "row", justifyContent: "space-between", borderBottomWidth: 0.5 }}>
                    <View style={{ flexDirection: "row" }}>
                        <View style={{ justifyContent: "center", margin: 10 }}>
                            <View style={{
                                justifyContent: "center", alignItems: "center",
                                height: 50, width: 50, backgroundColor: "#D1D1D1", borderRadius: 10
                            }}>
                                <AntDesign name="questioncircle" size={40} color="#000" />
                            </View>
                        </View>
                        <View style={{ justifyContent: "center" }}>
                            <Text style={{ fontSize: 22 }} >
                                Help Center
                    </Text>
                        </View>
                    </View>
                    <View style={{ justifyContent: "center" }}>
                        <Text style={{ fontSize: 22, margin: 10 }} >
                            <SimpleLineIcons size={20} name="arrow-right" />
                        </Text>
                    </View>
                </View>
                <View style={{ flexDirection: "row", justifyContent: "space-between", borderBottomWidth: 0.5 }}>
                    <View style={{ flexDirection: "row" }}>
                        <View style={{ justifyContent: "center", margin: 10 }}>
                            <View style={{
                                justifyContent: "center", alignItems: "center",
                                height: 50, width: 50, backgroundColor: "#D1D1D1", borderRadius: 10
                            }}>
                                <FontAwesome name="twitter-square" size={40} color="#4C9FF7" />
                            </View>
                        </View>
                        <View style={{ justifyContent: "center" }}>
                            <Text style={{ fontSize: 22 }} >
                                Twitter
                    </Text>
                        </View>
                    </View>
                    <View style={{ justifyContent: "center" }}>
                        <Text style={{ fontSize: 22, margin: 10 }} >
                            <SimpleLineIcons size={20} name="arrow-right" />
                        </Text>
                    </View>
                </View>
                <View style={{ flexDirection: "row", justifyContent: "space-between", borderBottomWidth: 0.5 }}>
                    <View style={{ flexDirection: "row" }}>
                        <View style={{ justifyContent: "center", margin: 10 }}>
                            <View style={{
                                justifyContent: "center", alignItems: "center",
                                height: 50, width: 50, backgroundColor: "#D1D1D1", borderRadius: 10
                            }}>
                                <FontAwesome name="telegram" size={40} color="#4C9FF7" />
                            </View>
                        </View>
                        <View style={{ justifyContent: "center" }}>
                            <Text style={{ fontSize: 22 }} >
                                Telegram
                    </Text>
                        </View>
                    </View>
                    <View style={{ justifyContent: "center" }}>
                        <Text style={{ fontSize: 22, margin: 10 }} >
                            <SimpleLineIcons size={20} name="arrow-right" />
                        </Text>
                    </View>
                </View>
                <View style={{ flexDirection: "row", justifyContent: "space-between", borderBottomWidth: 0.5 }}>
                    <View style={{ flexDirection: "row" }}>
                        <View style={{ justifyContent: "center", margin: 10 }}>
                            <View style={{
                                justifyContent: "center", alignItems: "center",
                                height: 50, width: 50, backgroundColor: "#D1D1D1", borderRadius: 10
                            }}>
                                <AntDesign name="facebook-square" size={40} color="#4867AA" />
                            </View>
                        </View>
                        <View style={{ justifyContent: "center" }}>
                            <Text style={{ fontSize: 22 }} >
                                Facebook
                    </Text>
                        </View>
                    </View>
                    <View style={{ justifyContent: "center" }}>
                        <Text style={{ fontSize: 22, margin: 10 }} >
                            <SimpleLineIcons size={20} name="arrow-right" />
                        </Text>
                    </View>
                </View>
                <View style={{ flexDirection: "row", justifyContent: "space-between", borderBottomWidth: 0.5 }}>
                    <View style={{ flexDirection: "row" }}>
                        <View style={{ justifyContent: "center", margin: 10 }}>
                            <View style={{
                                justifyContent: "center", alignItems: "center",
                                height: 50, width: 50, backgroundColor: "#D1D1D1", borderRadius: 10
                            }}>
                                <FontAwesome name="reddit" size={40} color="#F64302" />
                            </View>
                        </View>
                        <View style={{ justifyContent: "center" }}>
                            <Text style={{ fontSize: 22 }} >
                                Reddit
                    </Text>
                        </View>
                    </View>
                    <View style={{ justifyContent: "center" }}>
                        <Text style={{ fontSize: 22, margin: 10 }} >
                            <SimpleLineIcons size={20} name="arrow-right" />
                        </Text>
                    </View>
                </View>
                <View style={{ flexDirection: "row", justifyContent: "space-between", borderBottomWidth: 0.5 }}>
                    <View style={{ flexDirection: "row" }}>
                        <View style={{ justifyContent: "center", margin: 10 }}>
                            <View style={{
                                justifyContent: "center", alignItems: "center",
                                height: 50, width: 50, backgroundColor: "#D1D1D1", borderRadius: 10
                            }}>
                                <AntDesign name="youtube" size={40} color="#F70000" />
                            </View>
                        </View>
                        <View style={{ justifyContent: "center" }}>
                            <Text style={{ fontSize: 22 }} >
                                Youtube
                    </Text>
                        </View>
                    </View>
                    <View style={{ justifyContent: "center" }}>
                        <Text style={{ fontSize: 22, margin: 10 }} >
                            <SimpleLineIcons size={20} name="arrow-right" />
                        </Text>
                    </View>
                </View>
                <View style={{ flexDirection: "row", justifyContent: "space-between", borderBottomWidth: 0.5 }}>
                    <View style={{ flexDirection: "row" }}>
                        <View style={{ justifyContent: "center", margin: 10 }}>
                            <View style={{
                                justifyContent: "center", alignItems: "center",
                                height: 50, width: 50, backgroundColor: "#D1D1D1", borderRadius: 10
                            }}>
                                <AntDesign name="plussquare" size={40} color="#3375BB" />
                            </View>
                        </View>
                        <View style={{ justifyContent: "center" }}>
                            <Text style={{ fontSize: 22 }} >
                                Make a suggestion
                    </Text>
                        </View>
                    </View>
                    <View style={{ justifyContent: "center" }}>
                        <Text style={{ fontSize: 22, margin: 10 }} >
                            <SimpleLineIcons size={20} name="arrow-right" />
                        </Text>
                    </View>
                </View>
                <View style={{ flexDirection: "row", justifyContent: "space-between", borderBottomWidth: 0.5 }}>
                    <View style={{ flexDirection: "row" }}>
                        <View style={{ justifyContent: "center", margin: 10 }}>
                            <View style={{
                                justifyContent: "center", alignItems: "center",
                                height: 50, width: 50, backgroundColor: "#D1D1D1", borderRadius: 10
                            }}>
                                <AntDesign name="heart" size={40} color="#FF6666" />
                            </View>
                        </View>
                        <View style={{ justifyContent: "center" }}>
                            <Text style={{ fontSize: 22 }} >
                                About
                    </Text>
                        </View>
                    </View>
                    <View style={{ justifyContent: "center" }}>
                        <Text style={{ fontSize: 22, margin: 10 }} >
                            <SimpleLineIcons size={20} name="arrow-right" />
                        </Text>
                    </View>
                </View>
            </View>
        </ScrollView >

    )
}
