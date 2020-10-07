import React from 'react';
import {View, Dimensions} from 'react-native';
import Ionicon from 'react-native-vector-icons/Ionicons';
import styled from 'styled-components/native';

import sliderOne from '../assets/img/slider/sliderOne.png';

const {width} = Dimensions.get('window');

const SliderShowContainer = styled.View`
  background-color: #1c1f25;
  height: 100%;
  justify-content: space-between;
`;

const SliderContainer = styled.View`
  height: 70%;
  width: 100%;
  justify-content: space-between;
`;

const SliderImage = styled.View`
  flex-basis: 10;
  flex-grow: 1;
  align-items: center;
  justify-content: center;
`;

const ImageStyle = styled.Image`
  width: 50%;
  height: 50%;
  opacity: 0.8
`;

const SliderBody = styled.View`
  align-items: center;
  height: 20%;
  justify-content: space-between;
`;

const TextStyle = styled.Text`
  color: ${(props) => (props.color ? '#2185d3' : '#fff')};
  font-size: ${(props) => props.size};
  text-align: center;
  text-transform: ${(props) => (props.uppercase ? 'uppercase' : 'none')};
  font-weight: ${(props) => (props.bolder ? 'bold' : 'normal')};
`;

const ButtonContainer = styled.View`
  padding-bottom: 10%;
  align-items: center;
`;

const ButtonStyle = styled.TouchableOpacity`
  background-color: ${(props) => (props.backgroud ? '#2185d3' : 'transparent')};
  width: ${(width * 2) / 3};
  align-items: center;
  padding-top: 10;
  padding-bottom: 10;
  border-radius: 10;
`;

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
      <SliderShowContainer>
        <SliderContainer>
          <SliderImage>
            <ImageStyle source={sliderOne} />
          </SliderImage>
          <SliderBody>
            <View>
              <TextStyle size={20}>{lists[state].title}</TextStyle>
              <TextStyle size={14}>{lists[state].subTitle}</TextStyle>
            </View>
            <View style={{flexDirection: 'row'}}>
              {lists &&
                lists.map((item, index) => (
                  <View style={{marginRight: 5}} key={index}>
                    <Ionicon
                      name="ellipse-sharp"
                      size={10}
                      color={index == state ? '#666666aa' : '#ccc'}
                    />
                  </View>
                ))}
            </View>
          </SliderBody>
        </SliderContainer>
        <ButtonContainer>
          <View style={{marginBottom: 5}}>
            <ButtonStyle
              backgroud
              onPress={() => navigation.navigate('Signup')}>
              <TextStyle size={14} uppercase bolder>
                Tạo ví mới
              </TextStyle>
            </ButtonStyle>
          </View>
          <View>
            <ButtonStyle onPress={() => navigation.navigate('Login')}>
              <TextStyle size={14} color>
                Tôi đã có ví
              </TextStyle>
            </ButtonStyle>
          </View>
        </ButtonContainer>
      </SliderShowContainer>
    </React.Fragment>
  );
};

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
