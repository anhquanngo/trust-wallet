import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign';

export default function SettingAbout() {
    return (
        <View>
            <TouchableOpacity>
                <View style={{ flexDirection: "row", justifyContent: "space-between", borderBottomWidth: 0.5 }}>
                    <View style={{ flexDirection: "row" }}>
                        <View style={{ justifyContent: "center", margin: 10 }}>
                            <Text style={{ fontSize: 22 }} >
                                Chính sách bảo mật
                    </Text>
                        </View>
                    </View>
                    <View style={{ justifyContent: "center" }}>
                        <Text style={{ fontSize: 22, margin: 10 }} >
                            <AntDesign size={20} color="#3B99FC" name="right" />
                        </Text>
                    </View>
                </View>
            </TouchableOpacity>
            <TouchableOpacity>
                <View style={{ flexDirection: "row", justifyContent: "space-between", borderBottomWidth: 0.5 }}>
                    <View style={{ flexDirection: "row" }}>
                        <View style={{ justifyContent: "center", margin: 10 }}>
                            <Text style={{ fontSize: 22 }} >
                                Các điều khoản dịch vụ
                    </Text>
                        </View>
                    </View>
                    <View style={{ justifyContent: "center" }}>
                        <Text style={{ fontSize: 22, margin: 10 }} >
                            <AntDesign size={20} color="#3B99FC" name="right" />
                        </Text>
                    </View>
                </View>
            </TouchableOpacity>
            <TouchableOpacity>
                <View style={{ flexDirection: "row", justifyContent: "space-between", borderBottomWidth: 0.5 }}>
                    <View style={{ flexDirection: "row" }}>
                        <View style={{ justifyContent: "center", margin: 10 }}>
                            <Text style={{ fontSize: 22 }} >
                                Support
                    </Text>
                        </View>
                    </View>
                    <View style={{ justifyContent: "center" }}>
                        <Text style={{ fontSize: 22, margin: 10 }} >
                            <AntDesign size={20} color="#3B99FC" name="right" />
                        </Text>
                    </View>
                </View>
            </TouchableOpacity>
            <TouchableOpacity>
                <View style={{ flexDirection: "row", justifyContent: "space-between", borderBottomWidth: 0.5 }}>
                    <View style={{ flexDirection: "row" }}>
                        <View style={{ justifyContent: "center", margin: 10 }}>
                            <Text style={{ fontSize: 22 }} >
                                Gợi ý chúng tôi
                    </Text>
                        </View>
                    </View>
                    <View style={{ justifyContent: "center" }}>
                        <Text style={{ fontSize: 22, margin: 10 }} >
                            <AntDesign size={20} color="#3B99FC" name="right" />
                        </Text>
                    </View>
                </View>
            </TouchableOpacity>
            <TouchableOpacity>
                <View style={{ flexDirection: "row", justifyContent: "space-between", borderBottomWidth: 0.5 }}>
                    <View style={{ flexDirection: "row" }}>
                        <View style={{ justifyContent: "center", margin: 10 }}>
                            <Text style={{ fontSize: 22 }} >
                                Phiên bản
                    </Text>
                        </View>
                    </View>
                    <View style={{ justifyContent: "center" }}>
                        <Text style={{ fontSize: 22, margin: 10 }} >
                            <AntDesign size={20} color="#3B99FC" name="right" />
                        </Text>
                    </View>
                </View>
            </TouchableOpacity>

        </View>
    )
}
