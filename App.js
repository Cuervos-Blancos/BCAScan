// import { StatusBar } from 'expo-status-bar';
// import React, { useState, useEffect } from 'react';
// import { Text, View, StyleSheet, Button } from 'react-native';
// import { BarCodeScanner } from 'expo-barcode-scanner';

// export default function App() {
//   // Variables de estado
//   const [hasPermission, setHasPermission] = useState(null);
//   const [scanned, setScanned] = useState(false);
  
//   //Hook de efecto para que al cargar nuestra aplicación obtenga el estado del permiso de accesar a la cámara y lo almacene en una variable de estado con la función setPermisoCamara 
//   useEffect(() => {
//     const getBarCodeScannerPermissions = async () => {
//       const { status } = await BarCodeScanner.requestPermissionsAsync();
//       setHasPermission(status === 'granted');
//     };

//     getBarCodeScannerPermissions();
//   }, []);

//   // Función que gestionara el comportamiento cuando se detecte un código, en este caso establecer una variable de estado que le dice a la app que ya se ha escaneado un código y mostrar un alert con los datos del mismo
//   const handleBarCodeScanned = ({ type, data }) => {
//     setScanned(true);
//     alert(`Bar code with type ${type} and data ${data} has been scanned!`);
//   };

//   //Validaciones que nos permitan determinar que hacer si el permiso de la cámara no se ha obtenido aún o ha sido denegado
//   if (hasPermission === null) {
//     return <Text>Requesting for camera permission</Text>;
//   }
//   if (hasPermission === false) {
//     return <Text>No access to camera</Text>;
//   }

//   return (
//     <View style={styles.container}>
//       <BarCodeScanner
//         onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
//         style={StyleSheet.absoluteFillObject}
//       />
//       {scanned && <Button title={'Tap to Scan Again'} onPress={() => setScanned(false)} />}
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

//Importa las rutas personalizadas
import Home from './src/screens/Home';
import Scanner from './src/Screens/Scanner';

const Stack = createStackNavigator();

function App() {
    return(
        <Stack.Navigator>
            <Stack-Screen name="Scanner" component={Scanner}/>
            <Stack-Screen name="Home" component={Home} />
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
