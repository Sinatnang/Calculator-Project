// import React, { Component } from "react";
import { useState } from "react";
import { StatusBar } from "react-native";
import { SafeAreaView, StyleSheet, Text, View, Switch } from "react-native";
// import Button from "./components/Button";
// import Row from "./components/Row";
// import calculator, { initialState } from "./components/util/calculator";
import {myColors} from "./src/styles/Colors";
import { ThemeContext } from "./src/context/ThemeContext";
import Button from "./src/commponents/Button";
import MyKeyboard from "./src/commponents/MyKeyboard";

// create class component of App
export default function App() {
 
  const [theme,setTheme] = useState('light');

  // render() {

    return (
      <ThemeContext.Provider value={theme}>
        <View style={theme === 'light'? styles.container: [styles.container, {backgroundColor:'#000'}]}>
            <StatusBar style="auto"/>
            <Switch
              value={theme === 'light'}
              onValueChange={() => setTheme(theme === 'light' ? 'dark' : 'light')}
              />
              <MyKeyboard/>
        </View>
      </ThemeContext.Provider>
      
    );
  // }
}

// create styles of app
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: myColors.light,
    alignItems:'center',
    justifyContent: "flex-start",
  },
  value: {
    color: "#fff",
    fontSize: 42,
    textAlign: "right",
    marginRight: 20,
    marginBottom: 10,
  },
});