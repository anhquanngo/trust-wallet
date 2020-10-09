import React from 'react';
import { View, Text, Button, Dimensions } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Ionicon from 'react-native-vector-icons/Ionicons';
import styled from 'styled-components/native';
import { connect, useSelector, useDispatch } from 'react-redux';

import { getMnemonicStr } from '../redux/actions';

const { width } = Dimensions.get('window');

const AuthencationContainer = styled.View`
  /* background-color: #f00; */
  background-color: #1c1c27;
  height: 100%;
  justify-content: space-between;
`;

const AuthencationHeader = styled.View`
  margin-bottom: 20;
`;

const AuthencationBody = styled.View`
  width: 100%;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  padding-top: 20;
  padding-left: 20;
  padding-right: 20;
`;

const AuthencationFooter = styled.View`
  align-items: center;
  background-color: #ddd;
  width: 70%;
  padding-top: 5;
  padding-right: 10px;
  padding-bottom: 5;
  padding-left: 10;
  border-radius: 10px;
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

export const Authencation = ({ navigation }) => {
  let dispatch = useDispatch();
  let mnemonicStr = useSelector((state) => state.mnemonicStr);
  let words;
  console.log(mnemonicStr);

  React.useEffect(() => {
    dispatch(getMnemonicStr());
  }, []);

  if (typeof mnemonicStr == 'string') {
    words = mnemonicStr
      .trim()
      .split(/( ){1,}/gi)
      .filter((item) => item.trim() !== '');
  }
  return (
    <React.Fragment>
      <AuthencationContainer>
        <View>
          <AuthencationHeader>
            <TextStyle size={18} color="#fff">
              Cụm từ phục hồi ví của bạn
            </TextStyle>
            <TextStyle size={14} color="#A5A7AC">
              Viết xuống hoặc sao chép những cụm từ này theo đúng thứ tự và lưu
              chúng ở nơi an toàn
            </TextStyle>
          </AuthencationHeader>
          <AuthencationBody>
            {words &&
              words.map((item, index) => (
                <TouchableOpacity key={index}>
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
                    <Text style={{ marginRight: 3, color: '#A5A7AC' }}>
                      {index + 1}
                    </Text>
                    <TextStyle size={14} color="#fff" bolder>
                      {item}
                    </TextStyle>
                  </View>
                </TouchableOpacity>
              ))}
          </AuthencationBody>
        </View>
        <View style={{ alignItems: 'center', marginBottom: 10 }}>
          <AuthencationFooter>
            <Ionicon
              name="information-circle-outline"
              size={20}
              color="#2285D3"
            />
            <TextStyle size={16}>
              Không bao giờ chia sẻ cụm từ phục hồi với bất cứ ai, phải lưu trữ
              chúng an toàn và bí mật
            </TextStyle>
          </AuthencationFooter>
          <ButtonStyle
            backgroud
            onPress={() => navigation.navigate('ConfirmAuth', { words })}>
            <TextStyle size={14} uppercase bolder color="#fff">
              Tiếp tục
            </TextStyle>
          </ButtonStyle>
        </View>
      </AuthencationContainer>
    </React.Fragment>
  );
};

Authencation.defaultProps = {
  content:
    'Lorem Ipsum is simply        dummy text of the printing and typesetting industry',
};
