import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Provider as PaperProvider } from 'react-native-paper';
import { Provider as ReduxProvider } from 'react-redux'; 
import store from './src/store/store';
import MainNavigator from './src/navigation/MainNavigator';

export default function App() {
  return (
    <ReduxProvider store={store}> {/* Fournit le store Redux */}
      <PaperProvider> {/* Fournit React Native Paper */}
        <NavigationContainer> {/* Fournit la navigation */}
          <MainNavigator />
        </NavigationContainer>
      </PaperProvider>
    </ReduxProvider>
  );
}
