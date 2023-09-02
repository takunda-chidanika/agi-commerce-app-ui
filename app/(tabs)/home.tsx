import { ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Image } from 'react-native';
import * as Animatable from 'react-native-animatable';
import TopBar from '../../components/TopBar';

//Home Page
const home = () => {
    return (
        <ScrollView className='flex-1 '>
            <View className='flex-1 mx-2'>
                {/* Top Bar */}
                <TopBar />
                {/* Welcome News */}
                <Animatable.View className='justify-center'
                    delay={50}
                    animation={"fadeInLeft"}
                >
                    <Text className='text-[28px]'>Today</Text>
                    <Text className='font-extrabold text-[28px]'>New & Popular</Text>
                </Animatable.View>
                {/* Banner */}
                <Animatable.View className='w-full h-72 rounded-2xl bg-gray-800'
                    delay={50}
                    animation={"fadeInRight"}
                >
                    <Image
                        source={require("../../assets/images/image-1.jpg")}
                        className='h-full w-full rounded-2xl object-contain relative opacity-60'
                    />
                    <View
                        className='absolute w-full h-full items-start justify-center px-6 space-y-4 mt-10'>
                        <Text className='text-green-50 font-extrabold text-[20px]'>New in</Text>
                        <Text className='text-green-50 text-[20px] font-extrabold tracking-widest w-4/5'>Nike SB Janoski QS Turbo Green Tie Dye Skate Shoes</Text>
                        <Text className='text-green-50 text-[14px] font-bold'>$89.95 USD</Text>
                    </View>
                </Animatable.View>
                {/* Categories 1*/}
                <Animatable.View className='container'
                    delay={100}
                    animation={"fadeInLeft"}
                >
                    <Text className='font-bold text-[20px] p-6'>Just Dropped</Text>
                    <ScrollView
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                    >
                        <View className='space-y-2 mx-4'>
                            <Image
                                source={require("../../assets/images/image-1.jpg")}
                                className='w-40 h-40 rounded-2xl object-contain'
                            />
                            <Text className='text-gray-800 text-[20px] font-extrabold'>Dose Media</Text>
                            <Text className='text-gray-800 text-[18px] font-bold'>$24.56</Text>
                        </View>

                        <View className='space-y-2 mx-4'>
                            <Image
                                source={require("../../assets/images/image-1.jpg")}
                                className='w-40 h-40 rounded-2xl object-contain'
                            />
                            <Text className='text-gray-800 text-[20px] font-extrabold'>Dose Media</Text>
                            <Text className='text-gray-800 text-[18px] font-bold'>$24.56</Text>
                        </View>

                        <View className='space-y-2 mx-4'>
                            <Image
                                source={require("../../assets/images/image-1.jpg")}
                                className='w-40 h-40 rounded-2xl object-contain'
                            />
                            <Text className='text-gray-800 text-[20px] font-extrabold'>Dose Media</Text>
                            <Text className='text-gray-800 text-[18px] font-bold'>$24.56</Text>
                        </View>
                    </ScrollView>
                </Animatable.View>
                {/* Categories 1*/}
                <Animatable.View className='container'
                    delay={100}
                    animation={"fadeInRight"}
                >
                    <Text className='font-bold text-[20px] p-6'>Fruit & Vegetables</Text>
                    <ScrollView
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                    >
                        <View className='space-y-2 mx-4'>
                            <Image
                                source={require("../../assets/images/image-1.jpg")}
                                className='w-40 h-40 rounded-2xl object-contain'
                            />
                            <Text className='text-gray-800 text-[20px] font-extrabold'>Dose Media</Text>
                            <Text className='text-gray-800 text-[18px] font-bold'>$24.56</Text>
                        </View>

                        <View className='space-y-2 mx-4'>
                            <Image
                                source={require("../../assets/images/image-1.jpg")}
                                className='w-40 h-40 rounded-2xl object-contain'
                            />
                            <Text className='text-gray-800 text-[20px] font-extrabold'>Dose Media</Text>
                            <Text className='text-gray-800 text-[18px] font-bold'>$24.56</Text>
                        </View>

                        <View className='space-y-2 mx-4'>
                            <Image
                                source={require("../../assets/images/image-1.jpg")}
                                className='w-40 h-40 rounded-2xl object-contain'
                            />
                            <Text className='text-gray-800 text-[20px] font-extrabold'>Dose Media</Text>
                            <Text className='text-gray-800 text-[18px] font-bold'>$24.56</Text>
                        </View>
                    </ScrollView>
                </Animatable.View>
            </View>
        </ScrollView>
    )
}

export default home

const styles = StyleSheet.create({})