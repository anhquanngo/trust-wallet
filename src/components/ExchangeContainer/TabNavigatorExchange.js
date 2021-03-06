import React from 'react';
import {View, Text, TouchableOpacity, Animated, Dimensions} from 'react-native';
import styled from 'styled-components/native';

export const TabNavigatorExchange = ({setPositionTab}) => {
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
    setPositionTab(param);
  };
  return (
    <React.Fragment>
      <View style={{flex: 1}}>
        <TabNavigatorExchangeContainer>
          <TabContainer>
            <AnimatedStyle style={{transform: [{translateX}]}} />
            <TouchableOpacity
              style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
              }}
              onLayout={(event) => setTabOne(event.nativeEvent.layout.x)}
              onPress={() => {
                handleSlide(xTabOne, 0);
                // setActive(0);
              }}>
              <TextStyle active={active} param={0}>
                Swap
              </TextStyle>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
              }}
              onLayout={(event) => setTabTwo(event.nativeEvent.layout.x)}
              onPress={() => {
                handleSlide(xTabTwo, 1);
              }}>
              <TextStyle active={active} param={1}>
                Exchange
              </TextStyle>
            </TouchableOpacity>
          </TabContainer>
        </TabNavigatorExchangeContainer>
      </View>
    </React.Fragment>
  );
};

const TabNavigatorExchangeContainer = styled.View`
  width: 70%;
  margin-left: auto;
  margin-right: auto;
  border-radius: 10px;
  padding-top: 2px;
  padding-right: 3px;
  padding-bottom: 3px;
  padding-left: 3px;
  background-color: ${(props) => props.theme.BACKGROUND_COLOR_PRIMARY};
`;

const TabContainer = styled.View`
  position: relative;
  flex-direction: row;
  height: 35px;
  border-radius: 10px;
  background-color: ${(props) => props.theme.BACKGROUND_COLOR_PRIMARY};
`;

const AnimatedStyle = styled(Animated.View)`
  position: absolute;
  width: 50%;
  height: 100%;
  top: 0px;
  left: 0px;
  background-color: ${(props) => props.theme.BACKGROUND_COLOR_SECONDARY};
  border-radius: 10px;
`;

const TextStyle = styled.Text`
  color: ${(props) =>
    props.active == props.param
      ? props.theme.TEXT_COLOR_PRIMARY
      : props.theme.TEXT_COLOR_SECONDARY};
`;
