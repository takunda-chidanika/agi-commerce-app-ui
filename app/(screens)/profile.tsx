import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import TopBar from '../../components/TopBar'
import { Image } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';


const profile = () => {
    return (
        <ScrollView>
            <TopBar />
            <View className='mx-2 mt-4'>
                <View className='flex-row space-x-2'>
                    <View className='w-2/5 items-center'>
                        <View className='h-32 w-32 rounded-full'>
                            <Image
                                source={require("../../assets/images/image-1.jpg")}
                                className='h-full w-full rounded-full'
                            />
                        </View>
                        <Text className='text-gray-800 text-lg font-bold mt-2'>Green Genie</Text>
                    </View>
                    <View className='w-2/5 space-y-4'>
                        <Text className='text-gray-800 text-lg font-bold'>Takunda Chidanika</Text>
                        <Text className='text-gray-800 text-lg font-bold'>08 April 1999</Text>
                        <View className='p-2 bg-green-700 rounded-xl items-center'>
                            <Text className='text-xl text-green-50'>Edit Profile</Text>
                        </View>
                    </View>
                    <View className='w-1/5'>
                        <MaterialCommunityIcons name="dots-grid" size={24} color="black" />
                    </View>
                </View>
                <View className='mx-8 space-y-6 mt-8'>
                    <View className='flex-row justify-between'>
                        <View className='w-1/5 '>
                            <MaterialIcons name="attach-money" size={30} color="black" />
                        </View>
                        <View className='w-3/5'>
                            <Text className='text-gray-800 text-lg font-bold '>Balance</Text>
                        </View>
                        <View className='w-1/5'>
                            <AntDesign name="right" size={20} color="black" />
                        </View>
                    </View>
                    <View className='flex-row justify-between'>
                        <View className='w-1/5 '>
                            <AntDesign name="database" size={30} color="black" />
                        </View>
                        <View className='w-3/5'>
                            <Text className='text-gray-800 text-lg font-bold '>Sync</Text>
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
                            <FontAwesome name="language" size={30} color="black" />
                        </View>
                        <View className='w-3/5'>
                            <Text className='text-gray-800 text-lg font-bold '>Language</Text>
                        </View>
                        <View className='w-1/5'>
                            <AntDesign name="right" size={20} color="black" />
                        </View>
                    </View>
                    <View className='flex-row justify-between'>
                        <View className='w-1/5 '>
                            <MaterialIcons name="security" size={30} color="black" />
                        </View>
                        <View className='w-3/5'>
                            <Text className='text-gray-800 text-lg font-bold '>Security</Text>
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
                            <AntDesign name="infocirlceo" size={30} color="black" />
                        </View>
                        <View className='w-3/5'>
                            <Text className='text-gray-800 text-lg font-bold'>About</Text>
                        </View>
                        <View className='w-1/5'>
                            <AntDesign name="right" size={20} color="black" />
                        </View>
                    </View>
                    <View className='flex-row justify-between'>
                        <View className='w-1/5 '>
                            <MaterialIcons name="feedback" size={30} color="black" />
                        </View>
                        <View className='w-3/5'>
                            <Text className='text-gray-800 text-lg font-bold '>Feedback</Text>
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

export default profile

const styles = StyleSheet.create({})