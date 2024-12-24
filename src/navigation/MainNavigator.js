import React from "react";
import { Text, StyleSheet } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import LoginAffilie from "../screens/affilie/auth/Login";
import DrawerAnnonceur from "./DrawerAnnonceur";
import LoginAnnonceur from "../screens/annonceur/auth/Login";
import DrawerAffilie from "./DrawerAffilie";

const Stack = createNativeStackNavigator();

const customHeaderTitle = (title) => (
  <Text style={styles.headerTitle}>{title}</Text>
);

export default function MainNavigator() {
  return (
    <Stack.Navigator initialRouteName="Acceuil">
      <Stack.Screen
        name="Connexion affilié"
        component={LoginAffilie}
        options={{
          headerTitle: () => customHeaderTitle("Connexion affilié"),
        }}
      />
      <Stack.Screen
        name="Connexion annonceur"
        component={LoginAnnonceur}
        options={{
          headerTitle: () => customHeaderTitle("Connexion annonceur"),
        }}
      />
      <Stack.Screen
        name="Acceuil"
        component={HomeScreen}
        options={{
          headerTitle: () => customHeaderTitle("Bienvenue sur votre application"),
        }}
      />
      <Stack.Screen
        name="Annonceur"
        component={DrawerAnnonceur}
        options={{
          headerShown: false, // Pas de header
        }}
      />
      <Stack.Screen
        name="Affilie"
        component={DrawerAffilie}
        options={{
          headerShown: false, // Pas de header
        }}
      />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  headerTitle: {
    color: "black",
    fontSize: 16,
    fontWeight: "500",
  },
});
