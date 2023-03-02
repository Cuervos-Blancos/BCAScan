import React from 'react';
import { View, StyleSheet, Button } from 'react-native';

import { Styles } from '../Components/Styles';

const TecladoScreen = () => {
    return (
        <View>
            <View style={Styles.row}>
                <Button title="C" onPress={() => handleOperationPress("+/-")} />
                <Button title="+/-" onPress={() => handleOperationPress("+/-")} />
                <Button title="％" onPress={() => handleOperationPress("％")} />
                <Button title="÷" onPress={() => handleOperationPress("/")} />
            </View>
            <View style={Styles.row}>
                <Button title="7" onPress={() => handleNumberPress("7")} />
                <Button title="8" onPress={() => handleNumberPress("8")} />
                <Button title="9" onPress={() => handleNumberPress("9")} />
                <Button title="×" onPress={() => handleOperationPress("*")} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({})

export default TecladoScreen;
