import React from "react";
import Scan from "../Screens/Scanner";

// Importamos el createStackNavigator
import { createStackNavigator } from "@react-navigation/stack";

// Creamos el Stack ejecutando la funcion
const Stack = createStackNavigator();

//Declaramos funcion con el mapeo de la navegacion
const AppNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Scaner"
        component={Scan}
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
