import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import styled from 'styled-components/native';


export const Coin = (props) => {
  let { imageUrl, title, value, quality, currency } = props;
  return (
    <BackGroundStyle
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomWidth: 0.5,
      }}>
      <View style={{ flexDirection: 'row' }}>
        <Image
          source={{ uri: `${imageUrl}` }}
          style={{ width: 50, height: 50, margin: 15 }}
        />
        <View style={{ justifyContent: 'center' }}>
          <TextStyle style={{ fontSize: 22 }}>{title}</TextStyle>
          <TextStyle>{value}</TextStyle>
        </View>
      </View>
      <View style={{ justifyContent: 'center' }}>
        <TextStyle style={{ fontSize: 22, margin: 10 }}>
          {`${quality} ${currency}`}
        </TextStyle>
      </View>
    </BackGroundStyle>
  );
};

Coin.defaultProps = {
  imageUrl: 'https://refur.eu/wp-content/uploads/2016/04/opengraph.png',
  title: 'Bitcoin',
  value: 'đ252,713,583.46 +0.97%',
  quality: 0,
  currency: 'BTN',
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginBottom: 10,
    borderBottomWidth: 0.5,
  },
  between: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  image: {
    margin: 10,
    width: 50,
    height: 50,
  },
  center: {
    justifyContent: 'center',
  },
  fontWeight: {
    fontSize: 22,
  },
  left: {
    justifyContent: 'flex-end',
  },
});


const TextStyle = styled.Text`
color: ${props => props.theme.PRIMARY_TEXT_COLOR}`

const BackGroundStyle = styled.View`
color: ${props => props.theme.PRIMARY_BACKGROUND_COLOR}`

const ButtonActive = styled.View`
color: ${props => props.theme.PRIMARY_BUTTON_COLOR_ACTIVE}`

const ButtonDisActive = styled.View`
color: ${props => props.theme.PRIMARY_BUTTON_COLOR_DISACTIVE}`

const ButtonTextActive = styled.View`
color: ${props => props.theme.PRIMARY_BUTTON_TEXT_COLOR_ACTIVE}`

const ButtonTextDisActive = styled.View`
color: ${props => props.theme.PRIMARY_BUTTON_TEXT_COLOR_DISACTIVE}`

const IconTextActive = styled.View`
color: ${props => props.theme.PRIMARY_ICON_TEXT_COLOR_ACTIVE}`

const IconTextDisActive = styled.View`
color: ${props => props.theme.PRIMARY_ICON_TEXT_COLOR_ACTIVE}`

