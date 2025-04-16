import React from 'react'
import { Tabs } from 'expo-router'

const _layout = () => {
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