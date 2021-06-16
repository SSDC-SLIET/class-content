import React from 'react'
import { Text, StyleSheet, View } from 'react-native'
import { Button } from 'native-base'

const Home = ({ navigation, route }) => {
    return (
        <View style={styles.container}>

            <Button style={[styles.button, { marginTop: 0 }]} rounded block onPress={() => navigation.navigate('ColorChanger')}><Text>Color</Text></Button>
            <Button style={styles.button} rounded block onPress={() => navigation.navigate('ImageChanger')}><Text>Image</Text></Button>
            <Button style={styles.button} rounded block onPress={() => navigation.navigate('GithubImage')}><Text>Github Api Image</Text></Button>
        </View>
    )
}

export default Home


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',

    },
    button: {
        paddingVertical: 50,
        marginVertical: 50,
        marginHorizontal: 20
    }
})