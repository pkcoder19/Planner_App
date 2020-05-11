import React, { Component, useState } from 'react';
import { Platform, StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AssignmentInput from './assignment_textbox';
import TestInput from './importantDates_textbox'

function Separator() {
    
  return <View style={styles.separator} />;
}

export default function SpanishScreen({ navigation }) {
    return (
      <View style={styles.container}>
        <Text style={styles.Assignment}>Assignments</Text>
        <AssignmentInput />
        <Text style={styles.Assignment}>Important Dates</Text>
        <TestInput />
        <Separator />
        <Button
          title="Back to Schedule"
          onPress={() => navigation.navigate('Schedule')}
        />
      </View>
    );
  }


  const styles = StyleSheet.create({
    container: {
     flex: 1,
     borderTopColor: '#00b3b3'
   },
    Assignment: {
      textAlign: 'center',
      backgroundColor: 'powderblue',
      marginVertical: 20,
      color: 'black',
      fontSize: 30,
      height: 50
    },
    separator: {
      marginVertical: 5,
      borderBottomColor: 'white',
      borderBottomWidth: StyleSheet.hairlineWidth,
  }
  });




