import React from 'react';
import { ActivityIndicator, View } from 'react-native';
import colors from '../assets/colors/colors;
const SplashScreen = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        backgroundColor: colors.orange
      }}
    >
      <ActivityIndicator size="large" color="#ffffff" />
    </View>
  );
};

export default SplashScreen;