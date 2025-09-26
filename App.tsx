import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet, useColorScheme } from 'react-native';
import MapScreen from './src/screens/Map';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaView style={ [ styles.container, { backgroundColor: isDarkMode ? '#000' : '#fff' } ] }>
      <StatusBar barStyle={ isDarkMode ? 'light-content' : 'dark-content' } />
   
        <MapScreen/>

    </SafeAreaView>
  );
};

const styles = StyleSheet.create( {
  container: {
    flex: 1,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
} );

export default App;
