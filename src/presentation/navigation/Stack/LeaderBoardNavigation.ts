import { StackNavigationProp, StackScreenProps } from "@react-navigation/stack";

type TopProps = {
};

type ProfileRecordProps = {
};

type VideoListProfileProps = {
};

export type LeaderBoardParamList = {
    Ranking: TopProps | undefined;
    ProfileRecord: ProfileRecordProps | undefined;
    VideoListProfile: VideoListProfileProps | undefined;
};

export type LeaderBoardNavigation = StackNavigationProp<LeaderBoardParamList>;

export type S = keyof LeaderBoardParamList;

export type LeaderBoardScreenProps<RouterName extends S> = StackScreenProps<
    LeaderBoardParamList,
    RouterName
>;