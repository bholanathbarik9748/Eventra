import { createStackNavigator } from "@react-navigation/stack";
import { RootStackParamList } from "./RootStackParamType";

const Stack = createStackNavigator<RootStackParamList>();

// import Screen
import Splash from "@/src/screen/Splash/Splash";
import Login from "@/src/screen/Login/Login";
import SignUp from "@/src/screen/SignUp/SingUp";
import OtpScreen from "@/src/screen/OtpVerification/OtpVerification";
import Home from "@/src/screen/Home/Home";
import ProfileSetup from "@/src/screen/ProfileSetup/ProfileSetup";

export default function AppNavigator() {
  return (
    <Stack.Navigator initialRouteName="Splash">
      <Stack.Screen
        name="Splash"
        component={Splash}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUp}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="OtpScreen"
        component={OtpScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ProfileSetup"
        component={ProfileSetup}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
