import React from 'react'
import { Redirect, Tabs } from 'expo-router'
import { ActivityIndicator, Image, Text, View } from 'react-native'
import { icons } from '@/constants/icons'
import { useAuth } from '@/hooks/useAuth'

interface PropTypes {
    title: string,
    icon: any,
    focused: boolean
}

const TabIcon = ({ title, icon, focused }: PropTypes) => {
    if (!focused) {
        return (
            <View className='size-full justify-center items-center rounded-full mt-6'>
                <Image source={icon} />
            </View>
        )
    }

    return (
        <View className='bg-white flex flex-row gap-[8px] w-full flex-1 min-w-[132px] min-h-16 mt-6 justify-center items-center rounded-full overflow-hidden'>
            <Image source={icon} className='w-8 h-8' style={[
                title === 'Home' ? { marginLeft: 10 } : {},
            ]} />
            <Text className='text-gray-600' style={[
                title === 'Settings' ? { marginRight: 20 } : {},
            ]}>{title}</Text>
        </View>
    )
}

const _layout = () => {
    const { session, isLoading } = useAuth();
    if (!session) return <Redirect href="/login" />
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
                tabBarItemStyle: {
                    width: '100%',
                    height: '100%',
                    justifyContent: 'center',
                    alignItems: 'center',
                },
                tabBarStyle: {
                    backgroundColor: '#eee',
                    borderRadius: 50,
                    marginHorizontal: 20,
                    marginBottom: 36,
                    height: 60,
                    position: 'absolute',
                    overflow: 'hidden',
                    borderWidth: 1,
                    borderColor: '#ddd',
                }
            }}
        >
            <Tabs.Screen
                name="index"
                options={{
                    tabBarIcon: ({ focused }) => (
                        <TabIcon focused={focused} icon={icons.home} title={'Home'} />
                    )
                }}
            />
            <Tabs.Screen
                name="planner"
                options={{
                    tabBarIcon: ({ focused }) => (
                        <TabIcon focused={focused} icon={icons.planner} title={'Planner'} />
                    )
                }}
            />
            <Tabs.Screen
                name="calendar"
                options={{
                    tabBarIcon: ({ focused }) => (
                        <TabIcon focused={focused} icon={icons.calendar} title={'Calendar'} />
                    )
                }}
            />
            <Tabs.Screen
                name="settings"
                options={{
                    tabBarIcon: ({ focused }) => (
                        <TabIcon focused={focused} icon={icons.settings} title={'Settings'} />
                    )
                }}
            />
        </Tabs>
    )
}

export default _layout