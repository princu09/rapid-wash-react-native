import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {useStateContext} from '../context/ContextProvider';

const LaundryService = () => {
  const {selectGender, setSelectGender} = useStateContext();

  return (
    <View className="justify-around flex flex-row">
      {selectGender == 'Wash + Iron' ? (
        <TouchableOpacity className="flex items-center">
          <View className="bg-pink-700 h-5 w-5 border border-black rounded"></View>
          <Text className="mt-2 font-medium">Wash + Iron</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          className="flex items-center"
          onPress={() => setSelectGender('Wash + Iron')}>
          <View className="bg-pink-200 h-5 w-5 border border-black rounded"></View>
          <Text className="mt-2 font-medium">Wash + Iron</Text>
        </TouchableOpacity>
      )}

      {selectGender == 'Iron' ? (
        <TouchableOpacity className="flex items-center">
          <View className="bg-pink-700 h-5 w-5 border border-black rounded"></View>
          <Text className="mt-2 font-medium">Iron</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          className="flex items-center"
          onPress={() => setSelectGender('Iron')}>
          <View className="bg-pink-200 h-5 w-5 border border-black rounded"></View>
          <Text className="mt-2 font-medium">Iron</Text>
        </TouchableOpacity>
      )}

      {selectGender == 'Dry Cleaning' ? (
        <TouchableOpacity className="flex items-center">
          <View className="bg-pink-700 h-5 w-5 border border-black rounded"></View>
          <Text className="mt-2 font-medium">Dry Cleaning</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          className="flex items-center"
          onPress={() => setSelectGender('Dry Cleaning')}>
          <View className="bg-pink-200 h-5 w-5 border border-black rounded"></View>
          <Text className="mt-2 font-medium">Dry Cleaning</Text>
        </TouchableOpacity>
      )}

      {selectGender == 'Wash' ? (
        <TouchableOpacity className="flex items-center">
          <View className="bg-pink-700 h-5 w-5 border border-black rounded"></View>
          <Text className="mt-2 font-medium">Wash</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          className="flex items-center"
          onPress={() => setSelectGender('Wash')}>
          <View className="bg-pink-200 h-5 w-5 border border-black rounded"></View>
          <Text className="mt-2 font-medium">Wash</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default LaundryService;
