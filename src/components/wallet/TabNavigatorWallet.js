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


const { width } = Dimensions.get('window');

export default function TabNavigatorWallet({ setPositionTab }) {
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
  console.log(active);
  return (
    <React.Fragment>
      <View style={{ flex: 1, }}>
        <View
          style={{
            width: '90%',
            marginLeft: 'auto',
            marginRight: 'auto',
            padding: 3,
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
                width: '33.3%',
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
                // borderWidth: 1,
                // borderColor: '#007aff',
                // borderRadius: 4,
                // borderRightWidth: 0,
                // borderTopRightRadius: 0,
                // borderBottomRightRadius: 0,
              }}
              onLayout={(event) => {

                setTabOne(event.nativeEvent.layout.x)
              }}

              onPress={() => {
                handleSlide(xTabOne, 0);
                // setActive(0);
              }}>
              <Text
                style={{
                  color: active === 0 ? '#fff' : '#ABC3DC',
                }}>
                Tokens
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                // borderWidth: 1,
                // borderColor: '#007aff',
                // borderRadius: 4,
                // borderLeftWidth: 0,
                // borderTopLeftRadius: 0,
                // borderBottomLeftRadius: 0,
              }}
              onLayout={(event) => {
                console.log(event.nativeEvent.layout.x);
                setTabTwo(event.nativeEvent.layout.x)
              }}
              onPress={() => {
                handleSlide(xTabTwo, 1);
                // setActive(1);
              }}>
              <Text
                style={{
                  color: active === 1 ? '#fff' : '#ABC3DC',
                }}>
                Finance
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                // borderWidth: 1,
                // borderColor: '#007aff',
                // borderRadius: 4,
                // borderLeftWidth: 0,
                // borderTopLeftRadius: 0,
                // borderBottomLeftRadius: 0,
              }}
              onLayout={(event) => setTabThree(event.nativeEvent.layout.x)}
              onPress={() => {
                handleSlide(xTabThree, 2);
                // setActive(2);
              }}>
              <Text
                style={{
                  color: active === 2 ? '#fff' : '#ABC3DC',
                }}>
                Collect
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </React.Fragment>
  );
}

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
