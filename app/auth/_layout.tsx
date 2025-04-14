import React from 'react'
import { Tabs } from 'expo-router'

const _layout = () => {
    return (
        <Tabs>
            <Tabs.Screen
                name="Login"
                options={{ headerShown: false }}
            />
            <Tabs.Screen
                name="Register"
                options={{ headerShown: false }}
            />
        </Tabs>
    )
}

export default _layout