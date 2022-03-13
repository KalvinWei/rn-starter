import React from 'react';
import {Text, StyleSheet, View, Button} from 'react-native';

const HomeScreen = ({navigation}) => {
  return <View>
    <Text style={styles.text}>HomeScreen</Text>
    <Button title={"State Exercise Screen"} onPress={()=>navigation.navigate("StateExercise")} />
  </View>;
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
