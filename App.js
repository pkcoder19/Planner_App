import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, Button, Alert } from 'react-native';
import Header from '/Users/aparnabidwe/Desktop/reactTutorialApp/Heading';
import TestButton from '/Users/aparnabidwe/Desktop/reactTutorialApp/Button';

const App = () => {
    return (
      <View style={styles.container}>
         <Header />
        <TestButton /> 
      </View>

    );
  };
  
  const styles = StyleSheet.create({
     container: {
      flex: 1,
      paddingTop: 60,
      borderTopColor: '#00b3b3'
    },
  
  });
  
export default App;
