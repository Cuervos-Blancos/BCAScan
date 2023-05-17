import React from "react";

//Importamos las rutas personalizadas
import HomeScreene from "../Screens/HomeScreen";
import ScanScreen from "../Screens/ScannerScreen";
// import TecladoScreen from "../Screens/TecladoScreen";

// Importamos el createStackNavigator
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../Screens/HomeScreen";
import TecladoScreen from "../Screens/TecladoScreen";

// Creamos el Stack ejecutando la funcion
const Stack = createStackNavigator();

//Declaramos funcion con el mapeo de la navegacion
const AppNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Menu"
        component={TecladoScreen}
        options={{ headerShown: false }}
      />
      {/* <Stack.Screen
        name="Scaner"
        component={ScannerScreenn}
        options={{ headerShown: false }}
      /> */}
      {/* <Stack.Screen
        name="Teclado"
        component={TecladoScreen}
        options={{ headerShown: false }}
      /> */}
      {/* <Stack.Screen
                name="Login"
                component={LoginScreen}
                options={{ headerShown: false }}
            /> */}
    </Stack.Navigator>
  );
};

//Exportamos funcion de navegacion.
export default AppNavigation;