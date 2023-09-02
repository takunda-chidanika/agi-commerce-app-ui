import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import TopBar from '../../components/TopBar'
import Slider from '@react-native-community/slider'

const subscriptions = () => {
    return (
        <View>
            <TopBar />
            <View className='mx-2'>
                <View>
                    <Text className='text-gray-800 text-xl font-extrabold mt-4'>Nutritional Summary</Text>
                    <View className='flex-row justify-between mt-4'>
                        <View className='w-3/5'>
                            <Text className='text-gray-600 text-lg font-bold'>Weight</Text>
                            <Text className='text-gray-700 text-xl'> 50 Kg</Text>
                        </View>
                        <View className='w-2/5'>
                            <View className='items-center p-2 bg-green-600 rounded-3xl'>
                                <Text className='text-green-50 text-bold text-lg'>-75 Kg</Text>
                            </View>
                        </View>
                    </View>
                    <View className='bg-green-400 w-full h-40 rounded-2xl mt-4 items-center justify-center'>
                        <Text className='text-3xl text-green-50 font-extrabold'>Nutritional Chart</Text>
                    </View>
                </View>
                <View>
                    <Text className='mt-4 text-xl font-bold text-gray-800'>For Portion 1</Text>
                    <View className='mt-4 space-y-4'>
                        <View className='flex-row justify-between'>
                            <Text className='text-gray-800 text-xl font-bold'>Protein</Text>
                            <Text className='text-gray-400 text-lg font-bold'>gram</Text>
                        </View>
                        <View>
                            <Slider
                                style={{ width: 400, height: 20 }}
                                minimumValue={0}
                                maximumValue={1}
                                minimumTrackTintColor="#159148"
                                maximumTrackTintColor="#159148"
                            />
                        </View>
                    </View>
                    <View className='mt-4 space-y-4'>
                        <View className='flex-row justify-between'>
                            <Text className='text-gray-800 text-xl font-bold'>Carbs</Text>
                            <Text className='text-gray-400 text-lg font-bold'>gram</Text>
                        </View>
                        <View>
                            <Slider
                                style={{ width: 400, height: 20 }}
                                minimumValue={0}
                                maximumValue={1}
                                minimumTrackTintColor="#159148"
                                maximumTrackTintColor="#159148"
                            />
                        </View>
                    </View>
                    <View className='mt-4 space-y-4'>
                        <View className='flex-row justify-between'>
                            <Text className='text-gray-800 text-xl font-bold'>Fat</Text>
                            <Text className='text-gray-400 text-lg font-bold'>gram</Text>
                        </View>
                        <View>
                            <Slider
                                style={{ width: 400, height: 20 }}
                                minimumValue={0}
                                maximumValue={1}
                                minimumTrackTintColor="#159148"
                                maximumTrackTintColor="#159148"
                            />
                        </View>
                    </View>
                    <View className='flex-row mt-4 justify-between'>
                        <Text className='text-lg text-gray-800 font-bold'>Total</Text>
                        <Text className='text-lg text-gray-600 font-bold'>104.6 calories</Text>
                    </View>
                </View>
                <View className='bg-green-700 px-4 py-4 rounded-3xl items-center mt-4'>
                    <Text className='text-green-50 font-bold text-xl tracking-widest'>Continue</Text>
                </View>
            </View>
        </View>
    )
}

export default subscriptions

const styles = StyleSheet.create({})