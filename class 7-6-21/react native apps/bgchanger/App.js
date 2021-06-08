import React, { useState } from 'react'
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'


function rgbToHex(r, g, b) {
  return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}



const App = () => {

  const [bcgColor, setBcgColor] = useState("rgb(0,0,0)");
  const [hexcode, setHexCode] = useState("#000");

  const changeBackground = () => {

    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);

    let c = "rgb(" + r + "," + g + "," + b + ")";

    setBcgColor(c);


    setHexCode(rgbToHex(r, g, b));

  }

  return (
    <View style={[styles.container, { backgroundColor: bcgColor }]}>
      <TouchableOpacity style={styles.button} onPress={changeBackground}>
        <Text style={{ color: "#FFF" }}>Tap Me</Text>
      </TouchableOpacity>
      <Text style={styles.colorText}>
        {bcgColor}
      </Text>
      <Text style={styles.colorText}>
        {hexcode}
      </Text>
    </View>
  )
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",

  },
  button: {
    backgroundColor: "rgb(249,105,204)",
    padding: 20,
    borderRadius: 10
  },
  colorText: {
    marginVertical: 20,
    fontSize: 20,
    color: "#FFF"
  }
})