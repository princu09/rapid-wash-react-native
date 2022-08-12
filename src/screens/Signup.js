import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
} from 'react-native';
import React from 'react';
import logo from '../assets/img/logo.png';
import fb from '../assets/img/fb.webp';
import google from '../assets/img/google.webp';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useStateContext} from '../context/ContextProvider';

const Signup = ({navigation}) => {
  const {
    email,
    setEmail,
    password,
    setPassword,
    setPassShow,
    passShow,
    handleSignup,
  } = useStateContext();

  return (
    <KeyboardAvoidingView>
      <View className="bg-pink-100 h-full">
        <View className="flex justify-center items-center mt-5 h-1/3">
          <Image source={logo} className="w-20 h-20" />
          <Text className="text-2xl mt-3 mb-5 font-bold text-pink-500">
            Rapid Wash
          </Text>
          <Text className="text-2xl font-bold text-center text-black">
            Signup
          </Text>
        </View>
        <View className="bg-pink-600 px-5 pt-10 mt-5 rounded-t-[50px] h-full">
          <View className="flex flex-row justify-center gap-5 mt-5">
            <TouchableOpacity
              className="bg-white flex flex-row justify-center items-center p-1 px-2 rounded-md"
              onPress="">
              <Image source={fb} className="w-7 h-7" />
              <Text className="font-bold text-lg ml-2 text-pink-500">
                Facebook
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              className="bg-white flex flex-row justify-center items-center p-1 px-2 rounded-md"
              onPress="">
              <Image source={google} className="w-7 h-7" />
              <Text className="font-bold text-lg ml-2 text-pink-500">
                Google
              </Text>
            </TouchableOpacity>
          </View>
          <View className="my-5">
            <Text className="text-center text-white font-medium text-xl">
              Or
            </Text>
          </View>
          <View>
            <View className="">
              <Text className="text-white font-bold mb-2">Email</Text>
              <TextInput
                className="bg-white p-2 py-3 pl-10 rounded text-black text-xl"
                placeholder="john@example.com"
                // keyboardType="number-pad"
                value={email}
                onChangeText={text => setEmail(text)}
              />
              <View className="absolute top-10 left-2">
                <MaterialCommunityIcons
                  name="account-circle"
                  color="pink"
                  size={25}
                />
              </View>
            </View>
            <View className="my-2 relative">
              <Text className="text-white font-bold mb-2">Password</Text>
              <TextInput
                secureTextEntry={!passShow ? true : false}
                className="bg-white p-2 py-3 pl-10 rounded text-black text-xl"
                placeholder="*******"
                value={password}
                onChangeText={pass => setPassword(pass)}
              />
              <View className="absolute top-9 left-2">
                <MaterialCommunityIcons name="lock" color="pink" size={25} />
              </View>
              <View className="absolute bottom-3 right-2 ">
                {!passShow ? (
                  <TouchableOpacity onPress={() => setPassShow(!passShow)}>
                    <MaterialCommunityIcons name="eye" color="gray" size={25} />
                  </TouchableOpacity>
                ) : (
                  <TouchableOpacity onPress={() => setPassShow(!passShow)}>
                    <MaterialCommunityIcons
                      name="eye-off"
                      color="gray"
                      size={25}
                    />
                  </TouchableOpacity>
                )}
              </View>
            </View>
            {/* <View className="flex items-end mt-2">
              <Text className="text-white font-medium">Forget Password ?</Text>
            </View> */}
            <TouchableOpacity
              className="bg-pink-200 mt-5 rounded"
              onPress={handleSignup}>
              <Text className="text-pink-500 font-bold text-xl text-center p-1.5">
                Submit
              </Text>
            </TouchableOpacity>
          </View>
          <View className="my-10">
            <TouchableOpacity onPress={() => navigation.navigate('login')}>
              <Text className="text-white font-medium text-lg text-center">
                Already Have An Account ? Login
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default Signup;
