import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign';
import styled from 'styled-components/native';

export const SettingAbout = () => {
    return (
        <Container>
            <TouchableOpacity>
                <View style={{ flexDirection: "row", justifyContent: "space-between", borderBottomWidth: 0.5 }}>
                    <View style={{ flexDirection: "row" }}>
                        <View style={{ justifyContent: "center", margin: 10 }}>
                            <TextPrimary style={{ fontSize: 22 }} >
                                Chính sách bảo mật
                    </TextPrimary>
                        </View>
                    </View>
                    <View style={{ justifyContent: "center" }}>
                        <TextPrimary style={{ fontSize: 22, margin: 10 }} >
                            <IconStyle size={20} color="#3B99FC" name="right" />
                        </TextPrimary>
                    </View>
                </View>
            </TouchableOpacity>
            <TouchableOpacity>
                <View style={{ flexDirection: "row", justifyContent: "space-between", borderBottomWidth: 0.5 }}>
                    <View style={{ flexDirection: "row" }}>
                        <View style={{ justifyContent: "center", margin: 10 }}>
                            <TextPrimary style={{ fontSize: 22 }} >
                                Các điều khoản dịch vụ
                    </TextPrimary>
                        </View>
                    </View>
                    <View style={{ justifyContent: "center" }}>
                        <TextPrimary style={{ fontSize: 22, margin: 10 }} >
                            <IconStyle size={20} color="#3B99FC" name="right" />
                        </TextPrimary>
                    </View>
                </View>
            </TouchableOpacity>
            <TouchableOpacity>
                <View style={{ flexDirection: "row", justifyContent: "space-between", borderBottomWidth: 0.5 }}>
                    <View style={{ flexDirection: "row" }}>
                        <View style={{ justifyContent: "center", margin: 10 }}>
                            <TextPrimary style={{ fontSize: 22 }} >
                                Support
                    </TextPrimary>
                        </View>
                    </View>
                    <View style={{ justifyContent: "center" }}>
                        <TextPrimary style={{ fontSize: 22, margin: 10 }} >
                            <IconStyle size={20} color="#3B99FC" name="right" />
                        </TextPrimary>
                    </View>
                </View>
            </TouchableOpacity>
            <TouchableOpacity>
                <View style={{ flexDirection: "row", justifyContent: "space-between", borderBottomWidth: 0.5 }}>
                    <View style={{ flexDirection: "row" }}>
                        <View style={{ justifyContent: "center", margin: 10 }}>
                            <TextPrimary style={{ fontSize: 22 }} >
                                Gợi ý chúng tôi
                    </TextPrimary>
                        </View>
                    </View>
                    <View style={{ justifyContent: "center" }}>
                        <TextPrimary style={{ fontSize: 22, margin: 10 }} >
                            <IconStyle size={20} color="#3B99FC" name="right" />
                        </TextPrimary>
                    </View>
                </View>
            </TouchableOpacity>
            <TouchableOpacity>
                <View style={{ flexDirection: "row", justifyContent: "space-between", borderBottomWidth: 0.5 }}>
                    <View style={{ flexDirection: "row" }}>
                        <View style={{ justifyContent: "center", margin: 10 }}>
                            <TextPrimary style={{ fontSize: 22 }} >
                                Phiên bản
                    </TextPrimary>
                        </View>
                    </View>
                    <View style={{ justifyContent: "center" }}>
                        <TextPrimary style={{ fontSize: 22, margin: 10 }} >
                            <IconStyle size={20} color="#3B99FC" name="right" />
                        </TextPrimary>
                    </View>
                </View>
            </TouchableOpacity>

        </Container>
    )
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

const IconStyle = styled(AntDesign)`
  color: ${(props) => props.theme.TEXT_COLOR_SECONDARY};
`;