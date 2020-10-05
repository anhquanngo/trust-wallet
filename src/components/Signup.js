import React from 'react';
import {View, Text, Button, Alert} from 'react-native';
import CheckBox from '@react-native-community/checkbox';

export const Signup = ({navigation}) => {
  let [selected, setSelected] = React.useState(false);
  console.log(selected);
  return (
    <React.Fragment>
      <View>
        <View>
          <Text>Sao lưu ví của bạn ngay bây giờ</Text>
          <Text>
            Trong bước tiếp theo, bạn sẽ thấy 12 từ cho phép bạn khôi phục ví
          </Text>
        </View>
        <View style={{marginTop: 100}}>
          <View>
            <CheckBox value={selected} onValueChange={setSelected} />
          </View>
          <View>
            <Text>
              Tôi hiểu rằng nếu tôi mất cụm từ khôi phục, tôi sẽ không thể truy
              cập vào ví của mình
            </Text>
          </View>
        </View>
        <View>
          {selected ? (
            <Button
              title="Tiếp tục"
              onPress={() => navigation.navigate('Authencation')}
            />
          ) : (
            <Button
              title="Tiếp tục"
              onPress={() => Alert.alert('Vui lòng đồng ý với điều khoản.')}
            />
          )}
        </View>
      </View>
    </React.Fragment>
  );
}
