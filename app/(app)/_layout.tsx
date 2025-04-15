import React from 'react'
import { Tabs } from 'expo-router'
import { Image, ImageBackground, Text, View } from 'react-native'
import { images } from '@/constants/images'
import { icons } from '@/constants/icons'

interface PropTypes {
    title: string,
    icon: any,
    focused: boolean
}

const TabIcon = ({ title, icon, focused }: PropTypes) => {
    if (!focused) {
        return (
            <View className='size-full justify-center items-center rounded-full mt-4'>
                <Image source={icon} />
            </View>
        )
    }

    return (
        <ImageBackground source={images.navLinkBg} className='flex flex-row gap-1 w-full flex-1 min-w-[112px] min-h-16 mt-4 justify-center items-center rounded-full overflow-hidden'>
            <Image source={icon} />
            <Text className='text-gray-600'>{title}</Text>
        </ImageBackground>
    )
}

const _layout = () => {
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
                    height: 52,
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