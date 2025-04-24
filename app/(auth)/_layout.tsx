import React from 'react'
import { Redirect, Tabs } from 'expo-router'
import { useAuth } from '@/hooks/useAuth'
import { ActivityIndicator, View } from 'react-native';

const _layout = () => {
    const { session, isLoading } = useAuth();

    if (session) return <Redirect href="/" />
    if (isLoading) return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <ActivityIndicator size="large" />
        </View>
    );

    return (
        <Tabs
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle: {
                    display: 'none'
                }
            }}
        >
            <Tabs.Screen
                name="login"
                options={{ headerShown: false }}
            />
            <Tabs.Screen
                name="register"
                options={{ headerShown: false }}
            />
        </Tabs>
    )
}

export default _layout