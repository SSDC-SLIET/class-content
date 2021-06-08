import React, { useState } from 'react'
import { View, StyleSheet, Text, TouchableOpacity, ImageBackground } from 'react-native'


const App = () => {

  const [image, setImage] = useState("https://picsum.photos/700/500?random=1")
  const fixedval = "https://picsum.photos/500/300?random=";

  const changeBackground = () => {


    let r = Math.floor(Math.random() * 10);




    setImage(fixedval + r);


  }


  return (

    <ImageBackground source={{ uri: image }} style={styles.image}>
      <View style={[styles.container]}>

        <TouchableOpacity style={styles.button} onPress={changeBackground}>
          <Text style={{ color: "#FFF" }}>Tap Me</Text>
        </TouchableOpacity>
        <Text> {image.uri}</Text>
      </View>
    </ImageBackground >

  )
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",

  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
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