import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import TopNav from '../../components/TopNav'
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { TextInput } from 'react-native-gesture-handler';
import { SimpleLineIcons } from '@expo/vector-icons';


const cartFinal = () => {
    return (
        <ScrollView>
            <TopNav />
            <View className='mx-2'>
                <Text className='text-gray-800 text-xl font-bold mt-4'>Shopping Bag</Text>
                <View className='flex-row space-x-2 bg-[#DCE8D6] rounded-lg mt-2 p-4'>
                    <View className='w-2/5'>
                        <Image
                            source={require("../../assets/images/image-1.jpg")}
                            className='w-full h-36 rounded-2xl relative'
                        />
                        <View className='bg-gray-200 p-1 absolute rounded-lg bottom-0 left-0'>
                            <AntDesign name="heart" size={30} color="green" />
                        </View>
                    </View>
                    <View className='w-2/5 space-y-3'>
                        <Text className='text-gray-800 text-xl font-bold'>Monstera Adansonii</Text>
                        <Text className='text-gray-600 text-lg font-bold'>Monstera family</Text>
                        <View className='flex-row space-x-2'>
                            <View className='p-1 bg-gray-900 rounded-xl'>
                                <AntDesign name="pluscircle" size={26} color="white" />
                            </View>
                            <Text className='text-gray-900 text-xl font-bold'>1</Text>
                            <View className='p-1 bg-gray-900 rounded-lg'>
                                <AntDesign name="minuscircle" size={26} color="white" />
                            </View>
                        </View>
                    </View>
                    <View className='space-y-20'>
                        <Text className='text-gray-900 text-xl font-bold'>$30</Text>
                        <FontAwesome5 name="trash" size={24} color="black" />
                    </View>
                </View>
                <View className='flex-row space-x-2 bg-[#DCE8D6] rounded-lg mt-2 p-4'>
                    <View className='w-2/5'>
                        <Image
                            source={require("../../assets/images/image-1.jpg")}
                            className='w-full h-36 rounded-2xl relative'
                        />
                        <View className='bg-gray-200 p-1 absolute rounded-lg bottom-0 left-0'>
                            <AntDesign name="heart" size={30} color="green" />
                        </View>
                    </View>
                    <View className='w-2/5 space-y-3'>
                        <Text className='text-gray-800 text-xl font-bold'>Monstera Adansonii</Text>
                        <Text className='text-gray-600 text-lg font-bold'>Monstera family</Text>
                        <View className='flex-row space-x-2'>
                            <View className='p-1 bg-gray-900 rounded-xl'>
                                <AntDesign name="pluscircle" size={26} color="white" />
                            </View>
                            <Text className='text-gray-900 text-xl font-bold'>1</Text>
                            <View className='p-1 bg-gray-900 rounded-lg'>
                                <AntDesign name="minuscircle" size={26} color="white" />
                            </View>
                        </View>
                    </View>
                    <View className='space-y-20'>
                        <Text className='text-gray-900 text-xl font-bold'>$30</Text>
                        <FontAwesome5 name="trash" size={24} color="black" />
                    </View>
                </View>
                <View className='mt-2 space-y-4'>
                    <View className='flex-row items-center justify-between'>
                        <View className='w-1/3'>
                            <AntDesign name="checkcircle" size={50} color="#0D986A" />
                        </View>
                        <View className='w-1/3'>
                            <Text className='text-gray-900 text-xl font-bold'>Apply Coupon</Text>
                        </View>
                        <View className='w-1/3'>
                            <TextInput
                                className='text-[19px] px-6 py-4 w-full h-12'
                                placeholder='coupon code'
                                style={{
                                    borderBottomWidth: 2,
                                    borderRadius: 10,
                                    borderColor: "#0D986A",
                                    shadowOffset: {
                                        width: 0,
                                        height: 2,
                                    },
                                }}
                            />
                        </View>
                    </View>
                    <View className='flex-row items-center justify-between'>
                        <View className='w-2/6'>
                            <FontAwesome5 name="truck-moving" size={50} color="#0D986A" />
                        </View>
                        <View className='w-3/6'>
                            <View className='flex-row items-center'>
                                <View className='w-1/2'>
                                    <Text className='text-xl text-gray-900 font-bold'>Delivery</Text>
                                </View>
                                <View className='w-1/2 h-2 bg-green-500'>
                                    <View className='bg-green-800 h-full w-1/2' />
                                </View>
                            </View>
                            <Text className='text-lg font-medium'>
                                Order above $50 to get Free Delivery
                                <Text className='text-lg font-bold text-green-400'> Shop for more $20</Text>
                            </Text>
                        </View>
                        <View className='w-1/6 justify-center px-2'>
                            <Text className='text-xl font-bold text-gray-600'>$30</Text>
                        </View>
                    </View>
                    <View>
                        <View className='flex-row justify-between'>
                            <Text className='text-xl text-green-600'>Saved for later</Text>
                            <Text className='text-xl text-green-600'>3 items</Text>
                        </View>
                        <View className='flex-row space-x-4 bg-[#FFEDCA] p-4 rounded-2xl'>
                            <View className='w-3/12'>
                                <Image
                                    source={require("../../assets/images/image-1.jpg")}
                                    className='w-full h-20 rounded-2xl relative'
                                />
                            </View>
                            <View className='w-6/12 '>
                                <Text className='text-xl font-bold text-gray-900'>Large Snake Zylanica</Text>
                                <View className='flex-row space-x-2'>
                                    <View className='p-1 bg-gray-900 rounded-xl'>
                                        <AntDesign name="pluscircle" size={26} color="white" />
                                    </View>
                                    <Text className='text-gray-900 text-xl font-bold'>1</Text>
                                    <View className='p-1 bg-gray-900 rounded-lg'>
                                        <AntDesign name="minuscircle" size={26} color="white" />
                                    </View>
                                </View>
                            </View>
                            <View className='w-3/12 space-y-4'>
                                <Text className='text-gray-900 text-xl font-bold'>$ 60</Text>
                                <Text className='text-green-600 text-lg font-bold'>move to cart</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <View className='flex-row bg-green-800 mt-2 rounded-xl mx-6 py-2 px-4 justify-between'>
                    <SimpleLineIcons name="handbag" size={30} color="white" />
                    <Text className='flex-1 ml-4 text-xl text-green-50 font-bold tracking-widest'>Checkout</Text>
                    <Text className='text-xl text-green-50 font-bold'>$ 60</Text>
                </View>
            </View>
        </ScrollView>
    )
}

export default cartFinal

const styles = StyleSheet.create({})