import React from 'react';
import {
  View,
  Alert,
  StyleSheet,
  Image,
  Dimensions,
} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import Ionicon from 'react-native-vector-icons/Ionicons';
import styled from 'styled-components/native';

import sliderOne from '../assets/img/slider/sliderOne.png';

const { width } = Dimensions.get('window');

const SignupContainer = styled.View`
  background-color: #1c1f25;
  height: 100%;
  justify-content: space-between;
`;

const SignupHeader = styled.View`
  align-items: center;
`;

const SignupImage = styled.View`
  flex-grow: 1;
  height: 10;
  align-items: center;
`;

const ImageStyle = styled.Image`
  width: 50%;
  height: 50%;
`;

const ButtonContainer = styled.View`
  padding-bottom: 10%;
  align-items: center;
`;

const ButtonStyle = styled.TouchableOpacity`
  background-color: ${(props) => (props.backgroud ? '#2185d3' : 'transparent')};
  width: ${(width * 2) / 3};
  align-items: center;
  margin-top: 20;
  padding-top: 10;
  padding-bottom: 10px;
  border-radius: 10px;
`;

const TextStyle = styled.Text`
  color: ${(props) => (props.color ? props.color : '#2185d3')};
  font-size: ${(props) => props.size};
  text-align: center;
  text-transform: ${(props) => (props.uppercase ? 'uppercase' : 'none')};
  font-weight: ${(props) => (props.bolder ? 'bold' : 'normal')};
`;

export const Signup = ({ navigation }) => {
  let [selected, setSelected] = React.useState(false);
  return (
    <React.Fragment>
      <SignupContainer>
        <SignupHeader>
          <TextStyle size={16} bolder color="#fff">
            Sao lưu ví của bạn ngay bây giờ
          </TextStyle>
          <TextStyle size={14} color="#ccc">
            Trong bước tiếp theo, bạn sẽ thấy 12 từ cho phép bạn khôi phục ví
          </TextStyle>
        </SignupHeader>
        <View
          style={{
            flexGrow: 1,
            alignItems: 'center',
            // backgroundColor: '#000',
            justifyContent: 'center',
          }}>
          <Image
            source={sliderOne}
            style={{
              width: '50%',
              height: '50%',
              opacity: 0.8,
            }}
          />
          <View
            style={{
              ...StyleSheet.absoluteFill,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Ionicon
              name="reload-outline"
              size={40}
              color="#fff"
              style={{
                backgroundColor: '#C2753D',
                borderRadius: 50,
                padding: 10,
                fontWeight: 'bold',
                opacity: 0.9,
              }}
            />
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <View>
            <CheckBox
              value={selected}
              onValueChange={setSelected}
              tintColors={{ true: '#137AC7', false: '#137AC7' }}
            />
          </View>
          <View>
            <TextStyle size={14}>
              Tôi hiểu rằng nếu tôi mất cụm từ khôi phục, tôi sẽ không thể truy
              cập vào ví của mình
            </TextStyle>
          </View>
        </View>
        <ButtonContainer>
          <ButtonStyle backgroud
            onPress={() => selected ? navigation.navigate('Authencation') : Alert.alert("Vui lòng chấp nhận điều khoản.")}>
            <TextStyle size={14} uppercase bolder color='#fff'>
              Tiếp tục
          </TextStyle>
          </ButtonStyle>
        </ButtonContainer>
      </SignupContainer>
    </React.Fragment>
  );
};
