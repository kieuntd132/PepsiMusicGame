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
export type BeatListStackParamList = {
    Record: RecordProps | undefined;
    Ranking: RankingProps | undefined;
    Notification: NotificationProps | undefined;
    MostUsed: MostUsedProps | undefined;
    Propose: ProposeProps | undefined
    RecordedRecently: RecordedRecentlyProps | undefined
    RecordOne: RecordOneProps | undefined;
    BeatOutstand: BeatOutstandProps | undefined;
    BeatList: BeatListProps | undefined;
    MyGift: MyGiftProps | undefined;
};

export type BeatListStackNavigation = StackNavigationProp<BeatListStackParamList>;

export type S = keyof BeatListStackParamList;

export type BeatListStackScreenProps<RouterName extends S> = StackScreenProps<
    BeatListStackParamList,
    RouterName
>;