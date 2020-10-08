import React, { useState } from 'react';
import { View, Text, Switch } from 'react-native';
import styled from 'styled-components/native';

export function SettingNotifications() {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
    return (
        <Container>
            <View
                style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                }}>
                <View style={{ flexDirection: 'row' }}>
                    <View style={{ justifyContent: 'center', margin: 10 }}></View>
                    <View style={{ justifyContent: 'center' }}>
                        <TextPrimary style={{ fontSize: 16 }}>Allow Push Notifications</TextPrimary>
                    </View>
                </View>
                <View style={{ justifyContent: 'center' }}>
                    <Text style={{ fontSize: 22, margin: 10 }}>
                        <Switch
                            trackColor={{ false: '#767577', true: '#81b0ff' }}
                            thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
                            ios_backgroundColor="#3e3e3e"
                            onValueChange={toggleSwitch}
                            value={isEnabled}
                        />
                    </Text>
                </View>
            </View>
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