import React from 'react';
import {View, Text, Button} from 'react-native';

export default function ConfirmAuth({route}) {
  let {words} = route.params;
  console.log(words);
  return <React.Fragment></React.Fragment>;
}
