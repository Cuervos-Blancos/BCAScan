import React from 'react';
import { View, StyleSheet } from 'react-native';
import { TouchableOpacity, Alert } from "react-native";

import Scan from '../Screens/Scanner';

import { createStackNavigator } from '@react-navigation/stack';

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
}

export default AppNavigation;
