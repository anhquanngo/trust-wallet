import React from 'react';
import {View, Text, Button} from 'react-native';
import Ionicon from 'react-native-vector-icons/Ionicons';

export default function Authencation({content, navigation}) {
  let words = content
    .trim()
    .split(/( ){1,}/gi)
    .filter((item) => item.trim() !== '');
  console.log(words);
  return (
    <React.Fragment>
      <View>
        <View style={{width: "100%", backgroundColor: "#00f", flexWrap: "wrap"}}>
          {words.map((item, index) => (
            <View key={index} style={{flexDirection: "row", marginRight: 5, backgroundColor: "#ccc", width: 100}}>
              <Text>{index}</Text>
              <Text>{item}</Text>
            </View>
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
            onPress={() => navigation.navigate('ConfirmAuth', {words})}
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
