import { StackNavigationProp, StackScreenProps } from "@react-navigation/stack";

type RecordProps = {
    id: number;
};
type NotificationProps = {
    id: number;
};
type BeatOutstandProps = {
    id: number;
};
type MostUsedProps = {
    id: number;
};
type ProposeProps = {
    id: number;
};
type RecordedRecentlyProps = {
    id: number;
};
type RecordOneProps = {
    id: number;
};
type BeatListProps = {
    id: number;
};
type MyGiftProps = {
    id: number;
};
type RankingProps = {
    id: number;
};
type RatingProps = {
    id: number;
};

type RemixProps = {
    id: number;
};

type AnimationEndProps = {
    id: number;
};

type AnimationNextProps = {
    id: number;
};

type AnimationSplashProps = {
    id: number;
};

type SearchProps = {
    id: number;
};

type ThanksProps = {
    id: number;
};

type ProfileRecordProps = {
    id: number;
};

type VideoListProfileProps = {
    id: number;
};
type TopProps = {
    id: number;
};
export type BeatListStackParamList = {
    Record: RecordProps | undefined;
    BeatList: BeatListProps | undefined;
    Ranking: RankingProps | undefined;
    Rating: RatingProps | undefined;
    Notification: NotificationProps | undefined;
    MostUsed: MostUsedProps | undefined;
    Propose: ProposeProps | undefined
    RecordedRecently: RecordedRecentlyProps | undefined
    RecordOne: RecordOneProps | undefined;
    BeatOutstand: BeatOutstandProps | undefined;
    MyGift: MyGiftProps | undefined;
    Remix: RemixProps | undefined;
    Top: TopProps | undefined;
    AnimationEnd: AnimationEndProps | undefined;
    AnimationNext: AnimationNextProps | undefined;
    AnimationSplash: AnimationSplashProps | undefined;
    Search: SearchProps | undefined;
    Thanks: ThanksProps | undefined;
    ProfileRecord: ProfileRecordProps | undefined;
    VideoListProfile: VideoListProfileProps | undefined;
};

export type BeatListStackNavigation = StackNavigationProp<BeatListStackParamList>;

export type S = keyof BeatListStackParamList;

export type BeatListStackScreenProps<RouterName extends S> = StackScreenProps<
    BeatListStackParamList,
    RouterName
>;