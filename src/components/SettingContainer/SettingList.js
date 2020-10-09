import React, { useState } from 'react'
import { View, Text, Switch, ScrollView, TouchableOpacity } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import styled from 'styled-components/native'
import { useSelector, useDispatch } from 'react-redux';
import { switchTheme } from '../../redux/actions';
import { LIGHT_THEME, DARK_THEME } from '../../redux/constants';

export const SettingList = ({ navigation }) => {
    const [isEnabled, setIsEnabled] = useState(false);
    let color
    let dispatch = useDispatch();
    const toggleSwitch = async () => {
        setIsEnabled(isEnabled => !isEnabled)
        if (isEnabled == true) {
            color = 0
        } else {
            color = 1
        }
        dispatch(
            switchTheme({
                data: color
            }),
        );

    };

    return (
        <ScrollView>
            <Container >
                {/* <TouchableOpacity onPress={() => navigation.navigate("Setting-Wallet")}>
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
                                <TextPrimary style={{ fontSize: 22 }} >
                                    Wallets
                    </TextPrimary>
                                <TextSecondary style={{ fontSize: 18 }}  >
                                    Multi-Coin Wallet Quan
                    </TextSecondary>
                            </View>
                        </View>
                        <View style={{ justifyContent: "center" }}>
                            <TextPrimary style={{ fontSize: 22, margin: 10 }} >
                                <SimpleLineIcons size={20} name="arrow-right" />
                            </TextPrimary>
                        </View>
                    </View>
                </TouchableOpacity> */}
                <View style={{ flexDirection: "row", justifyContent: "space-between", borderBottomWidth: 0.5 }}>
                    <View style={{ flexDirection: "row" }}>
                        <View style={{ justifyContent: "center", margin: 10 }}>
                            <View style={{
                                justifyContent: "center", alignItems: "center",
                                height: 50, width: 50, backgroundColor: "#000", borderRadius: 10
                            }}>
                                <Ionicons name="moon" size={30} color="#fff" />
                            </View>
                        </View>
                        <View style={{ justifyContent: "center" }}>
                            <TextPrimary style={{ fontSize: 22 }} >
                                Dark Mode
                    </TextPrimary>
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
                {/* <TouchableOpacity onPress={() => navigation.navigate('Setting-InviteFriend')}>
                    <View style={{ flexDirection: "row", justifyContent: "space-between", borderBottomWidth: 0.5 }}>
                        <View style={{ flexDirection: "row" }}>
                            <View style={{ justifyContent: "center", margin: 10 }}>
                                <View style={{
                                    justifyContent: "center", alignItems: "center",
                                    height: 50, width: 50, backgroundColor: "#FFC000", borderRadius: 10
                                }}>
                                    <AntDesign name="gift" size={30} color="#fff" />
                                </View>
                            </View>
                            <View style={{ justifyContent: "center" }}>
                                <TextPrimary style={{ fontSize: 22 }} >
                                    Invite a Friend
                    </TextPrimary>
                                <TextSecondary style={{ fontSize: 18 }}  >
                                    Get TWT Tokens
                    </TextSecondary>
                            </View>
                        </View>
                        <View style={{ justifyContent: "center" }}>
                            <TextPrimary style={{ fontSize: 22, margin: 10 }} >
                                <SimpleLineIcons size={20} name="arrow-right" />
                            </TextPrimary>
                        </View>
                    </View>
                </TouchableOpacity> */}
                {/* <TouchableOpacity onPress={() => navigation.navigate("Setting-Security")}>
                    <View style={{ flexDirection: "row", justifyContent: "space-between", borderBottomWidth: 0.5 }}>
                        <View style={{ flexDirection: "row" }}>
                            <View style={{ justifyContent: "center", margin: 10 }}>
                                <View style={{
                                    justifyContent: "center", alignItems: "center",
                                    height: 50, width: 50, backgroundColor: "#8E8D94", borderRadius: 10
                                }}>
                                    <MaterialIcons name="security" size={30} color="#fff" />
                                </View>
                            </View>
                            <View style={{ justifyContent: "center" }}>
                                <TextPrimary style={{ fontSize: 22 }} >
                                    Security
                    </TextPrimary>
                            </View>
                        </View>
                        <View style={{ justifyContent: "center" }}>
                            <TextPrimary style={{ fontSize: 22, margin: 10 }} >
                                <SimpleLineIcons size={20} name="arrow-right" />
                            </TextPrimary>
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate("Setting-Notifications")}>
                    <View style={{ flexDirection: "row", justifyContent: "space-between", borderBottomWidth: 0.5 }}>
                        <View style={{ flexDirection: "row" }}>
                            <View style={{ justifyContent: "center", margin: 10 }}>
                                <View style={{
                                    justifyContent: "center", alignItems: "center",
                                    height: 50, width: 50, backgroundColor: "#FF3E2D", borderRadius: 10
                                }}>
                                    <Ionicons name="notifications" size={30} color="#FFF" />

                                </View>
                            </View>
                            <View style={{ justifyContent: "center" }}>
                                <TextPrimary style={{ fontSize: 22 }} >
                                    Notifications
                    </TextPrimary>
                            </View>
                        </View>
                        <View style={{ justifyContent: "center" }}>
                            <TextPrimary style={{ fontSize: 22, margin: 10 }} >
                                <SimpleLineIcons size={20} name="arrow-right" />
                            </TextPrimary>
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate("Setting-Preferences")}>
                    <View style={{ flexDirection: "row", justifyContent: "space-between", borderBottomWidth: 0.5 }}>
                        <View style={{ flexDirection: "row" }}>
                            <View style={{ justifyContent: "center", margin: 10 }}>
                                <View style={{
                                    justifyContent: "center", alignItems: "center",
                                    height: 50, width: 50, backgroundColor: "#32BEA6", borderRadius: 10
                                }}>
                                    <AntDesign name="setting" size={40} color="#fff" />
                                </View>
                            </View>
                            <View style={{ justifyContent: "center" }}>
                                <TextPrimary style={{ fontSize: 22 }} >
                                    Setting
                    </TextPrimary>
                            </View>
                        </View>
                        <View style={{ justifyContent: "center" }}>
                            <TextPrimary style={{ fontSize: 22, margin: 10 }} >
                                <SimpleLineIcons size={20} name="arrow-right" />
                            </TextPrimary>
                        </View>
                    </View>
                </TouchableOpacity>
                <View style={{ flexDirection: "row", justifyContent: "space-between", borderBottomWidth: 0.5 }}>
                    <View style={{ flexDirection: "row" }}>
                        <View style={{ justifyContent: "center", margin: 10 }}>
                            <View style={{
                                justifyContent: "center", alignItems: "center",
                                height: 50, width: 50, backgroundColor: "#3B99FC", borderRadius: 10
                            }}>
                                <Feather name="link" size={40} color="#fff" />
                            </View>
                        </View>
                        <View style={{ justifyContent: "center" }}>
                            <TextPrimary style={{ fontSize: 22 }} >
                                WalletConnect
                    </TextPrimary>
                        </View>
                    </View>
                    <View style={{ justifyContent: "center" }}>
                        <TextPrimary style={{ fontSize: 22, margin: 10 }} >
                            <SimpleLineIcons size={20} name="arrow-right" />
                        </TextPrimary>
                    </View>
                </View>
                <View style={{ margin: 10, paddingTop: 10, paddingBottom: 10 }}>
                    <TextSecondary style={{ fontWeight: "bold", fontSize: 20 }}>Join Community</TextSecondary>
                </View>
                <View style={{ flexDirection: "row", justifyContent: "space-between", borderBottomWidth: 0.5 }}>
                    <View style={{ flexDirection: "row" }}>
                        <View style={{ justifyContent: "center", margin: 10 }}>
                            <View style={{
                                justifyContent: "center", alignItems: "center",
                                height: 50, width: 50, backgroundColor: "#FE9306", borderRadius: 10
                            }}>
                                <AntDesign name="questioncircle" size={40} color="#fff" />
                            </View>
                        </View>
                        <View style={{ justifyContent: "center" }}>
                            <TextPrimary style={{ fontSize: 22 }} >
                                Help Center
                    </TextPrimary>
                        </View>
                    </View>
                    <View style={{ justifyContent: "center" }}>
                        <TextPrimary style={{ fontSize: 22, margin: 10 }} >
                            <SimpleLineIcons size={20} name="arrow-right" />
                        </TextPrimary>
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
                            <TextPrimary style={{ fontSize: 22 }} >
                                Twitter
                    </TextPrimary>
                        </View>
                    </View>
                    <View style={{ justifyContent: "center" }}>
                        <TextPrimary style={{ fontSize: 22, margin: 10 }} >
                            <SimpleLineIcons size={20} name="arrow-right" />
                        </TextPrimary>
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
                            <TextPrimary style={{ fontSize: 22 }} >
                                Telegram
                    </TextPrimary>
                        </View>
                    </View>
                    <View style={{ justifyContent: "center" }}>
                        <TextPrimary style={{ fontSize: 22, margin: 10 }} >
                            <SimpleLineIcons size={20} name="arrow-right" />
                        </TextPrimary>
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
                            <TextPrimary style={{ fontSize: 22 }} >
                                Facebook
                    </TextPrimary>
                        </View>
                    </View>
                    <View style={{ justifyContent: "center" }}>
                        <TextPrimary style={{ fontSize: 22, margin: 10 }} >
                            <SimpleLineIcons size={20} name="arrow-right" />
                        </TextPrimary>
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
                            <TextPrimary style={{ fontSize: 22 }} >
                                Reddit
                    </TextPrimary>
                        </View>
                    </View>
                    <View style={{ justifyContent: "center" }}>
                        <TextPrimary style={{ fontSize: 22, margin: 10 }} >
                            <SimpleLineIcons size={20} name="arrow-right" />
                        </TextPrimary>
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
                            <TextPrimary style={{ fontSize: 22 }} >
                                Youtube
                    </TextPrimary>
                        </View>
                    </View>
                    <View style={{ justifyContent: "center" }}>
                        <TextPrimary style={{ fontSize: 22, margin: 10 }} >
                            <SimpleLineIcons size={20} name="arrow-right" />
                        </TextPrimary>
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
                            <TextPrimary style={{ fontSize: 22 }} >
                                Make a suggestion
                    </TextPrimary>
                        </View>
                    </View>
                    <View style={{ justifyContent: "center" }}>
                        <TextPrimary style={{ fontSize: 22, margin: 10 }} >
                            <SimpleLineIcons size={20} name="arrow-right" />
                        </TextPrimary>
                    </View>
                </View>
                <TouchableOpacity onPress={() => navigation.navigate("About")}>
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
                                <TextPrimary style={{ fontSize: 22 }} >
                                    About
                    </TextPrimary>
                            </View>
                        </View>
                        <View style={{ justifyContent: "center" }}>
                            <TextPrimary style={{ fontSize: 22, margin: 10 }} >
                                <SimpleLineIcons size={20} name="arrow-right" />
                            </TextPrimary>
                        </View>
                    </View>
                </TouchableOpacity> */}
            </Container>
        </ScrollView >

    )
}


const Container = styled.View`
    background-color: ${(props) => props.theme.BACKGROUND_COLOR_PRIMARY};
`

const TextPrimary = styled.Text`
    color: ${(props) => props.theme.TEXT_COLOR_PRIMARY};
`
const TextSecondary = styled.Text`
    color: ${(props) => props.theme.TEXT_COLOR_SECONDARY};
`