import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

interface PropTypes {
    errors: Record<string, { message: string }>
    onChange: () => void,
    value: string,
    placeholder: string,
    secureTextEntry: boolean
    name: string
}

export default function Input({ errors, onChange, value, placeholder, secureTextEntry, name }: PropTypes) {
    return (
        <View>
            <TextInput
                placeholder={placeholder}
                placeholderTextColor={'#999'}
                keyboardType="email-address"
                autoCapitalize="none"
                onChangeText={onChange}
                secureTextEntry={secureTextEntry}
                value={value}
                style={styles.input}
            />
            {errors[name] && <Text>{errors[name].message}</Text>}
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        borderColor: '#ddd',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 15,
        paddingVertical: 15,
        marginVertical: 10,
    },
})