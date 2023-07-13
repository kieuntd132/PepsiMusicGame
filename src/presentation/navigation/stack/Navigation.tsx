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
export type MainStackParamList = {
    LogInSplash: SplashProps | undefined;
    LogIn: LoginProps | undefined;
    LogInOTP: LoginOTPProps | undefined;
    SplashScreen: SplashScreenProps | undefined;
};

export type MainStackNavigation = StackNavigationProp<MainStackParamList>;

export type S = keyof MainStackParamList;

export type MainStackScreenProps<RouterName extends S> = StackScreenProps<
    MainStackParamList,
    RouterName
>;