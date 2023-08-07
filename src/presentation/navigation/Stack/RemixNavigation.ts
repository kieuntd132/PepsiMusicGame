import { StackNavigationProp, StackScreenProps } from "@react-navigation/stack";

type RecordOneProps = {
    
};


type RemixProps = {
    
};
type SearchProps = {
    
};
type AnimationSplashProps = {
    
};
type AnimationNextProps = {
    
};
type AnimationEndProps = {
   
};
type ThanksProps = {
   
};



export type RemixStackParamList = {
    RecordOne: RecordOneProps | undefined;
    Remix: RemixProps | undefined;
    Search: SearchProps | undefined;
    AnimationSplash: AnimationSplashProps | undefined;
    AnimationNext: AnimationNextProps | undefined;
    AnimationEnd: AnimationEndProps | undefined;
    Thanks: ThanksProps | undefined;
};

export type RemixStackNavigation = StackNavigationProp<RemixStackParamList>;

export type S = keyof RemixStackParamList;

export type RemixStackScreenProps<RouterName extends S> = StackScreenProps<
    RemixStackParamList,
    RouterName
>;