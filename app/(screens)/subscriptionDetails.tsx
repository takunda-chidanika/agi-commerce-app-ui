import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import TopNav from '../../components/TopNav'
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const subscriptionDetails = () => {
    return (
        <View>
            <TopNav />
            <View className='mx-2'>
                <View className='mt-4'>
                    <Text className='text-gray-800 font-bold text-xl'>Suggested Seed Package</Text>
                </View>
                <View className='bg-[#FFEDCA] relative'>
                    <View className='absolute flex-row p-2 rounded-2xl items-center bg-green-700 w-1/5 mt-2 top-0 right-0'>
                        <AntDesign name="star" size={24} color="white" />
                        <Text>4.7</Text>
                    </View>

                    <View className='h-36 w-36 mx-auto bg-green-400 rounded-md mt-20'>

                    </View>
                    <View className='mt-8 flex-row mx-auto space-x-2 w-4/5 mb-8'>
                        <View className='h-16 w-16 mx-auto bg-green-400 rounded-md'>

                        </View>
                        <View className='h-16 w-16 mx-auto bg-green-400 rounded-md'>

                        </View>
                        <View className='h-16 w-16 mx-auto bg-green-400 rounded-md'>

                        </View>
                        <View className='h-16 w-16 mx-auto bg-green-400 rounded-md'>

                        </View>
                    </View>
                </View>
                <View className='bg-green-100 rounded-t-3xl px-8 space-y-4 h-full'>
                    <View className='h-1 w-2/5 bg-gray-400 mx-auto rounded-xl mt-2' />
                    <Text className='text-2xl font-bold text-gray-800'>Fruit Bundle #3</Text>
                    <Text className='text-lg font-base tracking-wider text-gray-600 mb-16'>Bundle of fruits containing different types of berries such as blueberry, strawberry, caneberry, etc.</Text>
                    <View className='flex-row p-3 px-4 items-center justify-between bg-green-700 rounded-xl'>
                        <View>
                            <MaterialCommunityIcons name="cart-check" size={30} color="white" />
                        </View>
                        <Text className='text-green-50 text-xl font-bold'>Add To Cart</Text>
                        <Text className='text-green-50 text-lg font-bold'>$15</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default subscriptionDetails

const styles = StyleSheet.create({})