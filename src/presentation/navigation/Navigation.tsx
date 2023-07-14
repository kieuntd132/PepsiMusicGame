import { StackNavigationProp, StackScreenProps } from "@react-navigation/stack";

type SplashProps = {
    userID: number;
};

type LoginProps = {
    id: number;
};

type LoginOTPProps = {
    id: number;
};
type SplashScreenProps = {
    id: number;
};
type SplashScreenRegisterProps = {
    id: number;
};
type RegisterProps = {
    id: number;
};
type RegisterOTPProps = {
    id: number;
};
type RuleProps = {
    id: number;
};

export type MainStackParamList = {
    LogInSplash: SplashProps | undefined;
    LogIn: LoginProps | undefined;
    RegisterSplash: SplashScreenRegisterProps | undefined 
    Register: RegisterProps | undefined 
    RegisterOTP: RegisterOTPProps | undefined;
    LogInOTP: LoginOTPProps | undefined;
    SplashScreen: SplashScreenProps | undefined;
    Rule: RuleProps | undefined;
   
};

export type MainStackNavigation = StackNavigationProp<MainStackParamList>;

export type S = keyof MainStackParamList;

export type MainStackScreenProps<RouterName extends S> = StackScreenProps<
    MainStackParamList,
    RouterName
>;