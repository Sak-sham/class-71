import React, { Component } from 'react'
import { NavigationContainer } from "@react-navigation/native"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import TransactionScreen from '../screens/Transaction'
import SearchScreen from '../screens/Search'

const Tab = createBottomTabNavigator();
export default class BottomTabNavigator extends Component {
    render() {
        return (
            <NavigationContainer>
                <Tab.Navigator

                    screenOptions={({ route }) => ({
                        tabBarIcon: ({ focused, color, size }) => {
                            let iconName;

                            if (route.name === 'Transaction') {
                                iconName = "book"
                            } else if (route.name === 'Search') {
                                iconName = "search"
                            }

                            // You can return any component that you like here!
                            return <Ionicons name={iconName} size={size} color={color} />;
                        },


                    })}
                    
                    tabBarOptions={{
                        activeTintColor:"white",
                        inactiveTintColor:"",
                        style:{
                            height:130,
                            borderTopWidth:0,
                            backgroundColor:"navy"
                        },
                        labelStyle:{
                            fontSize:20,
                            fontFamily:"Rajdhani_600SemiBold"
                    },
                    labelPosition:"beside-icon",
                    tabStyle:{
                        marginTop:20,
                        marginLeft:10,
                        marginRight:10,
                        borderRadius:30,
                        borderWidth:2,
                        alignItems:"center",
                        justifyContent:"center",
                        backgroundColor:"navy"
                    }
                    }}
                >

                    <Tab.Screen name="Transaction" component={TransactionScreen}>
                    </Tab.Screen>
                    <Tab.Screen name="Search" component={SearchScreen}>
                    </Tab.Screen>
                </Tab.Navigator>
            </NavigationContainer>
        )
    }

}