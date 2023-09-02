import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import TopBar from '../../components/TopBar'
import { FontAwesome5 } from '@expo/vector-icons';
import { TextInput } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';
import * as Animatable from 'react-native-animatable';
import { categories, popular_plants } from '../../constants';
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { Link, useNavigation } from 'expo-router';

const eCommerce = () => {
    const [activeCategory, setActiveCategory] = useState("All");
    return (
        <ScrollView className='bg-green-100'>
            <TopBar />
            <View className='mx-2'>
                <View className='bg-[#F9D7BD] flex-row rounded-xl p-4 space-x-2'>
                    <View className='w-1/2'>
                        <Image source={require('../../assets/images/kid.webp')}
                            className='w-full h-64 rounded-md oject-contain'
                        />
                    </View>
                    <View className='w-1/2 justify-center space-y-4'>
                        <Text className='text-gray-800 text-3xl font-bold'>Exclusive Offer</Text>
                        <Text className='text-gray-700 text-xl tracking-widest'>Get your 1st plant
                            @ 60% off</Text>
                    </View>
                </View>
                <View className='flex-row mt-4 space-x-2 py-2 px-4 items-center bg-green-50 rounded-xl'>
                    <FontAwesome5 name="search-dollar" size={30} color="black" />
                    <TextInput
                        className='flex-1 h-12 font-medium text-xl' placeholder='search'
                    />
                    <Ionicons name="filter-sharp" size={30} color="black" />
                </View>
                {/* categories */}
                <ScrollView
                    className='mt-6 pt-6'
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={{
                        paddingHorizontal: 20
                    }}>
                    {
                        categories.map((category, index) => {
                            let isActive = category == activeCategory;
                            let textClass = isActive ? 'font-bold underline' : ''
                            let viewClass = isActive ? 'border-dashed border-2 border-gray-600 rounded-2xl' : ''
                            return (
                                <Animatable.View
                                    delay={index * 120}
                                    animation={'slideInDown'}
                                    className={`${viewClass} p-2 rounded-2xl`}
                                    key={index}>
                                    <TouchableOpacity
                                        className='mr-9 items-center'
                                        onPress={() => {
                                            setActiveCategory(category)
                                        }}
                                    >
                                        <Image
                                            source={require('../../assets/images/indoor.png')}
                                            className='h-16 w-16 object-contain rounded-xl'
                                        />
                                        <Text className={`text-gray-600 text-base tracking-widest + ${textClass}`}>
                                            {category}
                                        </Text>
                                    </TouchableOpacity>
                                </Animatable.View>
                            )
                        })
                    }
                </ScrollView>
                <View className='mt-4 space-y-4'>
                    {
                        popular_plants.map((plant, index) => {
                            return (
                                <View
                                    key={index}
                                    className='flex-row bg-[#DCE8D6] rounded-2xl'>
                                    <View className='w-4/12 h-32'>
                                        <Image
                                            source={require("../../assets/images/image-1.jpg")}
                                            className='w-full h-full rounded-xl relative '
                                        />
                                        <View className='bg-green-700 absolute bottom-4 rounded-xl p-2 left-0'>
                                            <AntDesign name="hearto" size={24} color="white" />
                                        </View>
                                    </View>
                                    <View className='w-5/12 space-y-2 mx-4'>
                                        <Text className='text-gray-800 text-xl font-bold'>Monstera Adansonii</Text>
                                        <Text className='text-gray-700 text-lg tracking-widest'>Monstera family</Text>
                                        <Text className='text-gray-800 text-xl font-bold'>$ 15</Text>
                                    </View>
                                    <Link
                                        href={'/(screens)/cartFinal'}
                                        asChild>
                                        <TouchableOpacity

                                            className='w-2/12 bg-green-300 justify-center items-center rounded-l-full'>
                                            <Entypo name="plus" size={50} color="white" />
                                        </TouchableOpacity>
                                    </Link>

                                </View>
                            )
                        })
                    }
                    {/* plant card */}

                </View>
            </View>
        </ScrollView >
    )
}

export default eCommerce

const styles = StyleSheet.create({})