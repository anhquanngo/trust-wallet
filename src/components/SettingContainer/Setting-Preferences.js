import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import styled from 'styled-components/native';

export function SettingPreferences({ navigation }) {
    return (
        <Container>
            <TouchableOpacity onPress={() => navigation.navigate('Preferences-Currency')}>
                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        borderBottomWidth: 0.5,
                    }}>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={{ justifyContent: 'center', margin: 10, height: 48 }}>
                            <View>
                                <TextPrimary style={{ fontSize: 16 }}>Currency</TextPrimary>
                            </View>
                            <View>
                                <TextSecondary style={{ fontSize: 14 }}>USD</TextSecondary>
                            </View>
                        </View>
                    </View>
                    <View style={{ justifyContent: 'center' }}>
                        <TextSecondary style={{ fontSize: 22, margin: 10 }}>
                            <SimpleLineIcons size={20} name="arrow-right" />
                        </TextSecondary>
                    </View>
                </View>
            </TouchableOpacity>

            {/* <TouchableOpacity onPress={() => navigation.navigate('DAppBrowser')}>
                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        borderBottomWidth: 0.5,
                    }}>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={{ justifyContent: 'center', margin: 10, height: 48 }}>
                            <View>
                                <Text style={{ fontSize: 16 }}>DApp Browser</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{ justifyContent: 'center' }}>
                        <Text style={{ fontSize: 22, margin: 10 }}>
                            <SimpleLineIcons size={20} name="arrow-right" />
                        </Text>
                    </View>
                </View>
            </TouchableOpacity> */}
        </Container>
    );
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