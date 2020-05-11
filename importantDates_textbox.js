import React, { Component, useState } from 'react';
import { Text, TextInput, View, StyleSheet, Image } from 'react-native';

function Separator() {
    
    return <View style={styles.separator} />;
  }

export default function TestInput() {
    const [text, setText] = useState('');
        return (
            <View style={styles.textbox}>
                <TextInput
                    style={styles.assignmentInput}
                    placeholder="Type your important dates here!"
                    defaultValue={text}
                    multiline
                />
                <Image source = {{uri:'https://icons-for-free.com/iconfiles/png/512/minus+remove+icon-1320183421124253557.png'}}/>
                <Separator />
                <TextInput
                    style={styles.assignmentInput}
                    placeholder="Type your important dates here!"
                    defaultValue={text}
                    multiline
                />
                <Separator />
                <TextInput
                    style={styles.assignmentInput}
                    placeholder="Type your important dates here!"
                    defaultValue={text}
                    multiline
                />
            </View>
        );
    }

const styles = StyleSheet.create( {
        textbox: {
            padding: 10,
            alignContent: 'flex-start',
        },
        assignmentInput: {
            height: 30,
            width: 320,
            borderColor: 'black',
            borderWidth: 1,
            backgroundColor: '#efeff5',
        },
        separator: {
            marginVertical: 5,
            borderBottomColor: 'white',
            borderBottomWidth: StyleSheet.hairlineWidth,
        }
    }
)