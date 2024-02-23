import React from 'react';
import { View, Text, Button } from 'react-native';

const Ad = () => {
    // Correctly use useNavigation hook to get the navigation object

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Ad Screen</Text>
            {/* Button onPress should be a function */}
        </View>
    );
}

export default Ad;
