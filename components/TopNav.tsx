import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import * as Animatable from 'react-native-animatable';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from 'expo-router/src/useNavigation';

const TopNav = () => {
    const navigation = useNavigation();

    return (
        <View className='flex-row sticky top-0 items-center justify-between mt-4 mx-2'>
            <TouchableOpacity
                onPress={navigation.goBack()}
            >
                <Ionicons
                    name="arrow-back" size={30} color="black" />
            </TouchableOpacity>
            <View className='items-center justify-center mt-2'>
                <Animatable.View
                    animation={'shake'}
                    delay={5000}
                    iterationCount={'infinite'}
                    iterationDelay={5000}
                >
                    <MaterialCommunityIcons name="corn" size={30} color="#159148" />
                </Animatable.View>
                <Text className='text-[24px] font-bold text-[#159148]'>Green<Text className='text-[#98C13F]'>Genie</Text></Text>
            </View>
            <MaterialIcons name="circle-notifications" size={30} color="black" />
        </View>
    )
}

export default TopNav

const styles = StyleSheet.create({})