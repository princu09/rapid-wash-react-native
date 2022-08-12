// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import {
  initializeAuth,
  getReactNativePersistence,
} from "firebase/auth/react-native";

import AsyncStorage from "@react-native-async-storage/async-storage";

const firebaseConfig = {
  apiKey: "AIzaSyBqLSsgoDzeboEwMxFlku_0vPkM5wk10Yc",
  authDomain: "rapid-wash.firebaseapp.com",
  projectId: "rapid-wash",
  storageBucket: "rapid-wash.appspot.com",
  messagingSenderId: "1014484470257",
  appId: "1:1014484470257:web:3fbf5d45b6fcd66a5e1c50",
  measurementId: "G-W4K6H2SQNG",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});

export { auth };
