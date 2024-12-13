import { NavigationProp } from "@react-navigation/native";

export type RootStackParamList = {
  Splash: undefined;
  Login: undefined;
  SignUp: undefined;
  OtpScreen: { email: string; password: string };
  Home: undefined;
};

export type LoginScreenNavigationProp = NavigationProp<RootStackParamList, "Login">;
export type SignUpScreenNavigationProp = NavigationProp<RootStackParamList, "SignUp">;
export type OtpScreenScreenNavigationProp = NavigationProp<RootStackParamList, "OtpScreen">;
export type HomeScreenNavigationProp = NavigationProp<RootStackParamList, "Home">;
