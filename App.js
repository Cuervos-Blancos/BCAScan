import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

//Importa las rutas personalizadas
// import Home from './src/screens/Home';
import Scan from './src/Screens/Scanner';

const Stack = createStackNavigator();

function App() {
    return(
        <Stack.Navigator>
            <Stack-Screen name="Scanner" component={Scan}/>
            {/* <Stack-Screen name="Home" component={Home} /> */}
        </Stack.Navigator>
    )
}

export default () => {
    return (
        <NavigationContainer>
            <App />
        </NavigationContainer>
    )
}
