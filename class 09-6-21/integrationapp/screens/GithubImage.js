import React, { useEffect, useState } from 'react'
import { View, Text, Image, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native'
import Axios from 'axios'
import axios from 'axios';

function GithubImage() {

    const URL = "https://api.github.com/users/";

    const [avatarUrl, setAvatarUrl] = useState(null)
    const [name, setName] = useState(null)
    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = async () => {
        try {
            const secUrl = URL + name
            const { data } = await axios.get(secUrl);
            const au = data.avatar_url
            setAvatarUrl(au);
        }
        catch (err) {
            console.log(err)
        }
    }

    return (
        <ScrollView contentContainerStyle={styles.container} keyboardShouldPersistTaps='never' contentInsetAdjustmentBehavior="automatic">
            <View style={[styles.container]}>
                <Image source={{ uri: avatarUrl, width: 150, height: 250 }} />
                <TextInput style={styles.input} placeholder="Enter github handle" onChangeText={(inputVal) => setName(inputVal)}></TextInput>
                <TouchableOpacity style={{ backgroundColor: "blue", padding: 10, margin: 20 }} onPress={fetchData}><Text>Fetch</Text></TouchableOpacity>
            </View>
        </ScrollView>
    )
}

export default GithubImage
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',

    },
    input: {
        fontSize: 20,
        textAlign: "center",
        color: "#FFFFFF",
        borderWidth: 3,
        borderColor: "#FFF",
        marginTop: 20
    },

})