import { Alert, ScrollView, StyleSheet, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { Controller, useForm } from 'react-hook-form'
import Input from '@/components/Input'
import { fields } from '@/constants/login'
import { FontAwesome } from '@expo/vector-icons'
import { Link } from 'expo-router'

export default function Login() {
    const { control } = useForm();

    return (
        <ScrollView
            className="flex-1 w-full px-8"
            contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }}
            keyboardShouldPersistTaps="handled"
        >
            <Text className="text-4xl font-semibold text-center pb-8">Login</Text>

            {fields.map((input) => (
                <Controller
                    key={input.id}
                    control={control}
                    name={input.name}
                    render={({ field: { onChange, value } }) => (
                        <Input
                            name={input.name}
                            errors={{}}
                            onChange={onChange}
                            value={value}
                            placeholder={input.placeholder}
                            secureTextEntry={input.secureTextEntry}
                        />
                    )}
                />
            ))}

            <TouchableOpacity className="bg-blue-600 px-6 py-4 rounded-xl mt-4">
                <Text className="text-white text-center font-semibold text-base">
                    Login
                </Text>
            </TouchableOpacity>

            <Text className="text-center mt-12 text-sm">
                Don't have account? <Link href="/register" className='text-blue-600'>Create account</Link>
            </Text>

            <TouchableOpacity
                className="flex-row items-center justify-center gap-2 border border-gray-300 px-6 py-4 rounded-xl mt-24"
            >
                <FontAwesome name="google" size={20} color="#3464eb" />
                <Text className="text-base font-medium text-gray-700">Sign In with Google</Text>
            </TouchableOpacity>
        </ScrollView>

    )
}

const styles = StyleSheet.create({})