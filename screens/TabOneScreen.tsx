import React, { useState, useEffect } from "react";

import EditScreenInfo from "../components/EditScreenInfo";
import CountdownDisplay from "../components/CountdownDisplay";
// import { Text, View } from "../components/Themed";
import {
  Text,
  TextInput,
  View,
  Alert,
  Button,
  Modal,
  StyleSheet,
  TouchableHighlight,
} from "react-native";

const formatNum = (num) => {
  num = Number(num);
  if (num == 0) {
    return "00";
  }
  if (num < 10) {
    return "0" + num;
  }
  if (num > 59) {
    return 59;
  }
  return num;
};

const formatInput = (input) => {
  input.toString();
  input = input.replace(/\D+/g, "");
  input = Number(input);
  let seconds = input % 60;
  let minutes = Math.floor(input / 60);
  // let hours = Math.floor(input / (60 * 60 * 60));
  return `${minutes}:${seconds}`;
};

export default function TabOneScreen() {
  let [input, setInput] = useState("");
  let [timer, setTimer] = useState(0);
  let [counter, setCounter] = useState(0);
  let [minutes, setMinutes] = useState(0);
  let [seconds, setSeconds] = useState(0);
  let [counting, setCounting] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    if (counting) {
      let timer = window.setInterval(tick, 1000);
      setTimer(timer);
    } else {
      clearInterval(timer);
    }
  }, [counting]);

  const startCountdown = () => {
    let secTot = Number(minutes) * 60 + Number(seconds);
    setCounter(secTot);
    setCounting(true);
  };

  const tick = () => {
    if (counter == 0) {
      setCounting(false);
      setModalVisible(true);
    } else {
      setCounter(counter--);
      seconds = counter % 60;
      minutes = Math.floor(counter / 60);
      setSeconds(formatNum(seconds));
      setMinutes(formatNum(minutes));
    }
  };

  return (
    <View style={styles.container}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Time!</Text>

            <TouchableHighlight
              style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
              onPress={() => {
                setModalVisible(!modalVisible);
              }}
            >
              <Text style={styles.textStyle}>Hide Modal</Text>
            </TouchableHighlight>
          </View>
        </View>
      </Modal>

      <Text>{counter}</Text>
      <CountdownDisplay minutes={minutes} seconds={seconds} />

      <TextInput
        style={{ fontSize: 40 }}
        onChangeText={(text) => setInput(text)}
        keyboardType={"numeric"}
      >
        {formatInput(input)}
      </TextInput>

      <View style={{ flexDirection: "row" }}>
        <TextInput
          placeholder="mm"
          style={styles.numberView}
          onChangeText={(text) => {
            let num = formatNum(text);
            setMinutes(num);
          }}
          value={minutes}
          keyboardType={"numeric"}
        />
        <Text style={{ fontSize: 40 }}>:</Text>
        <TextInput
          placeholder="ss"
          style={styles.numberView}
          onChangeText={(text) => {
            let num = formatNum(text);
            setSeconds(num);
          }}
          value={seconds}
          keyboardType={"numeric"}
        />
      </View>

      {counting ? (
        <View>
          <Button
            title="Stop"
            onPress={() => {
              setCounting(false);
            }}
          />
        </View>
      ) : (
        <Button title="Start" onPress={startCountdown} />
      )}

      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
    </View>
  );
}

const styles = StyleSheet.create({
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
  numberView: {
    fontSize: 40,
    width: 50,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 10,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  openButton: {
    backgroundColor: "#F194FF",
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});
