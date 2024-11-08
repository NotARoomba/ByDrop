import "@/global.css";
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import { StatusBar, Text, View } from "react-native";
import 'react-native-reanimated';
import Index from "./Index";
import { Stack } from "expo-router";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  useEffect(() => {
      SplashScreen.hideAsync();
  }, []);

  return (
<View>
  <StatusBar barStyle="dark-content" />
  <Stack>
      <Stack.Screen name="index" />
    </Stack>
</View>
  );
}
