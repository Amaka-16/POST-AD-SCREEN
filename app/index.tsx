import React from 'react';
import {
    View,
    Text,
    Button,
    TouchableOpacity,
    Pressable,
    StyleSheet
} from 'react-native';
import { useRouter } from 'expo-router';

export default function SplashScreen() {
    const router = useRouter();

    return (
       <>
       <View style={styles.container}>
        <Text style={styles.titleText}>Welcome to my Splash on my first mobile app</Text>
        <Text>This is another Text</Text>
         
         {/* Using Button */}
         <View style={styles.btnFlex}>
            {/*first Button (using Button) */}
            <Button
            title="Click me"
            onPress={() => alert("Button Pressed")}
         />
         {/*Second Button (using Touchable Opacity) */}
         <TouchableOpacity
            onPress={() => router.push('./screens/PostAdScreen')}
            style={styles.touchBtn}>
                <Text style={styles.touchText}>Click me</Text>
         </TouchableOpacity>

         {/* Third Button (using Pressable)*/}
         <Pressable
            onPress={() => router.push('./screens/PostAdScreen')}
            style={styles.pressBtn}>
            <Text style={styles.touchText}>Click me Pressable</Text>
            </Pressable>
            </View>

            <View className="mt-5">
                <Text className="text-center text-red-800 mt-5">A little touchbase of tailwindcss</Text>
            </View>
            </View>
            </>

            
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        color: '#000',
        alignItems: 'center',
        position: 'absolute',
        top:  40, 
        backgroundColor: 'pink',
        height: '100%',
        width: '100%',
    },
    titleText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white'
    },
    btnFlex: {
        flexDirection: 'row',
        paddingTop: 24,
        gap: 8,
        justifyContent: 'center',
        alignItems: 'center'
    },
    touchBtn: {
        width: 120,
        height: 32,
        borderRadius: 8,
        padding: 7,
        backgroundColor: 'gray',
    },
    touchText: {
        color: '#fff',
        textAlign: 'center'
    },
    pressBtn: {
        width: 120,
        height: 32,
        borderRadius: 8,
        padding: 7,
        backgroundColor: '#006400',
    }
});