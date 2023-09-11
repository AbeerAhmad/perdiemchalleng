import React from 'react';
import {
  NavigationContainer,
  createNavigationContainerRef,
  DefaultTheme,
} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {AppNavigationText, HomeNavigationText} from './navigation.enum';
import {HomeScreen} from '../modules/home/screens/HomeScreen/HomeScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useTheme} from 'styled-components';
import LoginScreen from '../modules/auth/screens/loginScreen/loginScreen';
import {useAppSelector} from '../store/hooks';
import {ProfileScreen} from '../modules/profile/screens/ProfileScreen/ProfileScreen';
import {Header} from '../shared/components/Header/Header';
import {StatusBar} from 'react-native';
import {PostScreen} from '../modules/home/screens/PostScreen/PostScreen';

const Tab = createBottomTabNavigator();
export const navigationRef = createNavigationContainerRef();

const Stack = createNativeStackNavigator();

const HomeNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{
          header() {
            return <Header />;
          },
        }}
        name={HomeNavigationText.Home}
        component={HomeScreen}
      />
      <Stack.Screen
        options={{title: 'Post', headerBackTitleVisible: false}}
        name={HomeNavigationText.DetailScreen}
        component={PostScreen}
      />
    </Stack.Navigator>
  );
};

const AppNavigation = () => {
  const theme = useTheme();
  return (
    <Tab.Navigator
      screenOptions={() => ({
        tabBarStyle: {backgroundColor: theme.Primary.Fill},
        tabBarActiveTintColor: theme.Primary.Text,
      })}>
      <Tab.Screen
        options={{
          title: 'Home',
          headerShown: false,
        }}
        name={AppNavigationText.Home}
        component={HomeNavigation}
      />
      <Tab.Screen
        options={{
          title: 'Profile',
          header(props) {
            return <Header />;
          },
        }}
        name={AppNavigationText.Profile}
        component={ProfileScreen}
      />
    </Tab.Navigator>
  );
};

const AuthStack = createNativeStackNavigator();

const AuthNavigation = () => {
  return (
    <AuthStack.Navigator screenOptions={{headerShown: false}}>
      <AuthStack.Screen component={LoginScreen} name="loginScreen" />
    </AuthStack.Navigator>
  );
};

export const Navigation = () => {
  const {isLogin} = useAppSelector(state => state.authSlice);
  const theme = useTheme();
  const MyTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: theme.Primary.Text,
    },
  };
  return (
    <NavigationContainer theme={MyTheme}>
      <StatusBar backgroundColor={'red'} />
      {isLogin ? <AppNavigation /> : <AuthNavigation />}
    </NavigationContainer>
  );
};
