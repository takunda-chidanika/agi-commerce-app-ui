import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Image } from 'react-native'
import { AntDesign } from '@expo/vector-icons';

const PopularCard = ({ item }: any) => {
    return (
        <View className='flex-row rounded-xl m-2'>
            <View className='w-1/3 h-32'>
                <Image
                    source={require("../assets/images/image-1.jpg")}
                    className='w-full h-full rounded-xl relative '
                />
                <View className='bg-gray-100 absolute bottom-4 rounded-xl p-2 right-0'>
                    <AntDesign name="hearto" size={24} color="black" />
                </View>
            </View>
            <View className='w-1/3 mx-4 my-4 space-y-2'>
                <Text className='text-gray-800 tracking-widest text-2xl font-bold text-clip'>{item.name}</Text>
                <Text className='text-gray-600 tracking-widest text-lg'>From {item.length}</Text>
                <Text className='text-gray-800 tracking-widest text-xl font-bold'>{item.price}s $</Text>
            </View>
            <View className='w-1/3 flex-row mx-4 my-4 space-x-2 justify-center'>
                <AntDesign name="star" size={24} color="#FFBB56" />
                <Text className='text-[#FFBB56] font-bold '>{item.stars}</Text>
            </View>
        </View>
    )
}

export default PopularCard

const styles = StyleSheet.create({})