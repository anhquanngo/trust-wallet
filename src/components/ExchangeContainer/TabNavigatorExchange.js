import React from 'react';
import { View, Text, TouchableOpacity, Animated, Dimensions } from 'react-native';

export const TabNavigatorExchange = ({ setPositionTab }) => {
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
      <View style={{ flex: 1 }}>
        <View
          style={{
            width: '70%',
            marginLeft: 'auto',
            marginRight: 'auto',
            paddingTop: 3,
            paddingBottom: 3,
            paddingLeft: 3,
            paddingRight: 3,
            borderRadius: 10,
            backgroundColor: '#2664A5',
          }}>
          <View
            style={{
              position: 'relative',
              flexDirection: 'row',
              height: 35,
              borderRadius: 10,
              backgroundColor: '#2664A5',
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
              <Text
                style={{
                  color: active === 0 ? '#fff' : '#ABC3DC',
                }}>
                Swap
              </Text>
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
                // setActive(1);
              }}>
              <Text
                style={{
                  color: active === 1 ? '#fff' : '#ABC3DC',
                }}>
                Exchange
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </React.Fragment>
  );
}
