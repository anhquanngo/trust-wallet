import React from 'react';
import {Button, Modal} from 'react-native';
import styled from 'styled-components/native';
import {useSelector, useDispatch} from 'react-redux';
import {AddressItem} from './AddressItem';

const AddressListContainer = styled.View`
  height: 100%;
  width: 100%;
  background-color: ${(props) => props.theme.BACKGROUND_COLOR_PRIMARY};
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
  margin-bottom: 10px;
`;

const TextStyle = styled.Text`
  color: ${(props) => props.theme.TEXT_COLOR_PRIMARY};
  margin-bottom: 5;
  font-weight: ${(props) => (props.bold ? 'bold' : 'normal')};
`;

export const AddressModal = ({modalAddress, setModalAddress, setToAddress}) => {
  let listAddress = useSelector((state) => state.listAddress);
  //   console.log(listAddress);

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalAddress}
      onRequestClose={() => {
        Alert.alert('Modal has been closed.');
      }}>
      <AddressListContainer>
        <ButtonStyle onPress={() => setModalAddress(!modalAddress)}>
          <TextStyle bold>Xong</TextStyle>
        </ButtonStyle>
        {listAddress &&
          listAddress.map((item) => (
            <AddressItem {...item} key={item.AddressBip} setToAddress={setToAddress} setModalAddress={setModalAddress} modalAddress={modalAddress}/>
          ))}
        
      </AddressListContainer>
    </Modal>
  );
};
