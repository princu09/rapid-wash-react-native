import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Login, Home, Signup, AppBar} from '../index';
import {useStateContext} from '../context/ContextProvider';
import {Text} from 'react-native';

const HomeStack = () => {
  const {currentUser} = useStateContext();

  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      {!currentUser ? (
        <Stack.Navigator
          initialRouteName="login"
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name="login" component={Login} />
          <Stack.Screen name="signup" component={Signup} />
        </Stack.Navigator>
      ) : (
        <Stack.Navigator
          initialRouteName="home"
          screenOptions={{
            headerStyle: {
              backgroundColor: 'white',
            },
          }}>
          <Stack.Screen
            name="Home"
            component={Home}
            options={{
              header: () => (
                <AppBar title="" />
              ),
            }}
          />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
};

export default HomeStack;
