import { View, Text } from "react-native";
import Home from "./componants/Home";
import Dashboard from "./componants/Dashboard";
import SplashScreen from "./componants/SplashScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";


const Stack = createStackNavigator();
export default function App() {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="SplashScreen" component={SplashScreen} options={{ headerShown: false }} />
          <Stack.Screen name="Dashboard" component={Dashboard} options={{
            headerLeft: () => null,  // hide back button
            headerTitle: null,
            headerTintColor: "black",
            headerStyle: { shadowColor: "transparent" },
          }} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
