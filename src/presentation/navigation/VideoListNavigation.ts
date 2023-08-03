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
type VideoList2Props = {
    id: number;
};
export type VideoListStackParamList = {
    Record: RecordProps | undefined;
    Notification: NotificationProps | undefined;
    VideoList: VideoListProps | undefined;
    VideoList2: VideoList2Props | undefined;
};

export type VideoListStackNavigation = StackNavigationProp<VideoListStackParamList>;

export type S = keyof VideoListStackParamList;

export type VideoListStackScreenProps<RouterName extends S> = StackScreenProps<
    VideoListStackParamList,
    RouterName
>;