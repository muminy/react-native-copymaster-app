import React from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import CopyLists from '../Pages/CopyLists';
import Create from '../Pages/Create';
import {ContextProvider} from '../Helpers/Context';
const Stack = createStackNavigator();

const MainApp = () => {
  return (
    <ContextProvider>
      <NavigationContainer>
        <StatusBar backgroundColor="#ffffff" barStyle="dark-content" />
        <Stack.Navigator
          screenOptions={{
            cardStyle: {backgroundColor: '#ffffff'},
            headerStyle: {elevation: 0, backgroundColor: '#ffffff'},
          }}>
          <Stack.Screen
            options={{headerShown: false}}
            name="Copy Lists"
            component={CopyLists}
          />
          <Stack.Screen
            options={{headerShown: false}}
            name="Create"
            component={Create}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </ContextProvider>
  );
};

export default MainApp;
