import React from 'react';
import {View, Text, Button, Dimensions} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Ionicon from 'react-native-vector-icons/Ionicons';
import styled from 'styled-components/native';

const { width } = Dimensions.get("window");

const AuthencationContainer = styled.View``;

const AuthencationHeader = styled.View``;

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

`;

const ButtonStyle = styled.TouchableOpacity`
  background-color: ${(props) => (props.backgroud ? '#2185d3' : 'transparent')};
  width: ${(width * 2) / 3};
  align-items: center;
  margin-top: 20;
  padding-top: 10;
  padding-bottom: 10;
  border-radius: 10;
`;

const TextStyle = styled.Text`
  color: ${(props) => (props.color ? props.color : '#2185d3')};
  font-size: ${(props) => props.size};
  text-align: center;
  text-transform: ${(props) => (props.uppercase ? 'uppercase' : 'none')};
  font-weight: ${(props) => (props.bolder ? 'bold' : 'normal')};
`;

export const Authencation = ({content, navigation}) => {
  let words = content
    .trim()
    .split(/( ){1,}/gi)
    .filter((item) => item.trim() !== '');
  return (
    <React.Fragment>
      <AuthencationContainer>
        <AuthencationHeader>
          <TextStyle size={20}>Cụm từ phục hồi ví của bạn</TextStyle>
          <TextStyle size={16}>
            Viết xuống hoặc sao chép những cụm từ này theo đúng thứ tự và lưu
            chúng ở nơi an toàn
          </TextStyle>
        </AuthencationHeader>
        <AuthencationBody>
          {words.map((item, index) => (
            <TouchableOpacity key={index}>
              <View
                key={index}
                style={{
                  flexDirection: 'row',
                  marginRight: 5,
                  backgroundColor: '#ccc',
                  marginBottom: 10,
                  justifyContent: 'center',
                  paddingLeft: 10,
                  paddingRight: 10,
                }}>
                <Text style={{marginRight: 3}}>{index}</Text>
                <Text>{item}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </AuthencationBody>
        <AuthencationFooter>
          <Ionicon name="information-circle-outline" size={30} color="#0fe" />
          <Text>
            Không bao giờ chia sẻ cụm từ phục hồi với bất cứ ai, phải lưu trữ
            chúng an toàn và bí mật
          </Text>
        </AuthencationFooter>
        <ButtonStyle backgroud>
          <TextStyle size={14} uppercase bolder color='#fff'>
            Tiếp tục
          </TextStyle>
        </ButtonStyle>
      </AuthencationContainer>
    </React.Fragment>
  );
};

Authencation.defaultProps = {
  content:
    'Lorem Ipsum is simply        dummy text of the printing and typesetting industry',
};
