import React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

// Importar las pantallas
import Pantalla1 from './screens/Pantalla1';
import Pantalla2 from './screens/Pantalla2';

// Pantalla de inicio
function HomeScreen({ navigation }) {
  return (
    <View>
      <Text>Bienvenido a la pantalla de inicio</Text>
      <Button title="Ir a Pantalla 1" onPress={() => navigation.navigate('Pantalla1')} />
      <Button title="Ir a Pantalla 2" onPress={() => navigation.navigate('Pantalla2')} />
    </View>
  );
}

// Navegación
const Tab = createBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;
            if (route.name === 'Home') {
              iconName = 'home';
            } else if (route.name === 'Pantalla1') {
              iconName = 'information-circle';
            } else if (route.name === 'Pantalla2') {
              iconName = 'settings';
            }

            return <Icon name={iconName} size={size} color={color} />;
          },
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Pantalla1" component={Pantalla1} />
        <Tab.Screen name="Pantalla2" component={Pantalla2} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
