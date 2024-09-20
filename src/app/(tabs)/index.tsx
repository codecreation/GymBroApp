import {Text, View, StyleSheet, Pressable} from "react-native";



export default function Index() {
  return (
    <View style={styles.container}>
        <Pressable style={styles.button}>
            <Text style={styles.plusSign}>+</Text>
        </Pressable>
      <Text style={styles.title}>Add New Workout Day</Text>
    </View>
  );
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    title: {
        fontSize: 22,
        fontWeight: '600',
        marginTop: 20
    },

    button: {
        backgroundColor: 'green',    // Green background for the button
        borderRadius: 50,            // Round button
        width: 60,                   // Width of the button
        height: 60,                  // Height of the button
        justifyContent: 'center',    // Center the plus sign vertically
        alignItems: 'center',

    },

    plusSign:{
        fontSize: 30,
        color: 'white',
    },


})
