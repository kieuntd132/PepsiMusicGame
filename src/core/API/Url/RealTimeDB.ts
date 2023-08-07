import { firebase } from "@react-native-firebase/database";

export const rtdb = firebase
.app()
.database('https://pepsimusicgame-f3252-default-rtdb.asia-southeast1.firebasedatabase.app/');