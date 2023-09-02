import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import React, { useState } from 'react'
import { TextInput } from 'react-native-gesture-handler';
import { Link, useNavigation } from 'expo-router';
import Checkbox from 'expo-checkbox';
import { AntDesign } from '@expo/vector-icons';
import * as Animatable from 'react-native-animatable';

const signup = () => {
    const [isChecked, setChecked] = useState(false);
    return (
        <View className='flex-1 bg-green-100'>
            <View
                style={{
                    flex: 2.5,
                }}
            >
                <Animatable.Image
                    delay={400}
                    animation={"bounceInDown"}
                    source={require("../../assets/images/image-1.jpg")}
                    className='w-full h-full'
                    style={{
                        borderBottomLeftRadius: 100,
                        borderBottomRightRadius: 100,
                    }}
                />
            </View>
            <Animatable.View
                delay={300}
                animation={'slideInUp'}
                className='items-center justify-between mx-8'
                style={{
                    flex: 7.5,
                }}
            >
                {/* logo name */}
                <View className='items-center justify-center mt-2'>
                    <Animatable.View
                        animation={'shake'}
                        delay={2000}
                        iterationCount={'infinite'}
                        iterationDelay={2000}
                    >
                        <MaterialCommunityIcons name="corn" size={50} color="#159148" />
                    </Animatable.View>
                    <Text className='text-[24px] font-bold text-[#159148]'>Green<Text className='text-[#98C13F]'>Genie</Text></Text>
                </View>
                {/* register form */}
                <View className='space-y-2'>
                    <View className='space-y-2 mt-6'>
                        <Text className='text-[16px] text-gray-600 text-normal px-2'>E-mail</Text>
                        <TextInput
                            className='text-[19px] px-4 py-2 w-full h-12'
                            placeholder='Enter E-mail'
                            style={{
                                borderRightWidth: 2,
                                borderLeftWidth: 2,
                                borderBottomWidth: 2,
                                borderRadius: 10,
                                borderColor: "#D9D9D9",
                                shadowColor: "#D9D9D9",
                                shadowOffset: {
                                    width: 0,
                                    height: 2,
                                },
                            }}
                        />
                    </View>
                    <View className='space-y-2 mt-6'>
                        <Text className='text-[16px] text-gray-600 text-normal px-2'>Password</Text>
                        <TextInput
                            className='text-[19px] px-4 py-2 w-full h-12'
                            placeholder='Enter Password'
                            secureTextEntry={true}
                            style={{
                                borderRightWidth: 2,
                                borderLeftWidth: 2,
                                borderBottomWidth: 2,
                                borderRadius: 10,
                                borderColor: "#D9D9D9",
                                shadowColor: "#D9D9D9",
                                shadowOffset: {
                                    width: 0,
                                    height: 2,
                                },
                            }}
                        />
                    </View>
                    <View className='space-y-2 mt-6'>
                        <Text className='text-[16px] text-gray-600 text-normal px-2'>Confirm Password</Text>
                        <TextInput
                            className='text-[19px] px-4 py-2 w-full h-12'
                            placeholder='Enter Password'
                            secureTextEntry={true}
                            style={{
                                borderRightWidth: 2,
                                borderLeftWidth: 2,
                                borderBottomWidth: 2,
                                borderRadius: 10,
                                borderColor: "#D9D9D9",
                                shadowColor: "#D9D9D9",
                                shadowOffset: {
                                    width: 0,
                                    height: 2,
                                },
                            }}
                        />
                    </View>
                    <View className='flex-row'>
                        <Checkbox
                            value={isChecked}
                            onValueChange={setChecked}
                            color={isChecked ? '#0D986A' : undefined}
                        />
                        <Text className='text-[14px] font-semibold text-[#013220] text-normal px-2'>
                            by signing up you agree to our
                            <Text className='font-bold text-green-600'> terms & CONDITIONS </Text>
                            of use and
                            <Text className='font-bold text-green-600'> privacy policy.</Text>
                        </Text>
                    </View>
                </View>
                <TouchableOpacity className='items-center justify-center w-full'>
                    <View className='bg-[#0D986A] w-full h-12 rounded-xl items-center justify-center mt-4 mx-4'>
                        <Text className='text-[#FFFFFF] text-[20px]'>Sign Up</Text>
                    </View>
                </TouchableOpacity>
                <View className='items-center justify-center'>
                    <Text className='text-[14px] text-gray-600 text-semibold px-2 mt-2'>Or Sign Up with</Text>
                    <Animatable.View className='flex-row space-x-2'
                        delay={500}
                        animation={'tada'}
                    >
                        <View className='flex-row items-center justify-center space-x-2 bg-green-300 py-4 px-8 rounded-xl'>
                            <AntDesign name="google" size={30} color="green" />
                            <Text className='font-bold text-[16px] tracking-widest'>Google</Text>
                        </View>
                        <View className='flex-row items-center justify-center space-x-2 bg-blue-800 py-4 px-8 rounded-xl'>
                            <AntDesign name="facebook-square" size={24} color="white" />
                            <Text className='font-bold text-[16px] tracking-widest'>Facebook</Text>
                        </View>
                    </Animatable.View>

                </View>
                <View className='items-center justify-center flex-row mt-4'>
                    <Text className='text-gray-600 text-[15px]'>Already have you an account? </Text>
                    <Link href={'/login'}>
                        <View>
                            <Text className='text-[#013220] font-bold underline'> Login</Text>
                        </View>
                    </Link>
                </View>
            </Animatable.View>

        </View>
    )
}

export default signup

const styles = StyleSheet.create({})