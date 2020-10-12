import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Modal,
  TouchableHighlight,
  Alert,
} from 'react-native';

import {useSelector, useDispatch} from 'react-redux';
import {addAddress} from '../redux/actions';

import styled from 'styled-components/native';

const ModalContainer = styled.View`
  background-color: ${(props) => props.theme.BACKGROUND_COLOR_PRIMARY};
  width: 100%;
  height: 100%;
  justify-content: center;
`;

const ModalForm = styled.View`
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

const InputGroup = styled.View`
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

export const ModalItem = ({modal, setModal, toAddress}) => {
  let [name, setName] = React.useState();
  let [AddressBip, setAddressBip] = React.useState(toAddress);
  let dispatch = useDispatch();
  const onChangeName = (text) => {
    setName(text);
  };
  const onChangeAddress = (text) => {
    setAddressBip(text);
  };
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modal}
      onRequestClose={() => {
        Alert.alert('Modal has been closed.');
      }}>
      <ModalContainer>
        <ModalForm>
          <InputGroup>
            <TextStyle>Tên gợi nhớ</TextStyle>
            <TextInputStyle onChangeText={onChangeName} value={name} />
          </InputGroup>
          <InputGroup>
            <TextStyle>Address</TextStyle>
            <TextInputStyle value={AddressBip} onChangeText={onChangeAddress} />
          </InputGroup>
          <ButtonStyle
            onPress={() => {
              if (name !== '' && AddressBip !== '') {
                dispatch(addAddress({name: name, AddressBip: AddressBip}));
              }
              setModal(!modal);
            }}>
            <TextStyle bold>Đồng ý</TextStyle>
          </ButtonStyle>
        </ModalForm>
      </ModalContainer>
    </Modal>
  );
};
