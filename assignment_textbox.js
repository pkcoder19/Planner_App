import React, { Component, useState } from 'react';
import { Text, TextInput, View, StyleSheet } from 'react-native';

function Separator() {
    
    return <View style={styles.separator} />;
  }

export default function AssignmentInput() {
    const [text, setText] = useState('');
        return (
            <View style={styles.textbox}>
                <TextInput
                    style={styles.assignmentInput}
                    placeholder="Type your assignments here!"
                    defaultValue={text}
                    multiline
                />
                <Separator />
                <TextInput
                    style={styles.assignmentInput}
                    placeholder="Type your assignments here!"
                    defaultValue={text}
                    multiline
                />
                <Separator />
                <TextInput
                    style={styles.assignmentInput}
                    placeholder="Type your assignments here!"
                    defaultValue={text}
                    multiline
                    
                />
            </View>
        );
}

const styles = StyleSheet.create( {
        textbox: {
            padding: 10,
        },
        assignmentInput: {
            height: 50,
            alignItems: 'stretch',
            height: 25,
            width: 320,
            borderBottomColor: '#d0d0e1',
            borderWidth: 2,
            backgroundColor: '#efeff5'
        },
        separator: {
            marginVertical: 5,
            borderBottomColor: 'white',
            borderBottomWidth: StyleSheet.hairlineWidth,
        }
    }
)
