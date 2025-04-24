import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useAuth } from '@/hooks/useAuth'

export default function Settings() {
    const { logout } = useAuth();

    return (
        <View className="flex-1 justify-center items-center">
            <Text className="text-4xl text-blue-500">Settings</Text>
            <Text className="text-4xl text-blue-500" onPress={logout}>Logout</Text>
        </View>
    )
}

const styles = StyleSheet.create({})