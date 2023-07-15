import { useWindowDimensions } from "react-native";

export const width = () => {
    return useWindowDimensions().width;
}

export const height = () => {
    return useWindowDimensions().height;
}