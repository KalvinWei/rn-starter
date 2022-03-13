import React, {useState} from 'react';
import {Text, View, StyleSheet, TextInput} from "react-native";

export default function StateExerciseScreen() {
    const [name, setName] = useState("example text");
    return (
        <View>
            <Text>Enter your name:</Text>
            <TextInput style={styles.input}
                       autoCapitalize="none"
                       autoCorrect={false}
                       value={name}
                       onChangeText={newVal=>setName(newVal)}
            />
            {name.length < 5 && <Text >name must be over 5 characters</Text>}
        </View>
    );
}

const styles = StyleSheet.create({
    input: {
        margin:15,
        paddingVertical:5,
        borderWidth:1,
        borderColor:"gray",
        borderRadius:2,
        fontSize:20
    }
});