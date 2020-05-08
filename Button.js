import React from 'react';
import { StyleSheet, Button, View, SafeAreaView, Text, Alert } from 'react-native';

function Separator() {
    
  return <View style={styles.separator} />;
}

export default function TestButton() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.button}>
        <Button
          title="Period 1: English"
          color="black"
          onPress={() => Alert.alert('Clicked on English')}
        />
      </View>
      <Separator />
      <View style={styles.button}>
        <Button
          title="Period 2: Spanish"
          color='black'
          onPress={() => Alert.alert('Clicked on Spanish')}
        />
      </View>
      <Separator />
      <View style={styles.button}>
        <Button
          title="Period 3: Chemistry"
          color="black"
          onPress={() => Alert.alert('Clicked on Chemistry')}
        />
        </View>
        <Separator />
        <View style={styles.button}>
          <Button
            title="Period 4: History"
            color='black'
            backgroundColor="#ffe6e6"
            onPress={() => Alert.alert('Clicked on History')}
          />
          </View>
          <Separator />
          <View style={styles.button}>
            <Button
              title="Period 5: Math"
              color='black'
              onPress={() => Alert.alert('Clicked on Math')}
            />
            </View>
            <Separator />
            <View style={styles.button}>
              <Button
                title="Period 6: CSP"
                color='black'
                onPress={() => Alert.alert('Clicked on CSP')}
              />
              </View>
              <Separator />
              <View style={styles.button}>
                <Button
                  title="Period 7: Gael"
                  color='black'
                  onPress={() => Alert.alert('Clicked on Gael')}
                />
             </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 16,
  },
  title: {
    textAlign: 'center',
    marginVertical: 8,
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  separator: {
    marginVertical: 5,
    borderBottomColor: 'white',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  button: {
      backgroundColor:'#ffe6e6',
      height: 60,
      padding: 10,
      marginVertical: 4,
      marginHorizontal: 16,
  }
});
