import { ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import React from 'react';
import TopNav from '../../components/TopNav';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

const checkout = () => {
    return (
        <ScrollView className='bg-green-100'>
            <TopNav />
            <View className='mx-2'>
                <View className='border-2 border-green-400 space-y-10 border-b-2 rounded-b-3xl'>
                    <Text className='text-gray-800 text-xl font-bold mt-4 mx-4'>Checkout Details</Text>
                    <View className='flex-row p-8'>
                        <Text className='text-gray-600 text-xl font-bold flex-1'>For payment:</Text>
                        <View className='space-y-4'>
                            <Text className='text-gray-800 text-xl font-bold'>$72.60</Text>
                            <Text className='text-gray-600 text-sm font-bold'>Including VAT (21%)</Text>
                        </View>
                    </View>
                </View>
                <View className='flex-row mx-auto -top-4'>
                    <View className='flex-row w-1/3 space-x-2 rounded-2xl bg-green-400 z-20 items-center justify-center'>
                        <FontAwesome5 name="credit-card" size={30} color="black" />
                        <Text className='text-sm font-bold text-gray-50'>Credit Card</Text>
                    </View>
                    <View className='flex-row w-1/3 space-x-2 -mx-4 rounded-2xl bg-gray-400 z-10 items-center justify-center'>
                        <MaterialCommunityIcons name="apple" size={24} color="black" />
                        <Text className='text-sm font-bold text-gray-800'>Apple Pay</Text>
                    </View>
                    <View className='flex-row w-1/3 space-x-2 rounded-2xl bg-green-800 z-0 items-center justify-center'>
                        <AntDesign name="google" size={30} color="black" />
                        <Text className='text-sm font-bold text-gray-50'>Apple Pay</Text>
                    </View>
                </View>
                <View className='mt-4'>
                    <View className='mx-8'>
                        <Text className='text-lg text-gray-600'>Card number</Text>
                        <View className='flex-row mt-2 space-x-2 py-2 px-4 items-center bg-green-50 rounded-xl'>
                            <TextInput
                                className='flex-1 h-12 font-medium text-xl' placeholder='0000 0000 0000 0000'
                            />
                            <FontAwesome5 name="credit-card" size={30} color="black" />
                        </View>
                    </View>
                    <View className='mx-8'>
                        <Text className='text-lg text-gray-600'>Card Holder Name</Text>
                        <View className='flex-row mt-2 space-x-2 py-2 px-4 items-center bg-green-50 rounded-xl'>
                            <TextInput
                                className='flex-1 h-12 font-medium text-xl' placeholder='TJ Chidanika'
                            />
                        </View>
                    </View>
                    <View className='mx-8'>
                        <Text className='text-lg text-gray-600'>Address</Text>
                        <View className='flex-row mt-2 space-x-2 py-2 px-4 items-center bg-green-50 rounded-xl'>
                            <TextInput
                                className='flex-1 h-12 font-medium text-xl' placeholder='TJ Chidanika'
                            />
                        </View>
                    </View>
                    <View className='mx-8 flex-row space-x-2'>
                        <View className='w-1/2'>
                            <Text className='text-lg text-gray-600'>Expiry date</Text>
                            <View className='flex-row mt-2 space-x-2 py-2 px-4 items-center bg-green-50 rounded-xl'>
                                <TextInput
                                    className='flex-1 h-12 font-medium text-xl' placeholder='MM/YYYY'
                                />
                            </View>
                        </View>
                        <View className='w-1/2'>
                            <View className='flex-row justify-between'>
                                <Text className='text-lg text-gray-600'>CVV / CVC</Text>
                                <FontAwesome name="question" size={20} color="black" />
                            </View>
                            <View className='flex-row mt-2 space-x-2 py-2 px-4 items-center bg-green-50 rounded-xl'>
                                <TextInput
                                    className='flex-1 h-12 font-medium text-xl' placeholder='TJ Chidanika'
                                />
                            </View>
                        </View>
                    </View>
                    <View className='flex-row bg-green-800 mt-2 rounded-xl mx-6 py-2 px-4 justify-between'>
                        <AntDesign name="pay-circle-o1" size={30} color="white" />
                        <Text className='flex-1 ml-4 text-xl text-green-50 font-bold tracking-widest'>Pay For The Order</Text>
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}

export default checkout

const styles = StyleSheet.create({})