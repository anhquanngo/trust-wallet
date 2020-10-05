import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

const SwapTab = () => (
    <View style={styles.container}>
        <View
            style={{
                borderWidth: 1,
                borderColor: '#e3e3e3',
                borderRadius: 5,
                height: 100,
                width: '100%',
                flexDirection: 'row',
            }}>
            <View
                style={{
                    width: '50%',
                    justifyContent: 'space-around',
                    marginLeft: 20,
                    marginTop: 5,
                }}>
                <Text>You Pay</Text>
                <Text style={{ fontWeight: 'bold', fontSize: 22 }}>0</Text>
                <Text>Balance: 0 BNB</Text>
            </View>

            <View
                style={{
                    width: '50%',
                    flexDirection: 'row',
                    justifyContent: 'space-evenly',
                    alignItems: 'center',
                }}>
                <Text>image</Text>
                <Text style={{ fontWeight: 'bold', fontSize: 22 }}>BNB</Text>
                <Text style={{ color: 'gray', fontSize: 24, fontWeight: 'bold' }}>
                    {'>'}
                </Text>
            </View>
        </View>
        <View
            style={{
                borderWidth: 1,
                borderColor: '#e3e3e3',
                borderRadius: 5,
                height: 100,
                width: '100%',
                flexDirection: 'row',
            }}>
            <View
                style={{
                    width: '50%',
                    justifyContent: 'space-around',
                    marginLeft: 20,
                    marginTop: 5,
                }}>
                <Text>You Get</Text>
                <Text style={{ fontWeight: 'bold', fontSize: 22 }}>0</Text>
                <Text>Balance: 0 MITH</Text>
            </View>
            <View
                style={{
                    height: 50,
                    width: 50,
                    borderRadius: 25,
                    borderColor: '#00000030',
                    borderWidth: 2,
                    backgroundColor: '#e3e3e3',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop: -25,
                    left: 100,
                }}>
                <Text style={{ color: '#365898', fontSize: 18, fontWeight: 'bold' }}>
                    ↑↓
        </Text>
            </View>
            <View
                style={{
                    width: '50%',
                    flexDirection: 'row',
                    justifyContent: 'space-evenly',
                    alignItems: 'center',
                    right: 50,
                }}>
                <Text>image</Text>
                <Text style={{ fontWeight: 'bold', fontSize: 22 }}>MITH</Text>
                <Text style={{ color: 'gray', fontSize: 24, fontWeight: 'bold' }}>
                    {'>'}
                </Text>
            </View>
        </View>
        <View
            style={{
                marginTop: 15,
                height: 40,
                width: '100%',
                flexDirection: 'row',
                justifyContent: 'space-around',
            }}>
            <TouchableOpacity style={styles.item}>
                <Text style={{ color: '#365898' }}>25%</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.item}>
                <Text style={{ color: '#365898' }}>50%</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.item}>
                <Text style={{ color: '#365898' }}>75%</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.item}>
                <Text style={{ color: '#365898' }}>100%</Text>
            </TouchableOpacity>
        </View>

        <View
            style={{
                height: 40,
                marginTop: 15,
            }}>
            <Text style={{ textAlign: 'center' }}>1 BNB ~ 4,751.722 MITH </Text>
        </View>

        <View style={{ justifyContent: 'center', alignContent: 'center' }}>
            <Text style={styles.next}>Next</Text>
        </View>
    </View>
);
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 15,
        backgroundColor: '#eaeaea',
    },
    next: {
        padding: 15,
        marginTop: 30,
        borderWidth: 1,
        backgroundColor: '#4267b2',
        color: '#fff',
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
    },
    item: {
        width: '23%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#e3e3e3',
        borderRadius: 10,
    },
});

export default SwapTab;
