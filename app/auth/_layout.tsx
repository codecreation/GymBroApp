// _layout.tsx
import {Stack, usePathname, useRouter} from "expo-router";
import {FIREBASE_AUTH} from "@/FirebaseConfig";
import {signOut} from "@firebase/auth";
import {async} from "@firebase/util";
import {Button, View, StyleSheet, Text, Pressable, TouchableOpacity} from "react-native";
import {pathAsArray} from "@jest/expect-utils";

export default function RootLayout() {

    const router = useRouter()
    const pathName = usePathname()

    const handleLogOut = async () => {
        try {
            await signOut(FIREBASE_AUTH);
            router.push("/");
        }catch(error){
            console.log("Log out failed: ", error);
        }
    }



    return (
        <View style={styles.container}>

        <View>
                <TouchableOpacity style={styles.button} onPress={handleLogOut}>
                    <Text style={styles.text}>Logout</Text>
                </TouchableOpacity>





        </View>


        <Stack>
            {/*<Stack.Screen name="index" options={{ headerShown: false }} />*/}
            <Stack.Screen name="newDate" options={{ title: "New Date", headerShown: false }} />



        </Stack>

        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    button: {
        // alignItems: "flex-end",
        // paddingTop: 30,
        // paddingRight: 15,
        // paddingBottom: 5
        justifyContent: "flex-end",
        alignItems: "flex-end",
        marginLeft: 320,
        marginTop: 10,
        margin: 5,
        //backgroundColor: "#086b95",


    },

    text: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#0000ff',

    }

})
