import { StackNavigationProp, StackScreenProps } from "@react-navigation/stack";

type RantingProps = {
};

type TopProps = {
};

type ProfileRecordProps = {
};

type VideoListProfileProps = {
};

type NotificationRankingProps = {
};

type MyGiftRankingProps = {
};

export type ChartStackParamList = {
    Rating: RantingProps | undefined;
    Top: TopProps | undefined;
    ProfileRecord: ProfileRecordProps | undefined;
    VideoListProfile: VideoListProfileProps | undefined;
    NotificationRanking: NotificationRankingProps | undefined;
    MyGiftRanking: MyGiftRankingProps | undefined;
};

export type ChartStackNavigation = StackNavigationProp<ChartStackParamList>;

export type S = keyof ChartStackParamList;

export type ChartStackScreenProps<RouterName extends S> = StackScreenProps<
    ChartStackParamList,
    RouterName
>;