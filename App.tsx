import 'react-native-gesture-handler';
import React from "react";
import { View } from "react-native";
import { DefaultTheme, NavigationContainer, NavigatorScreenParams } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { AntDesign } from "@expo/vector-icons";
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { LinkingOptions } from '@react-navigation/native';
import Cart from "./View/Cart";
import Checkout from "./View/Checkout";
// Importación de tus vistas
import Home from "./View/Home";
import Profile from "./View/Profile";
import Settings from "./View/Settings";
import Details from "./View/Details";
import Login from './View/Login';

import { DrawerNavigationProp } from '@react-navigation/drawer';
import { CompositeNavigationProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import About from "./View/About";
import CustomDrawerContent from "./components/CustomDrawerContent";
import { CartProvider } from './context/CarContext';
/* -------------------- 1. TIPOS Y DEEP LINKING -------------------- */

export type HomeTabsParamList = {
  Home: undefined;
  Cart: undefined;
  Profile: undefined;
};

export type MainStackParamList = {
  HomeTabs: NavigatorScreenParams<HomeTabsParamList>;
  Details: { productId: string; name: string; price: string };
  Checkout: { total: number };
};

export type RootDrawerParamList = {
  MainStack: NavigatorScreenParams<MainStackParamList>;
  Settings: undefined;
  About: undefined;
  Login: undefined;
};

// Usa el tipo LinkingOptions con tu RootDrawerParamList
const linking: LinkingOptions<RootDrawerParamList> = {
  prefixes: ['myapp://', 'exp://192.168.0.25:8081/--/'], // Agrega tu IP actual aquí
  config: {
    screens: {
      // 1. Debe coincidir con el name en el Drawer.Navigator
      MainStack: {
        screens: {
          // 2. Debe coincidir con el name en el Stack.Navigator
          HomeTabs: {
            screens: {
              // 3. Debe coincidir con el name en el Tab.Navigator
              Home: 'home',
              Cart: 'cart', // <--- Esto hace que myapp://cart funcione
              Profile: 'profile',
            },
          },
          // Para myapp://product/999
          Details: 'product/:productId',
          Checkout: 'checkout',
        },
      },
      Settings: 'settings',
      About: 'about',
    },
  },
};

/* -------------------- 2. NAVIGATORS -------------------- */
const Tab = createBottomTabNavigator<HomeTabsParamList>();
const Stack = createNativeStackNavigator<MainStackParamList>();
const Drawer = createDrawerNavigator<RootDrawerParamList>();

/* -------------------- 3. TABS (Flujo Principal) -------------------- */
function HomeTabsNavigator() {
  return (
    <Tab.Navigator
      id= "MainTabs"
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#0f766e",
        tabBarInactiveTintColor: "#94a3b8",
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{ 
          tabBarIcon: ({ color, size }) => <AntDesign name="home" size={size} color={color} /> 
        }}
      />
        <Tab.Screen
          name="Cart"
          component={Cart}
          options={{ 
            // En AntDesign de Expo, el nombre exacto es "shopping-cart"
            tabBarIcon: ({ color, size }) => <AntDesign name="shopping-cart" size={size} color={color} />,
            title: "Carrito"
          }}
        />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{ 
          tabBarIcon: ({ color, size }) => <AntDesign name="user" size={size} color={color} />,
          title: "Mi Perfil"
        }}
      />
    </Tab.Navigator>
  );
}
/* -------------------- 4. STACK (Detalles y Checkout) -------------------- */
/* -------------------- 4. STACK (Detalles y Checkout) -------------------- */
function MainStackNavigator() {
  return (
    <Stack.Navigator 
      id="MainStack"
      screenOptions={{ headerShown: false }}
    >
      {/* 1. UNA SOLA DECLARACIÓN CON TODO EL CONTENIDO */}
      <Stack.Screen 
        name="HomeTabs" 
        component={HomeTabsNavigator} 
        options={({ navigation }) => ({
          headerShown: true,
          title: "e-commerce",
          headerTintColor: "#0f766e",
          headerLeft: () => (
            <AntDesign 
              name="bars" 
              size={24} 
              color="#0f766e" 
              style={{ marginLeft: 15 }} 
              onPress={() => (navigation as any).openDrawer()} 
            />
          ),
        })}
      />
      
      <Stack.Screen name="Details" component={Details} />
      <Stack.Screen name="Checkout" component={Checkout} />
    </Stack.Navigator>
  );
}

/* -------------------- 5. ROOT (DRAWER) -------------------- */
export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <CartProvider>

      <NavigationContainer
        linking={linking}
        theme={{
          ...DefaultTheme,
          colors: { ...DefaultTheme.colors, background: "#f8fafc" },
        }}
      >
        <Drawer.Navigator
          id="RootDrawer" // ID único para el navegador raíz
          drawerContent={(props) => <CustomDrawerContent {...props} />}
          screenOptions={{ 
            headerShown: true,
            drawerActiveTintColor: "#0f766e",
            headerTintColor: "#0f766e",
            drawerLabelStyle: { fontWeight: '600' }
          }}
        >
          <Drawer.Screen 
            name="MainStack" 
            component={MainStackNavigator} 
            options={{ 
    title: "Inicio",
    headerShown: false // <--- IMPORTANTE: Esto permite que el Stack muestre su propio Header
  }}
          />
          <Drawer.Screen 
            name="Settings" 
            component={Settings} 
            options={{ title: "Ajustes de Cuenta" }} 
          />
          <Drawer.Screen 
            name="About" 
            component={About} 
            options={{ title: "Sobre la App" }} 
          />

          <Drawer.Screen
  name="Login"
  component={Login} // Asegúrate de tener importada tu vista de Login arriba
  options={{
    title: 'Cerrar Sesión',
    drawerItemStyle: { height: 0 }, // Esto la oculta del listado del menú
    headerShown: false // Usualmente el Login no lleva el Header del Drawer
  }}
/>
        </Drawer.Navigator>
      </NavigationContainer>
      </CartProvider>
    </GestureHandlerRootView>
  );
}