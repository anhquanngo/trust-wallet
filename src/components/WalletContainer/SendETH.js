import React from 'react';
import {View, Text, Button, TouchableOpacity, Dimensions} from 'react-native';
import styled from 'styled-components/native';
import {useSelector, useDispatch} from 'react-redux';
import {sendETH} from '../../redux/actions';

const SendETHContainer = styled.View`
  padding-top: 20;
  justify-content: center;
  padding-left: 20;
  padding-right: 20;
`;

const SendETHFormContainer = styled.View`
  padding-top: 20;
  padding-bottom: 20;
  padding-left: 20;
  padding-right: 20;
  border-width: 1;
  border-style: solid;
  border-color: ${(props) => props.theme.BACKGROUND_COLOR_PRIMARY};
  border-radius: ${(props) => props.theme.BORDER_RADIUS};
  background-color: ${(props) => props.theme.BACKGROUND_COLOR_PRIMARY};
`;

const AddressContainer = styled.View`
  margin-bottom: 15;
`;

const TextStyle = styled.Text`
  color: ${(props) => props.theme.TEXT_COLOR_PRIMARY};
  margin-bottom: 5;
  font-weight: ${(props) => (props.bold ? 'bold' : 'normal')};
`;

const TextInputStyle = styled.TextInput`
  background-color: ${(props) => props.theme.BACKGROUND_COLOR_SECONDARY};
  border-radius: ${(props) => props.theme.BORDER_RADIUS};
  padding-left: 10;
`;

const ButtonStyle = styled.TouchableOpacity`
  padding-top: 10;
  padding-bottom: 10;
  padding-left: 10;
  padding-right: 10;
  border-style: solid;
  border-radius: ${(props) => props.theme.BORDER_RADIUS};
  background-color: ${(props) => props.theme.BACKGROUND_COLOR_SECONDARY};
  align-items: center;
`;

const WarnStyle = styled.Text`
  color: #ca4e55;
`;

/**
 * post{
 * fromAddress
	toAddress
	gasPrice: 210000000000
	gasLimit: 42000
    value
}
 */

export const SendETH = () => {
  let [state, setState] = React.useState();
  let sendEthNotice = useSelector((state) => state.sendETH);
  const dispatch = useDispatch();
  let user = useSelector((state) => state.user);
  let [toAddress, setToAddress] = React.useState();
  let [value, setValue] = React.useState();
  let [warn, setWarn] = React.useState();
  // let balance = useSelector(state => state.balance);

  const gasPrice = 210000000000;
  const gasLimit = 42000;

  const onSend = () => {
    if (toAddress && value) {
      let param = {
        fromAddress: user.AddressBip,
        toAddress: toAddress,
        gasPrice: gasPrice,
        gasLimit: gasLimit,
        value: value,
      };
      dispatch(sendETH(param));
      setState('Đang chờ máy chủ phản hồi');
    } else {
      setState('Vui lòng nhập đầy đủ thông tin!');
    }
  };

  const onChangeAddress = (text) => {
    setToAddress(text);
  };

  const onChangeValue = (text) => {
    setValue(text);
    if (!/^[0-9]*$/gm.test(value)) {
      setWarn('Giá trị nhập phải là số');
    } else {
      setWarn(null);
    }
  };
  return (
    <SendETHContainer>
      <SendETHFormContainer>
        <View style={{marginBottom: 30}}>
          <AddressContainer>
            <TextStyle bold>From</TextStyle>
            <TextInputStyle value={user.AddressBip} />
          </AddressContainer>

          <AddressContainer>
            <TextStyle bold>To</TextStyle>
            <TextInputStyle
              placeholder="type a address"
              value={toAddress}
              onChangeText={onChangeAddress}
            />
          </AddressContainer>

          <AddressContainer>
            <TextStyle bold>Value</TextStyle>
            {warn && <WarnStyle>{warn}</WarnStyle>}
            <TextInputStyle
              placeholder="type a value"
              value={value}
              onChangeText={onChangeValue}
            />
          </AddressContainer>
          <TextStyle>{`Gas Price: ${gasPrice}`}</TextStyle>
          <TextStyle>{`Gas Limit: ${gasLimit}`}</TextStyle>
        </View>
        <ButtonStyle onPress={onSend}>
          <TextStyle bold>Send</TextStyle>
        </ButtonStyle>
        {state && <TextStyle bold>{state}</TextStyle>}
        {sendEthNotice !== '' ? (
          <TextStyle bold>{sendEthNotice}</TextStyle>
        ) : (
          <TextStyle bold>{state}</TextStyle>
        )}
      </SendETHFormContainer>
    </SendETHContainer>
  );
};
