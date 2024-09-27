import {
    View,
    Text,
    StyleSheet,
    TextInput,
    ActivityIndicator,
    Button,
    KeyboardAvoidingView,
    TouchableOpacity
} from "react-native";
import {useEffect, useState} from "react";
import {useRouter} from 'expo-router';  // Import useRouter for navigation
import {FIREBASE_AUTH, reference} from "@/FirebaseConfig";
import {createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, User} from "@firebase/auth";
import {set} from "@firebase/database";

const Index = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const auth = FIREBASE_AUTH;
    const router = useRouter();  // Initialize useRouter for navigation
    const [user, setUser] = useState<User | null>(null);
    //const [userEmail, setUserEmail] = useState<string | null>(null);  // Store the authenticated user's email


    useEffect(() => {
        onAuthStateChanged(FIREBASE_AUTH, (user) => {
            setUser(user);
        });
    }, [])

    // Listen for authentication state changes (when the user logs in or logs out)
    // useEffect(() => {
    //     const unsubscribe = onAuthStateChanged(auth, (user) => {
    //         if (user) {
    //             setUser(user);  // Store the user object
    //             setUserEmail(user.email);  // Store the user's email from Firebase Auth
    //         } else {
    //             setUser(null);
    //             setUserEmail(null);
    //         }
    //     });
    //
    //     // Clean up the listener on component unmount
    //     return () => unsubscribe();
    // }, []);

    const signIn = async () => {
        setLoading(true);
        try {
            const response = await signInWithEmailAndPassword(auth, email, password);
            //setUserEmail(response.user.email)
            console.log(response);
            router.push('/auth/newDate');  // Navigate to NewDate screen after login
        } catch (err: any) {
            console.log(err);
            alert('Sign in failed ' + err.message);
        } finally {
            setLoading(false);
        }
    };

    const signUp = async () => {
        setLoading(true);
        try {
            const response = await createUserWithEmailAndPassword(auth, email, password);
            //setUserEmail(response.user.email);
            console.log(response);
            alert('Signed up successfully! Please login');
        } catch (err: any) {
            console.log(err);
            alert('Sign up failed ' + err.message);
        } finally {
            setLoading(false);
        }
    };


    return (
        <View style={styles.container}>
            <KeyboardAvoidingView behavior={'padding'}>
                <TextInput style={styles.input} value={email} placeholder='Email' autoCapitalize='none' onChangeText={setEmail} />
                <TextInput style={styles.input} secureTextEntry={true} value={password} placeholder='Password' autoCapitalize='none' onChangeText={setPassword} />
                {loading ? (
                    <ActivityIndicator size="large" color={'#393939'} />
                ) : (
                    <>
                        <View style={styles.button_container}>


                        <TouchableOpacity style={styles.button} onPress={signIn}>
                            <Text style={styles.button_text}>Login</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button} onPress={signUp}>
                            <Text style={styles.button_text}>Create Account</Text>
                        </TouchableOpacity>
                        </View>
                    </>
                )}
            </KeyboardAvoidingView>
        </View>
    );
};

export default Index;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // marginHorizontal: 20,
        justifyContent: "center",
        backgroundColor: "#dfdfdf",
    },
    input: {
        height: 50,
        borderColor: "#cccccc",
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 10,
        marginHorizontal: 20,
        marginBottom: 7,
        fontSize: 16,
        backgroundColor: "#f9f9f9",
    },

    button_container: {
        marginHorizontal: 100,
        marginVertical: 17,
        // justifyContent: "center",
        // alignItems: "center",

    },

    button: {
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#086b95",
        marginBottom: 7,
        borderRadius: 50,
        padding: 5,
    },

    button_text: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#fff"
    }


});
