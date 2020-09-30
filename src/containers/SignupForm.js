import React from 'react';
import {View, Text, Button, TextInput} from 'react-native';

export default function SignupForm() {
    return <View>
        <View>
            <View>
                <TextInput placeholder="Type a username"/>
            </View>
            <View>
                <TextInput placeholder="Type a password"/>
            </View>
            <Button title="Signup"/>

        </View>
    </View>
}