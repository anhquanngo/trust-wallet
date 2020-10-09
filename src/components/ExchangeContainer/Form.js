import React from 'react'
import { View, Text, Button, TextInput, Animated, TouchableOpacity } from 'react-native'
import styled from 'styled-components/native';

export const Form = () => {
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
        <Container>
            <TextHeading>MITH / BNB</TextHeading>
            <View style={{ margin: 15 }}>
                <View style={{ flexDirection: "row", justifyContent: "center", paddingBottom: 15 }}>
                    <TabExContainer >
                        <TabContainer>
                            <AnimatedStyle style={{ transform: [{ translateX }] }} />
                            <ButtonTabStyle
                                onLayout={(event) => setTabOne(event.nativeEvent.layout.x)}
                                onPress={() => {
                                    handleSlide(xTabOne, 0);
                                    // setActive(0);
                                }}>
                                <TextThirdary >Buy</TextThirdary>
                            </ButtonTabStyle>
                            <ButtonTabStyle
                                onLayout={(event) => setTabTwo(event.nativeEvent.layout.x)}
                                onPress={() => {
                                    handleSlide(xTabTwo, 1);
                                    // setActive(0);
                                }}
                            ><TextThirdary >Sell</TextThirdary>
                            </ButtonTabStyle>
                        </TabContainer>
                    </TabExContainer>
                </View>
                <TextInputStyle placeholder="Price BNB" />
                <TextSecondary style={{ paddingTop: 10, paddingBottom: 10, fontSize: 20 }}>~đ128.67</TextSecondary>
                <TextInputStyle placeholder="Amount MITH" />
            </View>
            <View style={{ flexDirection: "row", justifyContent: "space-around", paddingBottom: 11 }}>
                <ButtonPercent style={{ backgroundColor: "#4867AA20", justifyContent: "center", alignItems: "center", width: 40, height: 30, borderRadius: 5 }}
                ><TextThirdary>25%</TextThirdary>
                </ButtonPercent>
                <ButtonPercent style={{ backgroundColor: "#4867AA20", justifyContent: "center", alignItems: "center", width: 40, height: 30, borderRadius: 5 }}
                ><TextThirdary>50%</TextThirdary>
                </ButtonPercent>
                <ButtonPercent style={{ backgroundColor: "#4867AA20", justifyContent: "center", alignItems: "center", width: 40, height: 30, borderRadius: 5 }}
                ><TextThirdary>75%</TextThirdary>
                </ButtonPercent>
                <ButtonPercent style={{ backgroundColor: "#4867AA20", justifyContent: "center", alignItems: "center", width: 40, height: 30, borderRadius: 5 }}
                ><TextThirdary>100%</TextThirdary>
                </ButtonPercent>
            </View>
            <View style={{ flexDirection: "row", justifyContent: "space-between", marginLeft: 15, marginRight: 15, paddingTop: 10 }}>
                <TextSecondary>Balance</TextSecondary>
                <TextSecondary>0 BNB</TextSecondary>
            </View>
            <View style={{ flexDirection: "row", justifyContent: "space-between", marginLeft: 15, marginRight: 15, paddingTop: 10 }}>
                <TextSecondary>Balance</TextSecondary>
                <TextSecondary>0 BNB</TextSecondary>
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


        </Container >
    )
}

const Container = styled.View`
    background-color: ${(props) => props.theme.BACKGROUND_COLOR_PRIMARY};
`
const TextHeading = styled.Text`
    color:  ${(props) => props.theme.TEXT_COLOR_PRIMARY};
    font-size: 24;
    margin-left: 10;
    padding-top: 5;
`
const TextPrimary = styled.Text`
    color:  ${(props) => props.theme.TEXT_COLOR_PRIMARY};
`
const TextSecondary = styled.Text`
    color:  ${(props) => props.theme.TEXT_COLOR_SECONDARY};
`

const TabExContainer = styled.View`
    flex-direction: row;
    flex: 1;
    border-radius: 10px;
    padding-top: 2px;
    padding-right: 3;
    padding-bottom: 3;
    padding-left: 3;
    background-color: ${(props) => props.theme.BACKGROUND_COLOR_PRIMARY};
`

const TabContainer = styled.View`
  flex: 1;
  position: relative;
  flex-direction: row;
  height: 35;
  border-radius: 10px;
  background-color: ${(props) => props.theme.BACKGROUND_COLOR_PRIMARY};
`;

const AnimatedStyle = styled(Animated.View)`
  position: absolute;
  width: 50%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: ${(props) => props.theme.BACKGROUND_COLOR_SECONDARY};
  border-radius: 10px;
`;

const ButtonPercent = styled.TouchableOpacity`
    background-color: ${(props) => props.theme.BACKGROUND_COLOR_SECONDARY};
    justify-content: center;
    align-items: center;
    width: 40; 
    height: 30;
    border-radius: 5;
`
const ButtonTabStyle = styled.TouchableOpacity`
    flex: 1;
    justify-content: center;
    align-items: center;
    width: 40;
    height: 35;
    border-radius: 5;
`

const TextThirdary = styled.Text`
    color: ${(props) => props.theme.TEXT_COLOR_THIRDARY};
`
const TextInputStyle = styled.TextInput`
    height: 50;
    border-color: ${(props) => props.theme.BACKGROUND_COLOR_PRIMARY};
    border-radius: 10px;
    border-width: 0.5;
    background-color: #E9E9EB;
`