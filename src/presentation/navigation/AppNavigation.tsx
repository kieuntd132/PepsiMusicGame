import { NavigationContainer } from "@react-navigation/native"
import { AuthenNavigation } from "./Authentication/AuthenNavigation"
import { AuthorNavigation } from "./Authorized/AuthorizedNavigator"



export const AppNavigation = () => {

    const authen = () => {
        return (
            <AuthenNavigation />
        )
    }

    const author = () => {
        return (
            <AuthorNavigation />
        )
    }

    return (
        <NavigationContainer>
            <AuthenNavigation />
        </NavigationContainer>
    )
}