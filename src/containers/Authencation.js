import React from 'react';
import {View, Text, Button, Alert} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Ionicon from 'react-native-vector-icons/Ionicons';

export default function Authencation({content, navigation}) {
  let words = content
    .trim()
    .split(/( ){1,}/gi)
    .filter((item) => item.trim() !== '');
  return (
    <React.Fragment>
      <View>
        <View
          style={{
            width: '100%',
            flexWrap: 'wrap',
            flexDirection: 'row',
            justifyContent: 'center',
            paddingTop: 20,
            paddingLeft: 20,
            paddingRight: 20,
          }}>
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
        </View>
        <View>
          <Ionicon name="information-circle-outline" size={30} color="#0fe" />
          <Text>
            Không bao giờ chia sẻ cụm từ phục hồi với bất cứ ai, phải lưu trữ
            chúng an toàn và bí mật
          </Text>
        </View>
        <View>
          <Button
            title="Tiếp tục"
            onPress={() => navigation.navigate('ConfirmAuth', {words: words})}
          />
        </View>
      </View>
    </React.Fragment>
  );
}

Authencation.defaultProps = {
  content:
    'Lorem Ipsum is simply        dummy text of the printing and typesetting industry',
};
