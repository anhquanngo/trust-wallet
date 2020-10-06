import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import styled from 'styled-components/native';

export const Coin = (props) => {
  let { imageUrl, title, value, quality, currency } = props;
  return (
    <CardContainer>
      <CardBody>
        <CardImage source={{ uri: `${imageUrl}` }} />
        <View style={{ justifyContent: 'center' }}>
          <CardText fontSize={22}>{title}</CardText>
          <CardText fontSize={15}>{value}</CardText>
        </View>
      </CardBody>
      <View style={{ justifyContent: 'center' }}>
        <CardText fontSize={20}>{`${quality} ${currency}`}</CardText>
      </View>
    </CardContainer>
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
  padding-top: 10;
  padding-right: 10;
  padding-left: 10;
  padding-bottom: 10;
  background-color: ${(props) => props.theme.BACKGROUND_COLOR_SECONDARY};
  margin-top: 5;
  border-radius: 10;
`;

const CardBody = styled.View`
  flex-direction: row;
`;

const CardImage = styled.Image`
  width: 50;
  height: 50;
  border-radius: 25;
  margin-right: 15;
`;

const CardText = styled.Text`
  font-size: ${(props) => props.fontSize};
  color: ${(props) => props.theme.TEXT_COLOR_PRIMARY};
`;
