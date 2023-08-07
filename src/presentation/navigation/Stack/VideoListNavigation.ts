import { StackNavigationProp, StackScreenProps } from "@react-navigation/stack";

type VideoListProps = {
    id: number;
};
type NotificationVideoProps = {
    id: number;
};
type MyGiftVideoProps = {
    id: number;
};
export type VideoListStackParamList = {
    VideoList: VideoListProps | undefined;
    NotificationVideo: NotificationVideoProps | undefined;
    MyGiftVideo: MyGiftVideoProps | undefined;
};

export type VideoListStackNavigation = StackNavigationProp<VideoListStackParamList>;

export type S = keyof VideoListStackParamList;

export type VideoListStackScreenProps<RouterName extends S> = StackScreenProps<
    VideoListStackParamList,
    RouterName
>;