import React from 'react';
import {View, Text, Button, Alert} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Ionicon from 'react-native-vector-icons/Ionicons';

export default function ConfirmAuth({route}) {
  let {words} = route.params;
  let newWords = [...words];
  let [randomStr, setRandomStr] = React.useState([...newWords.sort(() => 0.5 - Math.random())]);
  let [confirmStr, setConfirmStr] = React.useState([]);

  console.log({words, confirmStr});

  return (
    <React.Fragment>
      <View>
        {confirmStr && (
          <View>
            <View
              style={{
                width: '100%',
                flexWrap: 'wrap',
                flexDirection: 'row',
                justifyContent: 'center',
                paddingTop: 20,
                paddingLeft: 20,
                paddingRight: 20,
                borderWidth: 1,
                borderStyle: "dotted",
                borderColor: "#00f",
                marginBottom: 20
              }}>
              {confirmStr.map((item, index) => (
                <View
                  key={index}
                  style={{
                    flexDirection: 'row',
                    marginRight: 5,
                    backgroundColor: '#ccc',
                    marginBottom: 10,
                    justifyContent: 'center',
                    paddingLeft: 10,
                    paddingRight: 10,
                  }}>
                  <Text>{item}</Text>
                </View>
              ))}
            </View>
          </View>
        )}
        {randomStr && (
          <View
            style={{
              width: '100%',
              flexWrap: 'wrap',
              flexDirection: 'row',
              justifyContent: 'center',
              paddingTop: 20,
              paddingLeft: 20,
              paddingRight: 20,
            }}>
            {randomStr.map((item, index) => (
              <TouchableOpacity
                key={index}
                onPress={() =>
                  setConfirmStr((prevConfirm) => {
                    setRandomStr((prevOrigin) => {
                      prevOrigin.splice(index, 1);
                      return prevOrigin;
                    });
                    return [...prevConfirm, item];
                  })
                }>
                <View
                  key={index}
                  style={{
                    flexDirection: 'row',
                    marginRight: 5,
                    backgroundColor: '#ccc',
                    marginBottom: 10,
                    justifyContent: 'center',
                    paddingLeft: 10,
                    paddingRight: 10,
                  }}>
                  <Text>{item}</Text>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        )}
        <View style={{marginTop: 50}}>
          <Button
            title="Tiếp tục"
            onPress={() => {
              if (words.join('') === confirmStr.join('')) {
                Alert.alert("Bạn đã check đúng")
              } else {
                Alert.alert("Bạn đã check sai")
              }
            }}
          />
        </View>
        <View style={{marginTop: 10}}>
          <Button title="Nhập lại" onPress={() => {
            setRandomStr([...words]);
            setConfirmStr([]);
          }}/>
        </View>
      </View>
    </React.Fragment>
  );
}
