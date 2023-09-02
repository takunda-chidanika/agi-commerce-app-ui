import { ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import TopBar from '../../components/TopBar';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { Image } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { plantHealth } from '../../constants';

const health = () => {
    return (
        <ScrollView className='space-y-4'>
            <TopBar />
            {
                plantHealth.map((plant, index) => {
                    return (
                        <Animatable.View className='flex-1 mx-2'
                            key={index}
                            delay={50}
                            animation={"fadeInLeft"}
                        >
                            {/* Plant Health */}
                            <View className='bg-[#DEEAD8] p-4 h-full'
                                style={{
                                    borderBottomLeftRadius: 80,
                                }}
                            >

                                <View className='flex-row justify-between'>
                                    <View>
                                        <Text className='text-[20px] text-[#013220] font-extrabold'>{plant.name}</Text>
                                        <Text className='text-[15px] text-[#476C5F]'>Indoor</Text>
                                    </View>
                                    <FontAwesome name="battery-4" size={24} color="green" />
                                </View>
                                <View className='mt-4'>
                                    <Text className='text-[#013220] text-[15px]'>Overview</Text>
                                    <View className='mt-4 flex-row '>
                                        {/* Overview Icons */}
                                        <View className='w-1/2 px-2'>
                                            <View className='flex-row flex-wrap py-2 w-full'>
                                                <View className='items-center w-1/2'>
                                                    <FontAwesome name="sun-o" size={50} color="black" />
                                                    <Text className='text-[#013220] text-[14px] font-bold'>LIGHT</Text>
                                                    <Text className='text-[#0D986A] text-[12px] font-bold'>{plant.light}</Text>
                                                </View>
                                                <View className='items-center w-1/2'>
                                                    <MaterialCommunityIcons name="coolant-temperature" size={50} color="black" />
                                                    <Text className='text-[#013220] text-[14px] font-bold'>TEMPERATURE</Text>
                                                    <Text className='text-[#0D986A] text-[12px] font-bold'>{plant.temperature}</Text>
                                                </View>
                                                <View className='items-center w-1/2'>
                                                    <MaterialCommunityIcons name="air-humidifier" size={50} color="black" />
                                                    <Text className='text-[#013220] text-[14px] font-bold'>Humidity</Text>
                                                    <Text className='text-[#0D986A] text-[12px] font-bold'>{plant.humidity}</Text>
                                                </View>
                                                <View className='items-center w-1/2'>
                                                    <Entypo name="water" size={50} color="black" />
                                                    <Text className='text-[#013220] text-[14px] font-bold'>WATER</Text>
                                                    <Text className='text-[#0D986A] text-[12px] font-bold'>{plant.water}</Text>
                                                </View>
                                            </View>
                                            <View className='flex-row p-2 items-center w-full space-1x-1 bg-[#FFECDD] rounded-2xl mb-2'>
                                                <FontAwesome name="leaf" size={24} color="black" />
                                                <Text className='tracking-wider'>Your plant is healthy</Text>
                                            </View>
                                        </View>
                                        {/* Plant Image */}
                                        <View className='w-1/2'>
                                            <Image
                                                source={require("../../assets/images/image-1.jpg")}
                                                className='h-4/5 w-full rounded-2xl relative mb-4'
                                            />
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </Animatable.View>
                    )
                })
            }
        </ScrollView>
    )
}

export default health

const styles = StyleSheet.create({})