import React from 'react';
import {View, Text, Button} from 'react-native';
import Ionicon from 'react-native-vector-icons/Ionicons';

export default function Authencation({content}) {
console.log(content.split(/( )+/ig));
  return (
    <React.Fragment>
      <View>
        <View>
          <Text></Text>
        </View>
        <View>
          <Ionicon name="information-circle-outline" size={10} color="#00f" />
          <Text>
            Không bao giờ chia sẻ cụm từ phục hồi với bất cứ ai, phải lưu trữ
            chúng an toàn và bí mật
          </Text>
        </View>
        <View>
            <Button title="Tiếp tục"/>
        </View>
      </View>
    </React.Fragment>
  );
}

<ion-icon name="information-circle-outline"></ion-icon>;

Authencation.defaultProps = {
    content: "Lorem Ipsum is simply        dummy text of the printing and typesetting industry"
};
