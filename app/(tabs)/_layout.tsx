import { Tabs } from 'expo-router/tabs';
import { StyleSheet, Text, View } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function AppLayout() {
    return (
        <Tabs
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle: {
                    position: 'absolute',
                    borderTopLeftRadius: 50,
                    borderTopRightRadius: 50,
                    elevation: 0,
                    backgroundColor: '#DCE8D6',
                    height: 90,
                    ...styles
                }

            }}
        >
            <Tabs.Screen name='home'
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View className='items-center justify-center top-[5px] space-y-1'>
                            <Entypo name="home" color="#013220" size={30} />
                            {
                                focused &&
                                <View className='w-5 h-1 bg-[#013220] rounded-2xl' />
                            }
                        </View>
                    )
                }} />
            <Tabs.Screen name='health'
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View className='items-center justify-center top-[5px] space-y-1'>
                            <Entypo name="tree" size={30} color="#013220" />
                            {
                                focused &&
                                <View className='w-5 h-1 bg-[#013220] rounded-2xl' />
                            }
                        </View>
                    )
                }} />
            <Tabs.Screen name='subscriptions'
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View className='items-center justify-center top-[5px] space-y-1'>
                            <MaterialCommunityIcons name="crown-circle-outline" size={60} color="#EED034" />
                            <View className='w-5 h-1 bg-[#EED034] rounded-2xl' />
                        </View>
                    )
                }} />
            <Tabs.Screen name='eCommerce'
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View className='items-center justify-center top-[5px] space-y-1'>
                            <FontAwesome5 name="store" size={30} color="#013220" />
                            {
                                focused &&
                                <View className='w-5 h-1 bg-[#013220] rounded-2xl' />
                            }
                        </View>
                    )
                }} />
            <Tabs.Screen name='recommendations'
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View className='items-center justify-center top-[5px] space-y-1'>
                            <AntDesign name="tool" size={30} color="#013220" />
                            {
                                focused &&
                                <View className='w-5 h-1 bg-[#013220] rounded-2xl' />
                            }
                        </View>
                    )
                }} />


        </Tabs>
    );
}

const styles = StyleSheet.create({
    shadow: {
        shadowColor: '#75f5df0',
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        elevation: 5,
    }
})