import React, {useState} from 'react';
import { StyleSheet, View, Button, TouchableOpacity, Text } from 'react-native';




export default function StopWatchButton() {
    
    let stopwatchValue = 0;
    
    
    function toggleTimer(){
    stopwatchValue++;

    }

function resetTimer(){
    stopwatchValue=0;
    }

    return (
    <View style={styles.container}>
    
        <TouchableOpacity onPress={toggleTimer} style = {styles.bigButton}>
            <Text style={{color:'#000000'}}>Timer:{stopwatchValue}</Text>
        </TouchableOpacity>






        <View style = {{flex: 1}}>
            <Button title="Reset" onPress={resetTimer}/>
        </View>
    </View>
    );
}



const styles = StyleSheet.create({
    bigButton: {
        flex: 8,
        alignItems: 'center',
        justifyContent: 'center',
    },
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    title: {
      fontSize: 20,
      fontWeight: 'bold',
    },
    separator: {
      marginVertical: 30,
      height: 1,
      width: '80%',
    },
  });
