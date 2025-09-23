/* eslint-disable react-native/no-inline-styles */
/* eslint-disable @react-native/no-deep-imports */
import { Text, View, Button } from 'react-native';
import React from 'react';

const ScreenA = (p: any) => {
  function goBack() {
    p.navigation.goBack();
  }
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 30, color: '#OOO' }}> Welcome Screen A</Text>

      <Button onPress={goBack} title="Go Back" />
    </View>
  );
};

export default ScreenA;
