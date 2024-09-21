import {Text, View, StyleSheet, Pressable} from "react-native";
import {useState} from "react";
import {Calendar} from 'react-native-calendars'


export default function Index() {

    const [isCalendarVisible, setCalendarVisible] = useState(false); // State to control Calendar visibility
    const [isButtonVisible, setButtonVisible] = useState(true);
    // Function to show the Calendar
    const showCalendar = () => {
        setCalendarVisible(true);
    };

    // Function to hide the Calendar
    const hideCalendar = () => {
        setCalendarVisible(false);
    };

    const hideButton = () => {
        setButtonVisible(false);
    }

  return (
    <View style={styles.container}>
        {isButtonVisible && (
        <Pressable style={styles.button} onPress={()=>{
            showCalendar();
            hideButton();
        }}>
            <Text style={styles.plusSign}>+</Text>
        </Pressable>)}
      <Text style={styles.title}>Add New Workout Day</Text>
        {isCalendarVisible && <Calendar/>}


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
        marginTop: 20,
        marginBottom: 20,
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
