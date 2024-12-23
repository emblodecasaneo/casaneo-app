import React, { useState } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Menu, Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import DashboardAnnonceur from '../screens/annonceur/DashboardAnnonceur';
import ProgrammesAnnonceur from '../screens/annonceur/ProgrammesAnnonceur';
import FacturationAnnonceur from '../screens/annonceur/FacturationAnnonceur';

const Drawer = createDrawerNavigator();

export default function DrawerAnnonceur() {
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
      screenOptions={({ route }) => ({
        headerStyle: {
          backgroundColor: '#f4f4f4',
        },
        headerTitleAlign: 'center',
        headerTitle: () => <Text style={styles.headerTitle}>{route.name}</Text>, // Titre dynamique basé sur l'onglet
        headerRight: () => (
          <View style={{ marginRight: 10 }}>
            <Menu
              visible={menuVisible}
              onDismiss={closeMenu}
              anchor={
                <Button onPress={openMenu} style={styles.avatarButton}>
                  <Image
                    source={{
                      uri: 'https://i.pravatar.cc/300', // URL d'un avatar (image de profil)
                    }}
                    style={styles.avatar}
                  />
                </Button>
              }
            >
              <Menu.Item onPress={() => console.log('Profile clicked')} title="Profil" />
              <Menu.Item onPress={() => console.log('Settings clicked')} title="Paramètres" />
              <Menu.Item onPress={handleLogout} title="Déconnexion" />
            </Menu>
          </View>
        ),
      })}
    >
      <Drawer.Screen name="Dashboard" component={DashboardAnnonceur} />
      <Drawer.Screen name="Programmes" component={ProgrammesAnnonceur} />
      <Drawer.Screen name="Facturation" component={FacturationAnnonceur} />
    </Drawer.Navigator>
  );
}

const styles = StyleSheet.create({
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  avatarButton: {
    padding: 0,
  },
  avatar: {
    width: 30,
    height: 30,
    borderRadius: 50,
  },
});
