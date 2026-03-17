import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Image
        source={require('../src/logo.png')}
        style={styles.logo}
        resizeMode="contain"
      />
      <Text style={styles.text}>NutriFit</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 11,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 350,
    height: 330,
    marginBottom: -80,
  },
  text: {
    fontSize: 24,
    color: '#6A0DAD', // Roxo
    fontWeight: '600',
  },
});
