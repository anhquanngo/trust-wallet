import React from 'react'
import { View, Text, Button, TextInput, Animated, TouchableOpacity } from 'react-native'

export default function Form() {
    let [active, setActive] = React.useState(0);
    let [xTabOne, setTabOne] = React.useState(0);
    let [xTabTwo, setTabTwo] = React.useState(0);
    let [translateX, setTranslateX] = React.useState(new Animated.Value(0));
    const handleSlide = (type, param) => {
        Animated.spring(translateX, {
            toValue: type,
            duration: 100,
            useNativeDriver: true,
        }).start();
        setActive(param);
    };
    return (
        <View>
            <Text style={{ fontSize: 24, marginLeft: 10, paddingTop: 5 }}>MITH / BNB</Text>
            <View style={{ margin: 15 }}>
                <View style={{ flexDirection: "row", justifyContent: "center", paddingBottom: 15 }}>
                    <View style={{
                        flexDirection: "row",
                        flex: 1,
                        padding: 3,
                        borderRadius: 10,
                        backgroundColor: '#4867AA20',
                    }}>
                        <View
                            style={{
                                position: 'relative',
                                flexDirection: 'row',
                                height: 35,
                                borderRadius: 10,
                                backgroundColor: '#4867AA20',
                                flex: 1,
                            }}>
                            <Animated.View
                                style={{
                                    position: 'absolute',
                                    width: '50%',
                                    height: '100%',
                                    top: 0,
                                    left: 0,
                                    backgroundColor: '#3375BB',
                                    borderRadius: 10,
                                    transform: [
                                        {
                                            translateX,
                                        },
                                    ],
                                }}
                            />
                            <TouchableOpacity style={{
                                backgroundColor: "#4867AA20",
                                flex: 1,
                                justifyContent: "center",
                                alignItems: "center",
                                width: 40, height: 30,
                                borderRadius: 5
                            }}
                                onLayout={(event) => setTabOne(event.nativeEvent.layout.x)}
                                onPress={() => {
                                    handleSlide(xTabOne, 0);
                                    // setActive(0);
                                }}>
                                <Text style={{ color: "#fff" }}>Buy</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{
                                backgroundColor: "#4867AA20",
                                flex: 1,
                                justifyContent: "center",
                                alignItems: "center",
                                width: 40, height: 30,
                                borderRadius: 5,
                            }}
                                onLayout={(event) => setTabTwo(event.nativeEvent.layout.x)}
                                onPress={() => {
                                    handleSlide(xTabTwo, 1);
                                    // setActive(0);
                                }}


                            ><Text style={{ color: "#fff" }}>Sell</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <TextInput placeholder="Price BNB"
                    style={{ height: 50, borderColor: 'gray', borderWidth: 0.5 }}
                />
                <Text style={{ paddingTop: 10, paddingBottom: 10, fontSize: 20, color: 'gray' }}>~đ128.67</Text>
                <TextInput placeholder="Amount MITH"
                    style={{ height: 50, borderColor: 'gray', borderWidth: 0.5 }}
                />
            </View>
            <View style={{ flexDirection: "row", justifyContent: "space-around", paddingBottom: 10 }}>
                <TouchableOpacity style={{ backgroundColor: "#4867AA20", justifyContent: "center", alignItems: "center", width: 40, height: 30, borderRadius: 5 }}
                ><Text style={{ color: "#4C9FF7" }}>25%</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ backgroundColor: "#4867AA20", justifyContent: "center", alignItems: "center", width: 40, height: 30, borderRadius: 5 }}
                ><Text style={{ color: "#4C9FF7" }}>50%</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ backgroundColor: "#4867AA20", justifyContent: "center", alignItems: "center", width: 40, height: 30, borderRadius: 5 }}
                ><Text style={{ color: "#4C9FF7" }}>75%</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ backgroundColor: "#4867AA20", justifyContent: "center", alignItems: "center", width: 40, height: 30, borderRadius: 5 }}
                ><Text style={{ color: "#4C9FF7" }}>100%</Text>
                </TouchableOpacity>
            </View>
            <View style={{ flexDirection: "row", justifyContent: "space-between", marginLeft: 15, marginRight: 15, paddingTop: 10 }}>
                <Text>Balance</Text>
                <Text>0 BNB</Text>
            </View>
            <View style={{ flexDirection: "row", justifyContent: "space-between", marginLeft: 15, marginRight: 15, paddingTop: 10 }}>
                <Text>Balance</Text>
                <Text>0 BNB</Text>
            </View>
            {
                active == 0 ?
                    <View style={{ margin: 20 }}>
                        <TouchableOpacity style={{
                            backgroundColor: "#49A397",
                            justifyContent: "center",
                            alignItems: "center",
                            height: 50,
                            borderRadius: 5
                        }}><Text style={{ color: "#fff" }}>Buy MITH</Text></TouchableOpacity>
                    </View> : <View style={{ margin: 20 }}>
                        <TouchableOpacity style={{
                            backgroundColor: "#FF6C6C",
                            justifyContent: "center",
                            alignItems: "center",
                            height: 50,
                            borderRadius: 5
                        }} ><Text style={{ color: "#fff" }}>Sell MITH</Text></TouchableOpacity>
                    </View>
            }


        </View >
    )
}
