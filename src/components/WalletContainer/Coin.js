import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import styled from 'styled-components/native';

export const Coin = (props) => {
  // let { imageUrl, title, value, quality, currency } = props;
  let {WalletSymbol, Name, avatar} = props;
  return (
    <View>
      <CardContainer>
        <CardBody>
          <CardImage source={{uri: avatar}} />
          <View style={{justifyContent: 'center'}}>
            <CardText fontSize={22}>{Name}</CardText>
            {/* <CardText fontSize={15}>{value}</CardText> */}
          </View>
        </CardBody>
        <View style={{justifyContent: 'center'}}>
          <CardText fontSize={18}>{`0 ${WalletSymbol}`}</CardText>
        </View>
      </CardContainer>
    </View>
  );
};

Coin.defaultProps = {
  imageUrl: 'https://refur.eu/wp-content/uploads/2016/04/opengraph.png',
  title: 'Bitcoin',
  value: 'đ252,713,583.46 +0.97%',
  quality: 0,
  currency: 'BTN',
};

const CardContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding-top: 10px;
  padding-right: 10px;
  padding-left: 10px;
  padding-bottom: 10px;
  /* border-top-width: 1; */
  /* border-bottom-width: 1; */
  /* margin-bottom: 5; */
  margin-top: ${props => props.theme.MARGIN_TOP};
  border-radius: 10px;
  background-color: ${(props) => props.theme.BACKGROUND_COLOR_SECONDARY};
`;

const CardBody = styled.View`
  flex-direction: row;
`;

const CardImage = styled.Image`
  width: 50px;
  height: 50px;
  border-radius: 25px;
  margin-right: 15px;
  margin-left: 15px;
`;

const CardText = styled.Text`
  font-size: ${(props) => props.fontSize};
  color: ${(props) => props.theme.TEXT_COLOR_PRIMARY};
  margin-right: 15px;
`;
