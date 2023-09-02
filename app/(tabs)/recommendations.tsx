import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import TopBar from '../../components/TopBar'
import * as Animatable from 'react-native-animatable';
import { categories, popular_plants } from '../../constants';
import { AntDesign } from '@expo/vector-icons';
import PopularCard from '../../components/PopularCard';

const recommendations = () => {
    const [activeCategory, setActiveCategory] = useState("All")
    return (
        <ScrollView>
            <TopBar />
            <View className='mx-2'>
                <Text className='text-gray-800 font-extrabold text-[20px] mt-4'>Recommendations</Text>
                {/* categories */}
                <ScrollView
                    className='mt-6 pt-6 max-h-20'
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={{
                        paddingHorizontal: 20
                    }}>
                    {
                        categories.map((category, index) => {
                            let isActive = category == activeCategory;
                            let textClass = isActive ? 'font-bold text-green-50' : ''
                            let viewClass = isActive ? 'bg-[#0D986A]' : ''
                            return (
                                <Animatable.View
                                    delay={index * 120}
                                    animation={'slideInDown'}
                                    className={`${viewClass} p-2 rounded-2xl`}
                                    key={index}>
                                    <TouchableOpacity
                                        className='mr-9'
                                        onPress={() => {
                                            setActiveCategory(category)
                                        }}
                                    >
                                        <Text className={`text-gray-600 text-base tracking-widest + ${textClass}`}>
                                            {category}
                                        </Text>
                                    </TouchableOpacity>
                                </Animatable.View>
                            )
                        })
                    }
                </ScrollView>
                <View className='mt-4'>
                    <View className='flex-row space-x-2'>
                        <Text className='text-gray-800 font-medium text-[20px]'>
                            Popularity
                        </Text>
                        <AntDesign name="arrowdown" size={24} color="gray" />
                    </View>

                    {
                        popular_plants.map((plant, index) => {
                            return (
                                <PopularCard key={index} item={plant} />
                            )
                        })
                    }
                </View>
            </View>
        </ScrollView>
    )
}

export default recommendations

const styles = StyleSheet.create({})