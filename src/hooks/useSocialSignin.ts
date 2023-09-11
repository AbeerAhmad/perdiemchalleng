import { GoogleSignin } from "@react-native-google-signin/google-signin";
import { googleUser } from "../modules/auth/slice/authSlice";
import Toast from 'react-native-toast-message';
import { useAppDispatch } from "../store/hooks";

GoogleSignin.configure({
    iosClientId:
        '385726975234-238pktgg18f5brhrkgriha5c5v54cuod.apps.googleusercontent.com',
});

export const useSocialSignin = () => {


    const dispatch = useAppDispatch();

    const googleSignIn = () => {
        GoogleSignin.hasPlayServices()
            .then(hasPlayService => {
                if (hasPlayService) {
                    GoogleSignin.signIn()
                        .then(userInfo => {
                            dispatch(
                                googleUser({
                                    name: userInfo?.user?.name ?? '',
                                    password: '',
                                    email: userInfo?.user?.email,
                                    photo: userInfo?.user?.photo ?? '',
                                }),
                            );
                        })
                        .catch(e => {
                            Toast.show({
                                type: 'error',
                                text1: 'Error',
                                text2: 'Something went wrong !',
                            });
                        });
                }
            })
            .catch(e => {
                Toast.show({
                    type: 'error',
                    text1: 'Error',
                    text2: 'Something went wrong !',
                });
            });
    }
    return { googleSignIn }
}