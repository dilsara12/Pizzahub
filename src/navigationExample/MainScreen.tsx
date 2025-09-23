import { View, Button } from 'react-native';
import React from 'react';

const MainScreen = (p: any) => {
  function gotoA() {
    p.navigation.navigate('ScreenA');
  }

  function gotoB() {
    p.navigation.navigate('ScreenB');
  }
  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Button onPress={gotoA} title="go to Screen A" />
      <Button onPress={gotoB} title="go to Screen B" />
    </View>
  );
};

export default MainScreen;
