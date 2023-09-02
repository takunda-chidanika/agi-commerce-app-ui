import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import React from 'react'
import { TextInput } from 'react-native-gesture-handler';
import { Link } from 'expo-router';
import * as Animatable from 'react-native-animatable';

const login = () => {

    return (
        <View className='flex-1 bg-green-100'>
            <View
                style={{
                    flex: 2,
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
                className='items-center justify-between mx-8 space-y-2'
                style={{
                    flex: 3.
                }}
            >
                <View className='flex-1 items-center justify-between mt-2 w-full'>
                    {/* Logo Name */}
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
                    {/* Welcome back message */}
                    <View className='space-y-2'>
                        <Text className='text-gray-800 font-semibold text-[30px]'>Welcome Back</Text>
                        <Text className='text-gray-800 text-[16px]'>Log in to your account</Text>
                    </View>
                    {/* login form */}
                    <View className='space-y-2 w-full px-6'>
                        <View className='space-y-2 mt-4'>
                            <Text className='text-[16px]text-normal px-2'>User Name</Text>
                            <TextInput
                                className='text-[19px] px-4 py-2 w-full h-12'
                                placeholder='tjchidanika@gmail.com'
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
                        <View className='space-y-2 mt-4'>
                            <Text className='text-[16px] text-normal px-2'>Password</Text>
                            <TextInput
                                className='text-[19px] px-4 py-2 w-full h-12'
                                placeholder='password'
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
                        <View className='items-end'>
                            <Text className='text-[14px] font-semibold text-[#013220] text-normal px-2'>Forgot Password?</Text>
                        </View>
                        <Link href={'/home'} asChild>
                            <TouchableOpacity className='items-center justify-center'>
                                <View className='bg-[#0D986A] w-40 h-12 rounded-xl items-center justify-center mx-4'>
                                    <Text className='text-[#FFFFFF] text-[20px]'>Log In</Text>
                                </View>
                            </TouchableOpacity>
                        </Link>
                        <View className='items-center justify-center flex-row'>
                            <Text className='text-gray-600 text-[15px]'>Don’t have an account?</Text>
                            <Link href={'/signup'}>
                                <View>
                                    <Text className='text-[#013220] font-bold underline'> Signup</Text>
                                </View>
                            </Link>
                        </View>
                    </View>
                </View>

            </Animatable.View>

        </View>
    )
}

export default login

const styles = StyleSheet.create({})