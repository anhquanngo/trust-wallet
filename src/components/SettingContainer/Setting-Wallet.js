import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import styled from 'styled-components/native';

export const SettingWallet = ({ navigation }) => {
    return <React.Fragment>
        <Container >
            <View style={{ margin: 10 }}>
                <TextSecondary style={{ fontSize: 16, color: "#8F9CB8" }}>CÁC VI MULTI-COIN</TextSecondary>
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
                            <TextPrimary style={{ fontSize: 22 }} >
                                Wallets
                    </TextPrimary>
                            <TextSecondary style={{ fontSize: 18 }}  >
                                Multi-Coin Wallet Quan
                    </TextSecondary>
                        </View>
                    </View>
                    <View style={{ justifyContent: "center" }}>
                        <Text style={{ fontSize: 22, margin: 10 }} >
                            <AntDesign size={20} color="#3B99FC" name="infocirlceo" />
                        </Text>
                    </View>
                </View>
            </TouchableOpacity>
        </Container>
    </React.Fragment>
}


const Container = styled.View`
    height:100%;
    background-color: ${(props) => props.theme.BACKGROUND_COLOR_PRIMARY};
`

const TextPrimary = styled.Text`
    color: ${(props) => props.theme.TEXT_COLOR_PRIMARY};
`
const TextSecondary = styled.Text`
    color: ${(props) => props.theme.TEXT_COLOR_SECONDARY};
`