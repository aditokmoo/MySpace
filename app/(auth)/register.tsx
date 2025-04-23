import React from 'react'
import { ScrollView, StyleSheet, Text, TouchableOpacity } from 'react-native'
import { Controller, useForm } from 'react-hook-form';
import Input from '@/components/Input';
import { Link } from 'expo-router';
import { FontAwesome } from '@expo/vector-icons';
import { fields } from '@/constants/register';
import { UserCredentials } from '@/types/auth';
import { useAuthActions } from '@/modules/auth/hooks/useAuthActions';
import { ActivityIndicator } from 'react-native';

export default function Register() {
    const { control, handleSubmit } = useForm<UserCredentials>({
        defaultValues: {
            email: '',
            name: '',
            password: '',
        }
    });
    const { signUp, isSigningUp } = useAuthActions();

    const handleRegister = (data: any) => signUp(data);

    return (
        <ScrollView
            className="flex-1 w-full px-8"
            contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }}
            keyboardShouldPersistTaps="handled"
        >
            <Text className="text-4xl font-semibold text-center pb-12">Register</Text>

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

            <TouchableOpacity
                disabled={isSigningUp}
                onPress={handleSubmit((data) => handleRegister(data))}
                className={`bg-blue-600 px-6 py-4 rounded-xl mt-4 ${isSigningUp ? 'opacity-50' : ''}`}
            >
                {isSigningUp ? (
                    <ActivityIndicator size="small" color="#ffffff" />
                ) : (
                    <Text className="text-white text-center font-semibold text-base">
                        Create account
                    </Text>
                )}
            </TouchableOpacity>

            <Text className="text-center mt-12 text-sm">
                Already have account? <Link href="/login" className='text-blue-600'>Login</Link>
            </Text>

            <TouchableOpacity
                className="flex-row items-center justify-center gap-2 border border-gray-300 px-6 py-4 rounded-xl mt-24"
            >
                <FontAwesome name="google" size={20} color="#3464eb" />
                <Text className="text-base font-medium text-gray-700">Sign up with Google</Text>
            </TouchableOpacity>
        </ScrollView>

    )
}

const styles = StyleSheet.create({})