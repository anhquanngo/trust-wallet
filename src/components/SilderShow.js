import React from 'react';
import {View, Image, Text, StyleSheet, Button} from 'react-native';
import Ionicon from 'react-native-vector-icons/Ionicons';

export const SliderShow = ({lists, navigation}) => {
  let [state, setState] = React.useState(0);
  React.useEffect(() => {
    let counter = setInterval(() => {
      setState((prevState) => {
        if (prevState == lists.length - 1) return 0;
        return prevState + 1;
      });
    }, 2000);
    return () => clearInterval(counter);
  });
  return (
    <React.Fragment>
      <View>
        <View style={styles.container}>
          <Text>{lists[state].title}</Text>
          <Text>{lists[state].subTitle}</Text>
          <View style={{flexDirection: "row"}}>
            {lists &&
              lists.map((item, index) => (
                <View style={{marginRight: 5}} key={index}>
                  <Ionicon
                    name="radio-button-off"
                    size={10}
                    color={index == state ? '#333' : '#ccc'}
                  />
                </View>
              ))}
          </View>
        </View>
        <View style={{marginBottom: 5}}>
          <Button
            title="Tạo ví mới"
            onPress={() => navigation.navigate('Signup')}
          />
        </View>
        <View>
          <Button
            title="Tôi đã có ví"
            onPress={() => navigation.navigate('Login')}
          />
        </View>
      </View>
    </React.Fragment>
  );
}

SliderShow.defaultProps = {
  lists: [
    {
      image: '',
      title: 'Riêng tư và an toàn',
      subTitle: 'Khóa riêng không bao giờ rời khỏi thiết bị của bạn',
    },
    {
      image: '',
      title: 'Tất cả tài sản ở một nơi',
      subTitle: 'Xem và lưu trữ tài sản của bạn dễ dàng',
    },
    {
      image: '',
      title: 'Các tài sản thương mại',
      subTitle: 'Giao dịch tài sản của bạn một cách ẩn danh',
    },
    {
      image: '',
      title: 'Khám phá các ứng dụng phi tập trung',
      subTitle:
        'Kiếm tiền, khám phá, sử dụng, chi tiêu, giao dịch và nhiều hơn thế nữa',
    },
  ],
};

const styles = StyleSheet.create({
  container: {
    height: '70%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    height: 100,
    width: 100,
    backgroundColor: '#cccccc',
  },
  button: {
    marginBottom: 5,
  },
});
