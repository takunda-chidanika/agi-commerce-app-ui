import { Image, StyleSheet, Text, View, ScrollView } from 'react-native';
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import TopBar from '../../components/TopBar';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

const orderplaced = () => {
    return (
        <ScrollView className='bg-green-100'>
            <TopBar />
            <View className='mx-2'>
                <Text className='text-2xl text-gray-800 mt-4'>Order Placed!</Text>
                <View className='flex-row justify-between items-center mt-4'>
                    <Text className='text-lg text-gray-800'>Order #5542</Text>
                    <Text className='text-2xl text-gray-800 font-bold'>$72.60</Text>
                </View>
                <View className='container'>
                    <View className='flex-row space-x-2 bg-[#CCCCCC] rounded-lg mt-2 p-1'>
                        <View className='w-2/5'>
                            <Image
                                source={require("../../assets/images/image-1.jpg")}
                                className='w-full h-28 rounded-2xl relative'
                            />
                            <View className='bg-gray-100 w-10 p-1 absolute rounded-lg bottom-0 left-0 items-center'>
                                <Text className='text-gray-800 text-xl font-bold'>2</Text>
                            </View>
                        </View>
                        <View className='w-2/5 space-y-1'>
                            <Text className='text-gray-800 text-lg font-bold'>Monstera Adansonii</Text>
                            <Text className='text-gray-600 text-lg font-bold'>Monstera family</Text>
                            <View className='flex-row p-1 w-20 space-x-2 bg-green-700 rounded-xl items-center justify-center'>
                                <FontAwesome name="star" size={20} color="white" />
                                <Text className='text-green-50 font-bold text-md'>4.6</Text>
                            </View>
                        </View>
                        <View className='space-y-20'>
                            <Text className='text-gray-900 text-xl font-bold'>$30</Text>
                        </View>
                    </View>
                    <View className='flex-row space-x-2 bg-[#CCCCCC] rounded-lg mt-2 p-1'>
                        <View className='w-2/5'>
                            <Image
                                source={require("../../assets/images/image-1.jpg")}
                                className='w-full h-28 rounded-2xl relative'
                            />
                            <View className='bg-gray-100 w-10 p-1 absolute rounded-lg bottom-0 left-0 items-center'>
                                <Text className='text-gray-800 text-xl font-bold'>2</Text>
                            </View>
                        </View>
                        <View className='w-2/5 space-y-1'>
                            <Text className='text-gray-800 text-lg font-bold'>Monstera Adansonii</Text>
                            <Text className='text-gray-600 text-lg font-bold'>Monstera family</Text>
                            <View className='flex-row p-1 w-20 space-x-2 bg-green-700 rounded-xl items-center justify-center'>
                                <FontAwesome name="star" size={20} color="white" />
                                <Text className='text-green-50 font-bold text-md'>4.6</Text>
                            </View>
                        </View>
                        <View className='space-y-20'>
                            <Text className='text-gray-900 text-xl font-bold'>$30</Text>
                        </View>
                    </View>
                </View>
                <View className='justify-between items-center mt-4'>
                    <Text className='text-lg tracking-widest text-gray-800 text-center'>
                        Thank you for choosing <Text className='text-[#159148]'>Green<Text className='text-[#98C13F]'>Genie</Text></Text>!
                        Your order has been received
                        and is on its way to you.
                    </Text>
                </View>
                <View className='mt-4'>
                    <Image
                        source={require("../../assets/images/image-1.jpg")}
                        className='w-full h-52 rounded-2xl relative'
                    />
                </View>
            </View>
        </ScrollView >
    )
}

export default orderplaced

const styles = StyleSheet.create({})