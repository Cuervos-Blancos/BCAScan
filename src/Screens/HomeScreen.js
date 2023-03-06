import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import MyTabs from '../Navigation/BottomTabNavigation';

// Agregar vita tipo menu/home antes de la vista del BottomTabNativagtion

const HomeScreen = () => {
    return (
        <SafeAreaView>
            <NavigationContainer>
                <MyTabs />
            </NavigationContainer>
        </SafeAreaView>
    );
}

export default HomeScreen;
