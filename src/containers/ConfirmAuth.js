import React from 'react';
import {View, Text, Alert, Dimensions} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Ionicon from 'react-native-vector-icons/Ionicons';

import styled from 'styled-components/native';

const {width} = Dimensions.get('window');

const ConfirmContainer = styled.View`
  background-color: #1c1c27;
  height: 100%;
  justify-content: space-between;
`;

const ConfirmHeader = styled.View`
  margin-bottom: 20;
`;

const ConfirmCheck = styled.View`
  width: 100%;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  padding-top: 20;
  padding-left: 20;
  padding-right: 20;
`;

const ConfirmBody = styled.View`
  width: 100%;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  padding-top: 20;
  padding-left: 20;
  padding-right: 20;
`;

const ButtonStyle = styled.TouchableOpacity`
  background-color: ${(props) => (props.backgroud ? '#2185d3' : 'transparent')};
  width: ${(width * 2) / 3};
  align-items: center;
  margin-top: 10;
  padding-top: 5;
  padding-bottom: 5;
  border-radius: 10;
`;

const TextStyle = styled.Text`
  color: ${(props) => (props.color ? props.color : '#2185d3')};
  font-size: ${(props) => props.size};
  text-align: center;
  text-transform: ${(props) => (props.uppercase ? 'uppercase' : 'none')};
  font-weight: ${(props) => (props.bolder ? 'bold' : 'normal')};
`;

export const ConfirmAuth = ({route}) => {
  let {words} = route.params;
  let newWords = [...words].sort(() => 0.5 - Math.random());
  let [randomStr, setRandomStr] = React.useState([...newWords]);
  let [confirmStr, setConfirmStr] = React.useState([]);

  console.log({words, confirmStr});

  return (
    <React.Fragment>
      <ConfirmContainer>
        <View>
          <ConfirmHeader>
            <TextStyle size={18} color="#fff">
              Cụm từ phục hồi ví của bạn
            </TextStyle>
            <TextStyle size={14} color="#A5A7AC">
              Viết xuống hoặc sao chép những cụm từ này theo đúng thứ tự và lưu
              chúng ở nơi an toàn
            </TextStyle>
          </ConfirmHeader>
          {confirmStr && (
            <View>
              <ConfirmCheck>
                {confirmStr.map((item, index) => (
                  <View
                    key={index}
                    style={{
                      flexDirection: 'row',
                      marginRight: 7,
                      backgroundColor: '#363A45',
                      marginBottom: 10,
                      justifyContent: 'center',
                      paddingLeft: 10,
                      paddingRight: 10,
                      borderRadius: 3,
                    }}>
                    <Text style={{marginRight: 3, color: '#A5A7AC'}}>
                      {index + 1}
                    </Text>
                    <TextStyle size={14} color="#fff" bolder>
                      {item}
                    </TextStyle>
                  </View>
                ))}
              </ConfirmCheck>
            </View>
          )}
        </View>
        <View>
          {randomStr && (
            <ConfirmBody>
              {randomStr.map((item, index) => (
                <TouchableOpacity
                  key={index}
                  onPress={() =>
                    setConfirmStr((prevConfirm) => {
                      setRandomStr((prevOrigin) => {
                        prevOrigin.splice(index, 1);
                        return prevOrigin;
                      });
                      return [...prevConfirm, item];
                    })
                  }>
                  <View
                    key={index}
                    style={{
                      flexDirection: 'row',
                      marginRight: 7,
                      backgroundColor: '#363A45',
                      marginBottom: 10,
                      justifyContent: 'center',
                      paddingLeft: 10,
                      paddingRight: 10,
                      borderRadius: 3,
                    }}>
                    <TextStyle size={14} color="#fff" bolder>
                      {item}
                    </TextStyle>
                  </View>
                </TouchableOpacity>
              ))}
            </ConfirmBody>
          )}
          <View style={{alignItems: 'center', marginBottom: 10}}>
            <ButtonStyle
              backgroud
              onPress={() => {
                if (words.join('') === confirmStr.join('')) {
                  Alert.alert('Bạn đã check đúng');
                } else {
                  Alert.alert('Bạn đã check sai');
                }
              }}>
              <TextStyle size={14} uppercase bolder color="#fff">
                Tiếp tục
              </TextStyle>
            </ButtonStyle>
            <ButtonStyle
              backgroud
              onPress={() => {
                setRandomStr([...newWords]);
                setConfirmStr([]);
              }}>
              <TextStyle size={14} uppercase bolder color="#fff">
                Nhập lại
              </TextStyle>
            </ButtonStyle>
          </View>
        </View>
      </ConfirmContainer>
    </React.Fragment>
  );
};
