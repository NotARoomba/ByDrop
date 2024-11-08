import "@/global.css";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import {
  Image,
  Platform,
  SafeAreaView,
  StatusBar,
  Text,
  View,
} from "react-native";
import "react-native-reanimated";
import Meter from "components/Meter";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  useEffect(() => {
    SplashScreen.hideAsync();
    StatusBar.setBarStyle(
      "dark-content",
      true,
    );
  }, []);

  return (
    <View className="h-full bg-alice_blue">
      <SafeAreaView />
      <Image
        className="mx-auto my-10"
        source={require("@/assets/images/bydrop_text.png")}
      />
      <Meter />
      <Image
        className="mx-auto mt-8 h-48 aspect-square"
        source={require("@/assets/images/bydrop_image.png")}
      />
    </View>
  );
}
