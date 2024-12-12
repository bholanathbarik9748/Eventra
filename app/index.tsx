import {
  NavigationContainer,
  NavigationIndependentTree,
} from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { RootStackParamList } from "./RootStackParamType";

const Stack = createStackNavigator<RootStackParamList>();

// import Screen
import Login from "@/src/screen/Login/Login";
import SignUp from "@/src/screen/SignUp/SingUp";
import Splash from "@/src/screen/Splash/Splash";

export default function Page() {
  return (
    <NavigationIndependentTree>
      <NavigationContainer independent={true}>
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
        </Stack.Navigator>
      </NavigationContainer>
    </NavigationIndependentTree>
  );
}
