import { StackNavigationProp, StackScreenProps } from "@react-navigation/stack";

type RecordProps = {
    id: number;
};
type NotificationProps = {
    id: number;
};
type NewBeatProps = {
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
type BeatListProps = {
    id: number;
};
type MyGiftProps = {
    id: number;
};

export type BeatListStackParamList = {
    Record: RecordProps | undefined;
    BeatList: BeatListProps | undefined;
    Notification: NotificationProps | undefined;
    MostUsed: MostUsedProps | undefined;
    Propose: ProposeProps | undefined
    RecordedRecently: RecordedRecentlyProps | undefined
    MyGift: MyGiftProps | undefined
    NewBeat: NewBeatProps | undefined
};

export type BeatListStackNavigation = StackNavigationProp<BeatListStackParamList>;

export type S = keyof BeatListStackParamList;

export type BeatListStackScreenProps<RouterName extends S> = StackScreenProps<
    BeatListStackParamList,
    RouterName
>;