import {View, Text, Image, Dimensions, TouchableOpacity} from 'react-native';
import Laundry from '../assets/img/laundry.jpg';
import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';

const LaundryList = ({name, address, time}) => {
  const navigation = useNavigation(); 
  return (
    <TouchableOpacity
      className="bg-white p-3 flex flex-row items-center gap-2 rounded-md my-2"
      onPress={() => navigation.navigate('LaundryPage')}>
      <Image source={Laundry} className="w-20 h-20 rounded-md" />
      <View className="flex-1">
        <View className="flex flex-row justify-between">
          <Text className="text-lg font-medium">{name}</Text>
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
          <Text className="ml-1">{address}</Text>
        </View>
        <View className="flex flex-row items-center mt-2">
          <MaterialCommunityIcons name="clock" color="#DB2777" size={15} />
          <Text className="ml-1">{time}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default LaundryList;
