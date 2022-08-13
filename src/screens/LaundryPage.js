import {View, Text, Image, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Laundry from '../assets/img/laundry.jpg';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import LaundryService from '../components/LaundryService';

const LaundryPage = () => {
  const navigation = useNavigation();
  navigation.canGoBack();

  return (
    <View className="h-full bg-pink-200">
      <SafeAreaView>
        <View className="">
          <Image source={Laundry} className="h-60 w-full rounded-t-2xl" />
          <View className="bg-white mx-5 p-3 rounded-lg absolute right-0 left-0 -bottom-5 shadow-lg">
            <View className="flex-1">
              <View className="flex flex-row justify-between">
                <Text className="text-lg font-medium">Chamko Laundry</Text>
                <View className="flex flex-row items-center">
                  <View className="h-3 w-3 bg-green-500 mr-2"></View>
                  <Text>Open</Text>
                </View>
              </View>
              <View className="flex flex-row">
                <MaterialCommunityIcons name="star" color="#DB2777" size={15} />
                <MaterialCommunityIcons name="star" color="#DB2777" size={15} />
                <MaterialCommunityIcons name="star" color="#DB2777" size={15} />
                <MaterialCommunityIcons name="star" color="#DB2777" size={15} />
                <MaterialCommunityIcons
                  name="star-outline"
                  color="#DB2777"
                  size={15}
                />
                <Text className="ml-2">4.5</Text>
              </View>
              <View className="flex flex-row items-center mt-2">
                <MaterialCommunityIcons
                  name="google-maps"
                  color="#DB2777"
                  size={15}
                />
                <Text className="ml-1">Motera</Text>
              </View>
              <View className="flex flex-row justify-between items-center">
                <View className="flex flex-row items-center mt-2">
                  <MaterialCommunityIcons
                    name="clock"
                    color="#DB2777"
                    size={15}
                  />
                  <Text className="ml-1">09:00 AM - 07:00 PM</Text>
                </View>
                <Text className="mt-2 text-pink-600 font-medium ">
                  More Info
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View className="bg-white -z-10 flex pt-10 pb-5 rounded-b-2xl">
          <LaundryService />
        </View>

        
      </SafeAreaView>
    </View>
  );
};

export default LaundryPage;
