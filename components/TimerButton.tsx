import React, { useEffect, useState } from "react";
import { StyleSheet, View, Button, TouchableOpacity, Text } from "react-native";

export default function StopWatchButton() {
  const [counting, setCounting] = useState(false);
  const [timer, setTimer] = useState(0);
  const [timeStamp, setTimeStamp] = useState(0);
  const [interval, setIntervalID] = useState(0); 

  
  function toggleTimer() {
    setCounting(!counting);
    if(!counting){//START the timer
//        console.log("starting timer");
        setTimeStamp(Date.now());

        if(interval) clearInterval(interval);
        
        let newInterval = window.setInterval(()=>{
            let now = Date.now();
            setTimer(timer + (now - timeStamp));

            setTimeStamp(now);

        }, 66);
        setIntervalID(newInterval);

    } else{//STOP the timer
        clearInterval(interval);
        let now = Date.now();
        setTimer(timer + (now - timeStamp));
    }
  }

  function resetTimer() {
    setTimer(0);
    setTimeStamp(Date.now());
    clearInterval(interval);
  }

  const timerVal=()=>{
    return(Math.trunc(timer/(1000*60))+":"+Math.trunc((timer%60000)/1000)+"."+(timer%1000));
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={toggleTimer}
        style={styles.bigButton}
        activeOpacity={0.8}
      >
        <Text style={{ color: "#F0F", fontSize: 55 }}>{timerVal()}</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={resetTimer}
        style={styles.resetButton}
        activeOpacity={0.5}
      >
        <Text style={{ color: "#000", fontSize: 30 }}> RESET </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  bigButton: {
    flex: 8,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100%",
    backgroundColor: "#1C3",
  },
  resetButton: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100%",
    backgroundColor: "#F00",
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
