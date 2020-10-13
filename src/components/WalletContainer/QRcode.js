import React from 'react';
import {Share, Dimensions, Clipboard} from 'react-native';

import Ionicon from 'react-native-vector-icons/Ionicons';

import styled from 'styled-components/native';
import {useSelector, useDispatch} from 'react-redux';

import {qrcodeCreate} from '../../redux/actions';

const {width, height} = Dimensions.get('window');

const QRcodeContainer = styled.View`
  padding-top: 20px;
  padding-left: 40px;
  padding-right: 40px;
  background-color: ${(props) => props.theme.BACKGROUND_COLOR_PRIMARY};
  align-items: center;
  height: ${height};
`;

const QRcodeForm = styled.View`
  padding-top: 10px;
  padding-left: 10px;
  padding-right: 10px;
  padding-bottom: 10px;
  background-color: ${(props) => props.theme.BACKGROUND_COLOR_SECONDARY};
  border-radius: ${(props) => props.theme.BORDER_RADIUS};
  align-items: center;
  width: ${(width * 2.5) / 3};
  /* background-color: #f00 */
`;

const TextStyle = styled.Text`
  text-align: center;
  color: ${(props) => props.theme.TEXT_COLOR_PRIMARY};
  padding-left: 20px;
  padding-right: 20px;
`;

const ImageStyle = styled.Image`
  width: ${(width * 2) / 3};
  height: ${(width * 2) / 3};
  /* margin-bottom: 10px; */
`;

const ButtonContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding-top: 20px;
  padding-bottom: 20px;
`;

const ButtonStyle = styled.TouchableOpacity`
  background-color: ${(props) => props.theme.BACKGROUND_COLOR_SECONDARY};
  width: 50px;
  height: 50px;
  border-radius: 25px;
  justify-content: center;
  align-items: center;
  margin-left: 20px;
`;

const IconStyle = styled(Ionicon)`
  color: ${(props) => props.theme.TEXT_COLOR_PRIMARY};
`;

export const QRcodeItem = () => {
  let qrcode = useSelector((state) => state.qrcode);
  let user = useSelector((state) => state.user);
  let dispatch = useDispatch();

  const onShare = async () => {
    try {
      const result = await Share.share({
        message:
          user.AddressBip,
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };

  React.useEffect(() => {
    dispatch(qrcodeCreate(user.AddressBip));
  }, []);

  return (
    <QRcodeContainer>
      <QRcodeForm>
        {qrcode !== '' ? (
          <ImageStyle
            source={{
              uri: qrcode,
            }}
          />
        ) : null}
        <TextStyle>{user.AddressBip}</TextStyle>
      </QRcodeForm>
      <ButtonContainer>
        <ButtonStyle onPress={() => Clipboard.setString(user.AddressBip)}>
          <IconStyle name="copy-outline" size={20} />
        </ButtonStyle>
        <ButtonStyle onPress={onShare}>
          <IconStyle name="share-social-outline" size={20} />
        </ButtonStyle>
      </ButtonContainer>
    </QRcodeContainer>
  );
};
