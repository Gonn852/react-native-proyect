import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import MainScreen from '../screens/Main';
import OptionScreen from '../screens/Option';

const Stack = createStackNavigator();

export default function MainNavigation() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Main" component={MainScreen} options={{title:"", headerTransparent: true}} />
            <Stack.Screen name="Option" component={OptionScreen} />
        </Stack.Navigator>
    )
}
