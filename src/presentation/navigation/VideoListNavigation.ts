import { StackNavigationProp, StackScreenProps } from "@react-navigation/stack";

type RecordProps = {
    id: number;
};
type NotificationProps = {
    id: number;
};
type VideoListProps = {
    id: number;
};
export type VideoListStackParamList = {
    Record: RecordProps | undefined;
    Notification: NotificationProps | undefined;
    VideoList: VideoListProps | undefined;
};

export type VideoListStackNavigation = StackNavigationProp<VideoListStackParamList>;

export type S = keyof VideoListStackParamList;

export type VideoListStackScreenProps<RouterName extends S> = StackScreenProps<
    VideoListStackParamList,
    RouterName
>;