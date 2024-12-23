import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import LoginAffilie from "../screens/affilie/Login";
import DrawerAnnonceur from "./DrawerAnnonceur";
import DrawerAffilie from "./DrawerAffilie";

const Stack = createNativeStackNavigator();

export default function MainNavigator() {
  return (
    <Stack.Navigator  initialRouteName="Acceuil">
      <Stack.Screen name="Connexion affilié" component={LoginAffilie} />
      <Stack.Screen name="Acceuil" component={HomeScreen} />
      <Stack.Screen name="Annonceur" component={DrawerAnnonceur} options={{ headerShown: false }} />
      <Stack.Screen name="Affilie" component={DrawerAffilie} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}
