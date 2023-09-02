import { StyleSheet, Text, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import React from 'react';
import * as Animatable from 'react-native-animatable';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

const TopBar = () => {
    return (
        <View className='flex-row sticky top-0 items-center justify-between mt-4 mx-2'>
            <AntDesign name="menuunfold" size={30} color="black" />
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
            <Ionicons name="notifications-outline" size={24} color="black" />
        </View>
    )
}

export default TopBar

const styles = StyleSheet.create({})