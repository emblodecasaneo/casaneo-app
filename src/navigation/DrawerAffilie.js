import React, { useState } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Menu, Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import DashboardAffilie from '../screens/affilie/DashboardAffilie';
import ProgrammesAffilie from '../screens/affilie/ProgrammesAffilie';
import FacturationAffilie from '../screens/affilie/FacturationAffilie';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Entypo from "react-native-vector-icons/Entypo"

import logo from "../assets/logo.png"
import CustomDrawerContent from '../components/CustomDrawerContent';
import SupportAffilie from '../screens/affilie/SupportAffilie';

const Drawer = createDrawerNavigator();

export default function DrawerAffilie() {
  const [menuVisible, setMenuVisible] = useState(false);
  const navigation = useNavigation();

  const openMenu = () => setMenuVisible(true);
  const closeMenu = () => setMenuVisible(false);

  const handleLogout = () => {
    closeMenu();
    navigation.navigate('Acceuil'); // Redirige vers la page d'accueil
  };

  return (
    <Drawer.Navigator

    drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={({ route }) => ({
        headerStyle: {
          backgroundColor: 'white',
          shadowColor: "#878a99",
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.2,
          elevation: 3,
        },
        drawerActiveBackgroundColor: '#ebfcfb',
        drawerStyle: { width: '55%' },
        drawerItemStyle: { borderRadius: 3, marginBottom: 10 },
        headerTitleAlign: 'left',
        headerTitle: () => (<Text style={styles.headerTitle}>{route.name}</Text>),
        headerRight: () => (
          <View style={styles.row}>
            <View style={styles.row}>
              <MaterialCommunityIcons size={18} name='database' />
            </View>
                  <Image
                    source={logo}
                    style={styles.avatar}
                  />
          </View>
        ),
      })}
    >
      <Drawer.Screen
        options={{
          drawerIcon: ({ focused }) => (
            <Entypo
              name="grid"
              color={focused ? "#00d2c5" : "#7E8E9A"}
              size={20}
            />
          ),
          drawerLabel: ({ focused }) => (
            <Text style={{ color: focused ? 'black' : '#7E8E9A', fontSize: 14 }}>
              DASHBOARD
            </Text>
          ),
        }}
        name="DASHBOARD"
        component={DashboardAffilie}
      />

      <Drawer.Screen options={{
        drawerIcon: ({ focused }) => (
          <Entypo
            name="price-tag"
            color={focused ? "#00d2c5" : "#7E8E9A"}
            size={18}
          />
        ),
        drawerLabel: ({ focused }) => (
          <Text style={{ color: focused ? 'black' : '#7E8E9A', fontSize: 14 }}>
            PROGRAMMES
          </Text>
        ),
      }}
        name="PROGRAMMES" component={ProgrammesAffilie} />
      <Drawer.Screen options={{
        drawerIcon: ({ focused }) => (
          <Entypo
            name="images"
            color={focused ? "#00d2c5" : "#7E8E9A"}
            size={18}
          />
        ),
        drawerLabel: ({ focused }) => (
          <Text style={{ color: focused ? 'black' : '#7E8E9A', fontSize: 14 }}>
            SUPPORTS
          </Text>
        ),
      }} name="SUPPORTS" component={SupportAffilie} />

      <Drawer.Screen options={{
        drawerIcon: ({ focused }) => (
          <Entypo
            name="traffic-cone"
            color={focused ? "#00d2c5" : "#7E8E9A"}
            size={18}
          />
        ),
        drawerLabel: ({ focused }) => (
          <Text style={{ color: focused ? 'black' : '#7E8E9A', fontSize: 14 }}>
            OUTILS
          </Text>
        ),
      }} name="OUTILS" component={FacturationAffilie} />

      <Drawer.Screen options={{
        drawerIcon: ({ focused }) => (
          <Entypo
            name="pie-chart"
            color={focused ? "#00d2c5" : "#7E8E9A"}
            size={18}
          />
        ),
        drawerLabel: ({ focused }) => (
          <Text style={{ color: focused ? 'black' : '#7E8E9A', fontSize: 14 }}>
            STATISQUE
          </Text>
        ),
      }} name="STATISQUE" component={FacturationAffilie} />

      <Drawer.Screen options={{
        drawerIcon: ({ focused }) => (
          <Entypo
            name="email"
            color={focused ? "#00d2c5" : "#7E8E9A"}
            size={18}
          />
        ),
        drawerLabel: ({ focused }) => (
          <Text style={{ color: focused ? 'black' : '#7E8E9A', fontSize: 14 }}>
            TRANSACTION
          </Text>
        ),
      }} name="TRANSACTION" component={FacturationAffilie} />

      <Drawer.Screen options={{
        drawerIcon: ({ focused }) => (
          <Entypo
            name="wallet"
            color={focused ? "#00d2c5" : "#7E8E9A"}
            size={18}
          />
        ),
        drawerLabel: ({ focused }) => (
          <Text style={{ color: focused ? 'black' : '#7E8E9A', fontSize: 14 }}>
            FACTURATION
          </Text>
        ),
      }} name="FACTURATION" component={FacturationAffilie} />
    </Drawer.Navigator>
  );
}

const styles = StyleSheet.create({
  headerTitle: {
    fontSize: 14,
    fontWeight: '500',
    color: '#7E8E9A',
  },
  avatarButton: {
    padding: 0,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    marginHorizontal:15,
  },
  avatar: {
    width: 28,
    height: 28,
    borderRadius: 50,
    resizeMode: 'contain',
  },
});
