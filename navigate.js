import React from "react";
import {Button, Image} from 'react-native';
import Homepage from './components/Homepage';
import Account from './components/Account';

import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Seals from "./components/Seals";

const HomeStack = createNativeStackNavigator();

function LogoTitle() {
    return (
      <Image
        style={{
            width: 128,
            height: 32,
            resizeMode: 'contain',
            alignSelf: 'center',
            marginBottom: 8
        }}
        source={require('./assets/mainicon.png')}
      />
    );
}

function HomeStackScreen({ userData, setUserData}) {

    return (
            <HomeStack.Navigator
              screenOptions={{
                headerStyle: {
                  backgroundColor: '#fff',
                },
              }}
            >
                <HomeStack.Screen
                    name='Homepage'
                    component={()=><Homepage userData={userData} setUserData={setUserData}/>}
                    // children={()=><Homepage userData={userData} setUserData={setUserData}/>}
                    options={{
                      headerTitle: (props) => <LogoTitle />,
                      headerStyle: {
                        backgroundColor: '#fff',
                      },
                      headerShadowVisible: false, // applied here
                      headerBackTitleVisible: false,
                    }}
                />
            </HomeStack.Navigator>

    )
}

const AccountStack = createNativeStackNavigator();

function AccountStackScreen({ navigation, userData, setUserData}) {
    return (
        <AccountStack.Navigator
            initialRouteName='Account'
            screenOptions={{
                headerMode: 'screen',
                headerTintColor: 'white',
                headerStyle: { backgroundColor: '#5baeb7' },
                headerRight: () => (
                    <Button title="Seals"  color={'black'} onPress={() => navigation.navigate('Seals')}/>
                ),
            }}
        >
            <AccountStack.Screen
                name='Account'
                component={()=><Account userData={userData} setUserData={setUserData} />}
                options={
                  {
                    title: 'Account',
                  }
                }

            />
            <AccountStack.Screen
                name="Seals"
                component={() => <Seals />}
                options={
                    {
                        title: 'Few facts about seals'
                    }
                }
            />
        </AccountStack.Navigator>
    )
}

const Tab = createBottomTabNavigator();

export default function TabNavigation({userData, setUserData}) {

    return <NavigationContainer>
        <Tab.Navigator
            screenOptions={{
                // прячет двойной хедер
                headerShown: false,
                /// цвет шрифта активный
                tabBarActiveTintColor: '#141414',
                // цвет шрифта неактивный
                tabBarInactiveTintColor: '#787878',
                // лейбл - этикетка, а в нашем случае слово под иконкой (Головна, Налаштування)
                tabBarShowLabel: true,
                tabBarStyle: {
                  //paddingVertical: Platform.OS === 'ios' ? 0 : 0,
                  //height: 92,
                  backgroundColor: '#fff',
                  elevation: 0,
                  borderTopWidth: 0,
                },
                tabBarLabelStyle: {
                    fontSize: 14,
                },
              }}
        >

            <Tab.Screen
                // это плохая практика давать имена на укр./рус.
                name="Home"
                tabBarOptions = {{ showIcon: true }}
                options={{
                    tabBarLabel: 'Main',
                    tabBarIcon: ({ focused, color, size }) => (
                      <Image
                        source={
                          focused
                            ? require('./assets/hometablogoactive.png')
                            : require('./assets/hometablogoinactive.png')
                        }
                        style={{
                          width: size,
                          height: size,
                          borderRadius: size,
                        }}
                      />
                    ),
                }}
                component={()=><HomeStackScreen userData={userData} setUserData={setUserData}/>}
            />

            <Tab.Screen
                name="My account"
                tabBarOptions = {{ showIcon: true }}
                options={{
                    tabBarLabel: 'Account',
                    tabBarIcon: ({ focused, color, size }) => (
                      <Image
                        source={
                          focused
                            ? require('./assets/accounttablogoactive.png')
                            : require('./assets/accounttablogoinactive.png')
                        }
                        style={{
                          width: size,
                          height: size,
                          borderRadius: size,
                        }}
                      />
                    ),
                }}
                component={(props)=><AccountStackScreen userData={userData} setUserData={setUserData} {...props}/>}
            />
        </Tab.Navigator>
    </NavigationContainer>
}
