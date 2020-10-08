import React, { useState } from 'react';
import { View, Text, Switch } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useSelector, useDispatch } from 'react-redux';
import { insertWalletSymbol } from '../../redux/actions';
import { freshToken } from '../../services';

export const DetailStackCoin = ({ WalletSymbol, Name }) => {
    const [isEnabled, setIsEnabled] = useState(false);
    let user = useSelector((state) => state.user);
    let dispatch = useDispatch();

    // React.useEffect(() => {
    //     let insertWallet = async () => {
    //         if (isEnabled) {
    //             let token = await freshToken();
    //             console.log(token);
    //         }
    //     }

    //     insertWallet();
    // })
    const toggleSwitch = async () => {
        setIsEnabled((previousState) => !previousState);
        let token = await freshToken();
        console.log(token);
        dispatch(
            insertWalletSymbol({
                address: user.AddressBip,
                symbol: WalletSymbol,
                name: Name,
            }),
        );

    };
    return (
        <View
            style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                borderBottomWidth: 0.5,
            }}>
            <View style={{ flexDirection: 'row' }}>
                <View style={{ justifyContent: 'center', margin: 10 }}>
                    <View
                        style={{
                            justifyContent: 'center',
                            alignItems: 'center',
                            height: 50,
                            width: 50,
                            backgroundColor: '#000',
                            borderRadius: 25,
                        }}>
                        <Ionicons name="moon" size={30} color="#fff" />
                    </View>
                </View>
                <View style={{ justifyContent: 'center' }}>
                    <Text style={{ fontSize: 22 }}>{Name}</Text>
                </View>
            </View>
            <View style={{ justifyContent: 'center' }}>
                <Text style={{ fontSize: 22, margin: 10 }}>
                    <Switch
                        trackColor={{ false: '#767577', true: '#81b0ff' }}
                        thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={toggleSwitch}
                        value={isEnabled}
                    />
                </Text>
            </View>
        </View>
    );
};
