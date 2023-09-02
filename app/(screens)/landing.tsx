import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Image } from 'react-native'
import { Link } from 'expo-router'

const Landing = () => {
    return (
        <View className='flex-1 relative bg-black'>
            <Image source={require("../../assets/images/background-image.webp")} className='absolute w-full h-full opacity-40' />
            <View className='flex-1 mx-2 space-y-16'>
                <View className='items-center justify-center mt-48'>
                    <Text className='text-[36px] font-bold text-green-50'>GreenGenie</Text>
                    <Text className='text-[14px] font-bold text-gray-50'>Farm at your Fingertips</Text>
                </View>
                <View className='flex-1 items-center justify-center'>
                    <Link href={'/login'}>
                        <View className='bg-gray-400 p-2 px-6 rounded-xl opacity-60'>
                            <Text className='text-xl text-green-50'>Get Started</Text>
                        </View>
                    </Link>
                </View>
            </View>

        </View>
    )
}

export default Landing

const styles = StyleSheet.create({})