import {View, Text, TouchableOpacity, Image, ScrollView} from 'react-native';
import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import WashIron from '../assets/img/washIron.png';
import Iron from '../assets/img/iron.png';
import DryClean from '../assets/img/dryClean.png';
import Wash from '../assets/img/wash.png';
import Laundry from '../assets/img/laundry.jpg';

const Home = () => {
  return (
    <ScrollView>
      <View className="bg-white h-full">
        <View className="bg-pink-100 rounded-t-[30px] h-44 mt-3 pt-5 px-3">
          <View className="flex flex-row justify-between">
            <Text className="font-medium my-2 text-slate-600">
              Today 20 , Jun , 2022
            </Text>
            <TouchableOpacity>
              <MaterialCommunityIcons name="magnify" color="black" size={25} />
            </TouchableOpacity>
          </View>
          <Text className="text-xl font-medium w-1/2">
            What Services Do you need today.
          </Text>
        </View>

        <View className="w-full flex flex-row justify-around bg-pink-50 py-5 rounded-t-[30px] -mt-5 px-3">
          <View>
            <View className="bg-white p-2 rounded-md">
              <Image source={Iron} className="w-14 h-14" />
            </View>
            <Text className="text-center font-medium mt-2">Iron</Text>
          </View>
          <View>
            <View className="bg-white p-2 rounded-md">
              <Image source={WashIron} className="w-14 h-14" />
            </View>
            <Text className="text-center font-medium mt-2">Wash + Iron</Text>
          </View>
          <View>
            <View className="bg-white p-2 rounded-md">
              <Image source={DryClean} className="w-14 h-14" />
            </View>
            <Text className="text-center font-medium mt-2">Dry Clean</Text>
          </View>
          <View>
            <View className="bg-white p-2 rounded-md">
              <Image source={Wash} className="w-14 h-14" />
            </View>
            <Text className="text-center font-medium mt-2">Wash</Text>
          </View>
        </View>
        <View className="bg-pink-50 h-full px-3 pt-5">
          <Text className="text-xl font-medium mb-3">Popular Laundry</Text>

          <View className="bg-white p-3 flex flex-row items-center gap-2 rounded-md my-2">
            <Image source={Laundry} className="w-20 h-20 rounded-md" />
            <View className="">
              <View className="flex flex-row items-center">
                <Text className="text-lg font-medium">Chamko Laundry</Text>
                <View className="flex flex-row items-center ml-16">
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
                <Text className="ml-1">Krupa Recidency , Motera.</Text>
              </View>
              <View className="flex flex-row items-center mt-2">
                <MaterialCommunityIcons
                  name="clock"
                  color="#DB2777"
                  size={15}
                />
                <Text className="ml-1">09:00 AM - 07:00 PM</Text>
              </View>
            </View>
          </View>
          <View className="bg-white p-3 flex flex-row items-center gap-2 rounded-md my-2">
            <Image source={Laundry} className="w-20 h-20 rounded-md" />
            <View className="">
              <View className="flex flex-row items-center">
                <Text className="text-lg font-medium">Chamko Laundry</Text>
                <View className="flex flex-row items-center ml-16">
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
                <Text className="ml-1">Krupa Recidency , Motera.</Text>
              </View>
              <View className="flex flex-row items-center mt-2">
                <MaterialCommunityIcons
                  name="clock"
                  color="#DB2777"
                  size={15}
                />
                <Text className="ml-1">09:00 AM - 07:00 PM</Text>
              </View>
            </View>
          </View>
          <View className="bg-white p-3 flex flex-row items-center gap-2 rounded-md my-2">
            <Image source={Laundry} className="w-20 h-20 rounded-md" />
            <View className="">
              <View className="flex flex-row items-center">
                <Text className="text-lg font-medium">Chamko Laundry</Text>
                <View className="flex flex-row items-center ml-16">
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
                <Text className="ml-1">Krupa Recidency , Motera.</Text>
              </View>
              <View className="flex flex-row items-center mt-2">
                <MaterialCommunityIcons
                  name="clock"
                  color="#DB2777"
                  size={15}
                />
                <Text className="ml-1">09:00 AM - 07:00 PM</Text>
              </View>
            </View>
          </View>
          <View className="bg-white p-3 flex flex-row items-center gap-2 rounded-md my-2">
            <Image source={Laundry} className="w-20 h-20 rounded-md" />
            <View className="">
              <View className="flex flex-row items-center">
                <Text className="text-lg font-medium">Chamko Laundry</Text>
                <View className="flex flex-row items-center ml-16">
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
                <Text className="ml-1">Krupa Recidency , Motera.</Text>
              </View>
              <View className="flex flex-row items-center mt-2">
                <MaterialCommunityIcons
                  name="clock"
                  color="#DB2777"
                  size={15}
                />
                <Text className="ml-1">09:00 AM - 07:00 PM</Text>
              </View>
            </View>
          </View>
          <View className="bg-white p-3 flex flex-row items-center gap-2 rounded-md my-2">
            <Image source={Laundry} className="w-20 h-20 rounded-md" />
            <View className="">
              <View className="flex flex-row items-center">
                <Text className="text-lg font-medium">Chamko Laundry</Text>
                <View className="flex flex-row items-center ml-16">
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
                <Text className="ml-1">Krupa Recidency , Motera.</Text>
              </View>
              <View className="flex flex-row items-center mt-2">
                <MaterialCommunityIcons
                  name="clock"
                  color="#DB2777"
                  size={15}
                />
                <Text className="ml-1">09:00 AM - 07:00 PM</Text>
              </View>
            </View>
          </View>
          <View className="bg-white p-3 flex flex-row items-center gap-2 rounded-md my-2">
            <Image source={Laundry} className="w-20 h-20 rounded-md" />
            <View className="">
              <View className="flex flex-row items-center">
                <Text className="text-lg font-medium">Chamko Laundry</Text>
                <View className="flex flex-row items-center ml-16">
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
                <Text className="ml-1">Krupa Recidency , Motera.</Text>
              </View>
              <View className="flex flex-row items-center mt-2">
                <MaterialCommunityIcons
                  name="clock"
                  color="#DB2777"
                  size={15}
                />
                <Text className="ml-1">09:00 AM - 07:00 PM</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Home;
