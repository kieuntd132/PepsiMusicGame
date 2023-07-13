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

export type MainStackParamList = {
    Splash: SplashProps | undefined;
    LogIn: LoginProps | undefined;
    LogInOTP: LoginOTPProps | undefined;
};

export type MainStackNavigation = StackNavigationProp<MainStackParamList>;

export type S = keyof MainStackParamList;

export type MainStackScreenProps<RouterName extends S> = StackScreenProps<
    MainStackParamList,
    RouterName
>;