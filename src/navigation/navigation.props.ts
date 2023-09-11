import { Post } from "../types/homeTypes"
import { HomeNavigationText } from "./navigation.enum"


export type RootStackParamList = {
    [HomeNavigationText.Home]: undefined
    [HomeNavigationText.DetailScreen]: { post: Post }

}