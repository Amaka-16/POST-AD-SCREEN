import { Stack } from 'expo-router';
import "../global.css";


export default function RootLayout() {

  return (
    <Stack>
      <Stack.Screen name="screens/PostAdScreen" options={{ headerShown: false }}/>
    </Stack>
  );
}

// routing file