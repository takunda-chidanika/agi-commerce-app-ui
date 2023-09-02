import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import TopBar from '../../components/TopBar'
import { MaterialIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

const navBar = () => {
    return (
        <ScrollView>
            <TopBar />
            <View className='mx-2 mt-4'>
                <View className='mx-8 space-y-8 mt-16'>
                    <View className='flex-row justify-between'>
                        <View className='w-1/5 '>
                            <AntDesign name="home" size={30} color="black" />
                        </View>
                        <View className='w-3/5'>
                            <Text className='text-gray-800 text-lg font-bold '>Home</Text>
                        </View>
                        <View className='w-1/5'>
                            <AntDesign name="right" size={20} color="black" />
                        </View>
                    </View>
                    <View className='flex-row justify-between'>
                        <View className='w-1/5 '>
                            <MaterialIcons name="healing" size={30} color="black" />
                        </View>
                        <View className='w-3/5'>
                            <Text className='text-gray-800 text-lg font-bold '>Plant Health </Text>
                        </View>
                        <View className='w-1/5'>
                            <AntDesign name="right" size={20} color="black" />
                        </View>
                    </View>
                    <View
                        style={{
                            borderBottomColor: 'black',
                            borderBottomWidth: 1,
                        }}
                    />
                    <View className='flex-row justify-between'>
                        <View className='w-1/5 '>
                            <FontAwesome5 name="crown" size={30} color="gold" />
                        </View>
                        <View className='w-3/5'>
                            <Text className='text-gray-800 text-lg font-bold '>Nutritional Summary</Text>
                        </View>
                        <View className='w-1/5'>
                            <AntDesign name="right" size={20} color="black" />
                        </View>
                    </View>
                    <View className='flex-row justify-between'>
                        <View className='w-1/5 '>
                            <FontAwesome5 name="store" size={30} color="black" />
                        </View>
                        <View className='w-3/5'>
                            <Text className='text-gray-800 text-lg font-bold '>Plant Store</Text>
                        </View>
                        <View className='w-1/5'>
                            <AntDesign name="right" size={20} color="black" />
                        </View>
                    </View>
                    <View
                        style={{
                            borderBottomColor: 'black',
                            borderBottomWidth: 1,
                        }}
                    />
                    <View className='flex-row justify-between'>
                        <View className='w-1/5 '>
                            <MaterialIcons name="recommend" size={30} color="black" />
                        </View>
                        <View className='w-3/5'>
                            <Text className='text-gray-800 text-lg font-bold'>Recommendations</Text>
                        </View>
                        <View className='w-1/5'>
                            <AntDesign name="right" size={20} color="black" />
                        </View>
                    </View>
                    <View className='flex-row justify-between'>
                        <View className='w-1/5 '>
                            <MaterialIcons name="switch-account" size={30} color="black" />
                        </View>
                        <View className='w-3/5'>
                            <Text className='text-gray-800 text-lg font-bold '>Account</Text>
                        </View>
                        <View className='w-1/5'>
                            <AntDesign name="right" size={20} color="black" />
                        </View>
                    </View>
                    <View
                        style={{
                            borderBottomColor: 'black',
                            borderBottomWidth: 1,
                        }}
                    />
                    <View className='flex-row justify-between'>
                        <View className='w-1/5 '>
                            <MaterialIcons name="logout" size={30} color="black" />
                        </View>
                        <View className='w-3/5'>
                            <Text className='text-gray-800 text-lg font-bold '>Logout</Text>
                        </View>
                        <View className='w-1/5'>
                            <AntDesign name="right" size={20} color="black" />
                        </View>
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}

export default navBar

const styles = StyleSheet.create({})