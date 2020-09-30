import React from 'react';
import {View, Text, Button, TextInput, StyleSheet} from 'react-native';

export default function LoginForm({navigation}) {
    return <View>
        <View>
            <View>
                <TextInput placeholder="Type a username"/>
            </View>
            <View>
                <TextInput placeholder="Type a password"/>
            </View>
            <Button title="Login"/>
            <View>
                <Text>if you have not account</Text>
                <Text onPress={() => navigation.navigate("SignupForm")}>please Signup</Text>
            </View>
        </View>
    </View>
}


const styles = StyleSheet.create({

})