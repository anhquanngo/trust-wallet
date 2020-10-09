import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, Share } from 'react-native';
import styled from 'styled-components/native';

export function SettingInviteFriend() {
    const onShare = async () => {
        try {
            const result = await Share.share(
                {
                    message: 'Come on with me ',
                    uri: '',
                },
                {
                    dialogTitle: 'Invite Friends',
                },
            );
            if (result.action === Share.sharedAction) {
                if (result.activityType) {
                    // shared with activity type of result.activityType
                    alert('Share with' + result.activityType);
                } else {
                    // shared
                    alert('Share but not sure how');
                }
            } else if (result.action === Share.dismissedAction) {
                // dismissed
                alert('Dimensions');
            }
        } catch (error) {
            alert(error.message);
        }
    };

    return (
        <Container>
            <View
                style={{
                    alignItems: 'center',
                    height: 200,
                    marginTop: 75,
                }}>
                <View>
                    <Image
                        style={{ width: 80, height: 80 }}
                        source={{
                            uri: 'https://reactnative.dev/img/tiny_logo.png',
                        }}
                    />
                </View>
                <TextPrimary style={{ fontWeight: '400', marginTop: 18, fontSize: 22 }}>
                    Invite a Friend. Get TWT tokens.{' '}
                </TextPrimary>
                <TextSecondary
                    style={{
                        fontWeight: '200',
                        textAlign: 'center',
                        marginTop: 18,
                        fontSize: 16,
                    }}>
                    For each friend you invite that purchase $50+ in crypto, you'll both
                    125 TWT.
        </TextSecondary>
            </View>

            <View
                style={{
                    textAlign: 'center',
                    borderWidth: 0.1,
                    marginTop: 73,
                    marginLeft: 25,
                    width: 360,
                    height: 95,
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-around',
                    shadowColor: '#000',
                    shadowOffset: {
                        width: 0,
                        height: 1,
                    },
                    shadowOpacity: 0.5,

                    shadowRadius: 10,
                    elevation: 1.5,
                }}>
                <View style={{ flexDirection: 'column', alignItems: 'center' }}>
                    <TextPrimary>0</TextPrimary>
                    <TextSecondary>Invite</TextSecondary>
                </View>
                <View style={{ flexDirection: 'column', alignItems: 'center' }}>
                    <TextPrimary>0</TextPrimary>
                    <TextSecondary>Completed</TextSecondary>
                </View>
            </View>
            <View
                style={{
                    alignItems: 'center',
                    height: 180,
                }}>
                <Text style={{ textAlign: 'center', marginTop: 120, fontSize: 14 }}>
                    You referral code is active. For each friend you invite that purchase
                    $50+ in crypto, you'll both 125 TWT.
        </Text>
            </View>

            <TouchableOpacity
                style={{
                    marginLeft: 25,
                    width: 360,
                    height: 50,
                    backgroundColor: '#3b60e9',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
                onPress={onShare}>
                <Text style={{ color: '#fff' }}>INVITE FRIENDS</Text>
            </TouchableOpacity>
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