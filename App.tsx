/* eslint-disable react-native/no-inline-styles */
import { JSX } from 'react';
import { StyleSheet, View } from 'react-native';
import 'react-native-gesture-handler';
import AppNavigation from './src/navigations/AppNavigation';
import { DefaultTheme, PaperProvider } from 'react-native-paper';

function App(): JSX.Element {
  const theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: 'orange',
      secondary: 'yellow',
    },
  };

  return (
    <PaperProvider theme={theme}>
      <View style={sty.container}>
        <AppNavigation />
      </View>
    </PaperProvider>
  );
}

const sty = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default App;
