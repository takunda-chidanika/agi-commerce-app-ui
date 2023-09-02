import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import TopNav from '../../components/TopNav'
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Image } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { TextInput } from 'react-native-gesture-handler';
import { SimpleLineIcons } from '@expo/vector-icons';

const productDetails = ({ plant }: any) => {

    return (
        <ScrollView className='bg-green-100'>
            <TopNav />
            <View className='mx-2'>
                <View className='bg-[#DEEAD8] p-2 rounded-bl-3xl'>
                    <View className='flex-row justify-between'>
                        <Text className='text-xl text-gray-800 font-bold'>Indoor</Text>
                        <View className='flex-row p-1 space-x-2 bg-green-700 rounded-xl items-center justify-center'>
                            <FontAwesome name="star" size={30} color="white" />
                            <Text className='text-green-50 font-bold text-xl'>4.6</Text>
                        </View>
                    </View>
                    <View className='mt-4 w-1/2'>
                        <Text className='text-gray-800 text-[35px] font-extrabold'>Monstera Adansonii</Text>
                    </View>
                    <View className='flex-row'>
                        <View className='w-1/2 space-y-6 p-4'>
                            <View className='space-2-y'>
                                <Text className='text-lg text-gray-600 font-bold'>PRICE</Text>
                                <Text className='text-xl text-gray-800 font-bold'>$ 15</Text>
                            </View>
                            <View className='space-2-y'>
                                <Text className='text-lg text-gray-600 font-bold'>SIZE</Text>
                                <Text className='text-xl text-gray-800 font-bold'>5” h</Text>
                            </View>
                            <View className='bg-gray-50 p-2 items-center justify-center rounded-md w-10'>
                                <Ionicons name="heart" size={24} color="green" />
                            </View>
                        </View>
                        <View className='w-1/2 h-56 py-4'>
                            <Image
                                source={require("../../assets/images/image-1.jpg")}
                                className='w-full h-full rounded-xl relative '
                            />
                        </View>
                    </View>
                </View>
                <View>
                    <Text
                        className='text-gray-800 text-xl font-bold'>
                        Overview
                    </Text>
                    <ScrollView
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        className='flex-row flex-wrap py-2 w-full space-x-8'>
                        <View className='items-center'>
                            <FontAwesome name="sun-o" size={50} color="black" />
                            <Text className='text-[#013220] text-[14px] font-bold'>LIGHT</Text>
                            <Text className='text-[#0D986A] text-[12px] font-bold'>1</Text>
                        </View>
                        <View className='items-center'>
                            <MaterialCommunityIcons name="coolant-temperature" size={50} color="black" />
                            <Text className='text-[#013220] text-[14px] font-bold'>TEMPERATURE</Text>
                            <Text className='text-[#0D986A] text-[12px] font-bold'>2</Text>
                        </View>
                        <View className='items-center'>
                            <MaterialCommunityIcons name="air-humidifier" size={50} color="black" />
                            <Text className='text-[#013220] text-[14px] font-bold'>Humidity</Text>
                            <Text className='text-[#0D986A] text-[12px] font-bold'>3</Text>
                        </View>
                        <View className='items-center'>
                            <Entypo name="water" size={50} color="black" />
                            <Text className='text-[#013220] text-[14px] font-bold'>WATER</Text>
                            <Text className='text-[#0D986A] text-[12px] font-bold'>4</Text>
                        </View>
                    </ScrollView>
                </View>
                <View>
                    <Text className='text-xl text-gray-800 font-bold'>About</Text>
                    <Text className='text-gray-700 text-lg tracking-widest'>The Monstera Adansonii grows best in a well-draining Aroid mix using bark, perlite, peat moss, and charcoal. Keep your plant in bright indirect light and humidity .</Text>
                </View>
                <TouchableOpacity className='flex-row w-full bg-green-800 mt-2 rounded-xl py-2 px-4 justify-between'>
                    <SimpleLineIcons name="handbag" size={30} color="white" />
                    <Text className='flex-1 ml-4 text-xl text-green-50 font-bold tracking-widest'>Checkout</Text>
                    <Text className='text-xl text-green-50 font-bold'>$ 60</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}

export default productDetails

const styles = StyleSheet.create({})