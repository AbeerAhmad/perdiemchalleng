import { combineReducers, configureStore } from '@reduxjs/toolkit';
import authSlice from '../modules/auth/slice/authSlice';
import homeSlice from '../modules/home/slice/homeSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistStore, persistReducer } from 'redux-persist';
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};
const persistedAuthSlice = persistReducer(persistConfig, authSlice);
const reducer = combineReducers({
  authSlice: persistedAuthSlice, homeSlice
});
export const store = configureStore({
  reducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({ serializableCheck: false }),
});
export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
