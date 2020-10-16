import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  PermissionsAndroid,
  Button,
} from 'react-native';
import styled from 'styled-components/native';
import Ionicon from 'react-native-vector-icons/Ionicons';
import {PERMISSIONS, request} from 'react-native-permissions';

//request location permisstion
const requestLocationPermission = async () => {
  if (Platform.OS === 'ios') {
    var response = await request(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE);
    console.log('iPhone: ' + response);

    if (response === 'granted') {
      // locateCurrentPosition(setPostion);
    }
  } else {
    var responseLocation = await request(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION);
    var responseCamera = await request(PERMISSIONS.ANDROID.CAMERA);
    var responseStorageWrite = await request(PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE);
    var responseStorageRead = await request(PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE);
    console.log('Android: ', {responseLocation, responseCamera, responseStorageWrite, responseStorageRead});

    if (response === 'granted') {
      // locateCurrentPosition(setPostion);
    }
  }
};

export const Notification = () => {
  React.useEffect(() => {
    console.log("Requesting location...");
    requestLocationPermission();
  },[]);
  return (
    <Container>
      <TextPrimary>Tính năng đang cập nhật...</TextPrimary>
    </Container>
  );
};

const TextStyle = styled.Text`
  color: ${(props) => props.theme.TEXT_COLOR_PRIMARY};
`;

const WrapIcon = styled(Ionicon)`
  color: #0f0;
`;

const Container = styled.View`
  background-color: ${(props) => props.theme.BACKGROUND_COLOR_PRIMARY};
  height: 100%;
`;

const TextPrimary = styled.Text`
  color: ${(props) => props.theme.TEXT_COLOR_PRIMARY};
  align-items: center;
  /* margin-top: 350px; */
  text-align: center;
`;
const TextSecondary = styled.Text`
  color: ${(props) => props.theme.TEXT_COLOR_SECONDARY};
`;
