import { NavigationProp } from "@react-navigation/native";

// import types
import { authOtpRequestBody } from "@/src/Types/AuthTypes";

export type RootStackParamList = {
  Splash: undefined;
  Login: undefined;
  SignUp: undefined;
  OtpScreen: authOtpRequestBody;
  Home: undefined;
  ProfileSetup: { id: string };
};

export type LoginScreenNavigationProp = NavigationProp<RootStackParamList, "Login">;
export type SignUpScreenNavigationProp = NavigationProp<RootStackParamList, "SignUp">;
export type OtpScreenScreenNavigationProp = NavigationProp<RootStackParamList, "OtpScreen">;
export type HomeScreenNavigationProp = NavigationProp<RootStackParamList, "Home">;
export type ProfileSetupScreenNavigationProp = NavigationProp<RootStackParamList, "ProfileSetup">;
