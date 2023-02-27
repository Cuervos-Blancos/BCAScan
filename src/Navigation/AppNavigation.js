import React from "react";

//Importamos las rutas personalizadas
import Home from "../Screens/Home";
import Scan from "../Screens/Scanner";
import TecladoScreen from "../Screens/TecladoScreen";

// Importamos el createStackNavigator
import { createStackNavigator } from "@react-navigation/stack";

// Creamos el Stack ejecutando la funcion
const Stack = createStackNavigator();

//Declaramos funcion con el mapeo de la navegacion
const AppNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Menu"
        component={Home}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Scaner"
        component={Scan}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Teclado"
        component={TecladoScreen}
        options={{ headerShown: false }}
      />
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
