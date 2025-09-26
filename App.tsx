import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet, Text, useColorScheme, View } from 'react-native';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaView style={ [ styles.container, { backgroundColor: isDarkMode ? '#000' : '#fff' } ] }>
      <StatusBar barStyle={ isDarkMode ? 'light-content' : 'dark-content' } />
      <View style={ styles.content }>
        <Text style={ [ styles.text, { color: isDarkMode ? '#fff' : '#000' } ] }>
          Welcome to Your React Native App!
        </Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create( {
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
} );

export default App;
