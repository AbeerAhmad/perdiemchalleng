import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {ThemeProvider} from 'styled-components/native';
import {theme} from './shared/theme/theme.generated';
import {Navigation} from './navigation';
import {persistor, store} from './store';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {PortalProvider, PortalHost} from '@gorhom/portal';
import Toast from 'react-native-toast-message';

const App = () => {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <ThemeProvider theme={theme}>
            <View style={styles.container} testID="safe-area">
              <PortalProvider>
                <Navigation />
                <PortalHost name="bottomsheet" />
                <Toast />
              </PortalProvider>
            </View>
          </ThemeProvider>
        </PersistGate>
      </Provider>
    </GestureHandlerRootView>
  );
};

export default App;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
