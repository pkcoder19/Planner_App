import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const Header = () => {
    return (
      <View style={styles.header}>
        <Text style={styles.text}>Tuesday, May 5 2020</Text>
      </View> 
    );
  };

  const styles = StyleSheet.create({
    header: {
      height: 60,
      padding: 15,
      
    },
    text: {
      color: 'black',
      backgroundColor: '#33cccc',
      fontSize: 23,
      textAlign: 'center'
    },
  });
  
  export default Header;