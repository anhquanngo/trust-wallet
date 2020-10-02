import React, {useState} from 'react';
import {View, Text, Image, TouchableOpacity, Share} from 'react-native';

export default function InviteFriend() {
  const onShare = async () => {
    try {
      const result = await Share.share(
        {
          message: 'Come on with me ',
          uri: '',
        },
        {
          dialogTitle: 'Invite Friends',
        },
      );
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
          alert('Share with' + result.activityType);
        } else {
          // shared
          alert('Share but not sure how');
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
        alert('Dimensions');
      }
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <View>
      <View
        style={{
          alignItems: 'center',
          height: 200,
          marginTop: 75,
        }}>
        <View>
          <Image
            style={{width: 80, height: 80}}
            source={{
              uri: 'https://reactnative.dev/img/tiny_logo.png',
            }}
          />
        </View>
        <Text style={{fontWeight: '400', marginTop: 18, fontSize: 22}}>
          Invite a Friend. Get TWT tokens.{' '}
        </Text>
        <Text
          style={{
            fontWeight: '200',
            textAlign: 'center',
            marginTop: 18,
            fontSize: 16,
          }}>
          For each friend you invite that purchase $50+ in crypto, you'll both
          125 TWT.
        </Text>
      </View>

      <View
        style={{
          textAlign: 'center',
          borderWidth: 0.1,
          marginTop: 73,
          marginLeft: 25,
          width: 360,
          height: 95,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-around',
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 1,
          },
          shadowOpacity: 0.5,

          shadowRadius: 10,
          elevation: 1.5,
        }}>
        <View style={{flexDirection: 'column', alignItems: 'center'}}>
          <Text>0</Text>
          <Text>Invite</Text>
        </View>
        <View style={{flexDirection: 'column', alignItems: 'center'}}>
          <Text>0</Text>
          <Text>Completed</Text>
        </View>
      </View>
      <View
        style={{
          alignItems: 'center',
          height: 180,
        }}>
        <Text style={{textAlign: 'center', marginTop: 120, fontSize: 14}}>
          You referral code is active. For each friend you invite that purchase
          $50+ in crypto, you'll both 125 TWT.
        </Text>
      </View>

      <TouchableOpacity
        style={{
          marginLeft: 25,
          width: 360,
          height: 50,
          backgroundColor: '#3b60e9',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        onPress={onShare}>
        <Text style={{color: '#fff'}}>INVITE FRIENDS</Text>
      </TouchableOpacity>
    </View>
  );
}
