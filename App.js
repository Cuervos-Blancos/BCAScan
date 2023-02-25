import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { View, StyleSheet } from "react-native";
//Importa las rutas personalizadas
// import Home from './src/screens/Home';
// import Scan from './src/Screens/Scanner';import { TouchableOpacity, Alert } from "react-native";
import AppNavigation from "./src/Navigation/AppNavigation";

// const Stack = createStackNavigator();

// function App() {
//     return(
//         <Stack.Navigator>
//             <Stack-Screen name="Scanner" component={Scan}/>
//             {/* <Stack-Screen name="Home" component={Home} /> */}
//         </Stack.Navigator>
//     )
// }

// export default () => {
//     return (
//         <NavigationContainer>
//             <App />
//         </NavigationContainer>
//     )
// }

export default function App() {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <AppNavigation />
      </NavigationContainer>

      {/* <StatusBar style="auto" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
