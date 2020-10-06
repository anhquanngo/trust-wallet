import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Animated,
  ScrollView,
  Image,
  Dimensions,
} from 'react-native';
import styled from 'styled-components/native';

const {width} = Dimensions.get('window');

export const TabNavigatorWallet = ({setPositionTab}) => {
  let [active, setActive] = React.useState(0);
  let [xTabOne, setTabOne] = React.useState(0);
  let [xTabTwo, setTabTwo] = React.useState(0);
  let [xTabThree, setTabThree] = React.useState(0);
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
        <TabNavigatorWalletContainer>
          <TabContainer>
            <AnimatedStyle
              style={{
                transform: [{translateX}],
              }}
            />
            <TouchableOpacity
              style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
              }}
              onLayout={(event) => {
                setTabOne(event.nativeEvent.layout.x);
              }}
              onPress={() => {
                handleSlide(xTabOne, 0);
              }}>
              <TextStyle active={active} param={0}>
                Tokens
              </TextStyle>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
              }}
              onLayout={(event) => {
                console.log(event.nativeEvent.layout.x);
                setTabTwo(event.nativeEvent.layout.x);
              }}
              onPress={() => {
                handleSlide(xTabTwo, 1);
              }}>
              <TextStyle active={active} param={1}>
                Finance
              </TextStyle>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
              }}
              onLayout={(event) => setTabThree(event.nativeEvent.layout.x)}
              onPress={() => {
                handleSlide(xTabThree, 2);
              }}>
              <TextStyle active={active} param={2}>
                Collect
              </TextStyle>
            </TouchableOpacity>
          </TabContainer>
        </TabNavigatorWalletContainer>
      </View>
    </React.Fragment>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 70,
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#3375BB',
  },
});

const TabNavigatorWalletContainer = styled.View`
  width: 90%;
  margin-left: auto;
  margin-right: auto;
  border-radius: 10;
  padding-top: 2;
  padding-right: 3;
  padding-bottom: 3;
  padding-left: 3;
  background-color: ${(props) => props.theme.BACKGROUND_COLOR_PRIMARY};
`;

const TabContainer = styled.View`
  position: relative;
  flex-direction: row;
  height: 35;
  border-radius: 10;
  background-color: ${(props) => props.theme.BACKGROUND_COLOR_PRIMARY};
`;

const AnimatedStyle = styled(Animated.View)`
  position: absolute;
  width: 33.3%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: ${(props) => props.theme.BACKGROUND_COLOR_SECONDARY};
  border-radius: 10;
`;

const TextStyle = styled.Text`
  color: ${(props) =>
    props.active == props.param
      ? props.theme.TEXT_COLOR_PRIMARY
      : props.theme.TEXT_COLOR_SECONDARY};
`;
