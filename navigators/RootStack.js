import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Colors } from "./../components/style";
const {primary,tertiary,secondary}=Colors;
import Login from './../screens/Login'
import Signup from './../screens/Signup';
import Home from './../screens/Home';

const Stack=createStackNavigator();
const RootStack=()=>{
    return( 
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerStyled:{
                        backgroundColor:'transparent'
                    },
                    headerTintColor:tertiary,
                    headerTransparent:true,
                    headerTitle:'',
                    headerLeftContainerStyle:{paddingLeft:20}
                }}
                initialRouteName="Login"
            >
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Signup" component={Signup} />
                <Stack.Screen options={{headerTintColor:tertiary}}name="Home" component={Home} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
export default RootStack;