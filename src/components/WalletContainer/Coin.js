import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';


export const Coin = (props) => {
    let {imageUrl, title, value, quality, currency} = props;
    return (
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          borderBottomWidth: 0.5,
        }}>
        <View style={{flexDirection: 'row'}}>
          <Image
            source={{uri: `${imageUrl}`}}
            style={{width: 50, height: 50, margin: 15}}
          />
          <View style={{justifyContent: 'center'}}>
            <Text style={{fontSize: 22}}>{title}</Text>
            <Text>{value}</Text>
          </View>
        </View>
        <View style={{justifyContent: 'center'}}>
          <Text style={{fontSize: 22, margin: 10}}>
            {`${quality} ${currency}`}
          </Text>
        </View>
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
  