import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import TopNav from '../../components/TopNav'
import { Entypo } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

const notifications = () => {
    return (
        <View>
            <TopNav />
            <View className='mx-4 space-y-4'>
                <Text className='text-gray-800 text-xl font-extrabold'>Notifications</Text>
                <View className='space-y-8'>
                    <View className='flex-row justify-between'>
                        <Entypo name="shopping-cart" size={50} color="black" />
                        <View className='flex-1 mx-4'>
                            <Text className='text-gray-800 text-xl font-bold'>Order #5542 Placed</Text>
                            <Text className='text-gray-500 text-xl font-bold'>1m ago.</Text>
                        </View>
                        <View className=' h-8 w-8 bg-green-700 items-center rounded-full'>
                            <Text className='text-green-50 text-lg'>1</Text>
                        </View>
                    </View>
                    <View className='flex-row justify-between'>
                        <FontAwesome name="truck" size={50} color="black" />
                        <View className='flex-1 mx-4'>
                            <Text className='text-gray-800 text-xl font-bold'>Order #5541 arriving today</Text>
                            <Text className='text-gray-500 text-xl font-bold'>1m ago.</Text>
                        </View>
                        <View className=' h-8 w-8 bg-green-700 items-center rounded-full'>
                            <Text className='text-green-50 text-lg'>1</Text>
                        </View>
                    </View>
                    <View className='flex-row justify-between'>
                        <FontAwesome5 name="receipt" size={50} color="black" />
                        <View className='flex-1 mx-4'>
                            <Text className='text-gray-800 text-xl font-bold'>Order #5540 received</Text>
                            <Text className='text-gray-500 text-xl font-bold'>1m ago.</Text>
                        </View>
                        <View className=' h-8 w-8 bg-green-700 items-center rounded-full'>
                            <Text className='text-green-50 text-lg'>1</Text>
                        </View>
                    </View>
                    <View className='flex-row justify-between'>
                        <FontAwesome name="leaf" size={50} color="black" />
                        <View className='flex-1 mx-4'>
                            <Text className='text-gray-800 text-xl font-bold'>Monstera Adansonii looks health</Text>
                            <Text className='text-gray-500 text-xl font-bold'>1m ago.</Text>
                        </View>
                        <View className=' h-8 w-8 bg-green-700 items-center rounded-full'>
                            <Text className='text-green-50 text-lg'>1</Text>
                        </View>
                    </View>
                    <View className='flex-row justify-between'>
                        <FontAwesome name="tree" size={50} color="black" />
                        <View className='flex-1 mx-4'>
                            <Text className='text-gray-800 text-xl font-bold'>Monstera Adansonii looks health</Text>
                            <Text className='text-gray-500 text-xl font-bold'>1m ago.</Text>
                        </View>
                        <View className=' h-8 w-8 bg-green-700 items-center rounded-full'>
                            <Text className='text-green-50 text-lg'>1</Text>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default notifications

const styles = StyleSheet.create({})