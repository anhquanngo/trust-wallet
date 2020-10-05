import React, { useState } from 'react'
import { View, Text, Switch } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';

export const DetailStack = () => {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    return <View>
        <View style={{ flexDirection: "row", justifyContent: "space-between", borderBottomWidth: 0.5 }}>
            <View style={{ flexDirection: "row" }}>
                <View style={{ justifyContent: "center", margin: 10 }}>
                    <View style={{
                        justifyContent: "center", alignItems: "center",
                        height: 50, width: 50, backgroundColor: "#000", borderRadius: 25
                    }}>
                        <Ionicons name="moon" size={30} color="#fff" />
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
                        height: 50, width: 50, backgroundColor: "#000", borderRadius: 25
                    }}>
                        <Ionicons name="moon" size={30} color="#fff" />
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
                        height: 50, width: 50, backgroundColor: "#000", borderRadius: 25
                    }}>
                        <Ionicons name="moon" size={30} color="#fff" />
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
                        height: 50, width: 50, backgroundColor: "#000", borderRadius: 25
                    }}>
                        <Ionicons name="moon" size={30} color="#fff" />
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
                        height: 50, width: 50, backgroundColor: "#000", borderRadius: 25
                    }}>
                        <Ionicons name="moon" size={30} color="#fff" />
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
                        height: 50, width: 50, backgroundColor: "#000", borderRadius: 25
                    }}>
                        <Ionicons name="moon" size={30} color="#fff" />
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
                        height: 50, width: 50, backgroundColor: "#000", borderRadius: 25
                    }}>
                        <Ionicons name="moon" size={30} color="#fff" />
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
    </View>
}

