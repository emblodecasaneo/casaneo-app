import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { DrawerContentScrollView, DrawerItemList } from "@react-navigation/drawer";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Entypo from "react-native-vector-icons/Entypo";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import styles from "./styles";

 
export default function CustomDrawerContent(props) {
  const handleLogout = () => {
    props.navigation.navigate("Acceuil"); // Assurez-vous que "Acceuil" est bien défini dans votre navigation
  };

  const navigateToScreen = (screenName) => {
    props.navigation.navigate(screenName); // Navigue vers l'écran spécifié
  };


  return (
    <DrawerContentScrollView {...props} contentContainerStyle={{ flex: 1 }}>
      {/* Liste des items du Drawer */}
      <DrawerItemList {...props} />

      {/* Bloc pour ASSISTANCE */}
      <View style={styles.customSection}>
        <Text style={styles.sectionTitle}>Assistance</Text>
        <TouchableOpacity onPress={() => navigateToScreen("Assistance")}>
          <Text style={styles.customItemText}><Entypo name="help-with-circle" size={14}/> Centre d'aide</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigateToScreen("Support")}>
          <Text style={styles.customItemText}><FontAwesome name="support" size={14} /> Support tech</Text>
        </TouchableOpacity>
      </View>

      {/* Bloc pour PARAMÈTRES */}
      <View style={styles.customSection}>
        <Text style={styles.sectionTitle}>Parametres</Text>
        <TouchableOpacity onPress={() => navigateToScreen("ProfileSettings")}>
          <Text style={styles.customItemText}><MaterialCommunityIcons name="account" size={16}  /> Mon profile</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigateToScreen("NotificationSettings")}>
          <Text style={styles.customItemText}><Entypo size={14} name="notification" /> Notifications</Text>
        </TouchableOpacity>
      </View>

      {/* Bloc pour le bouton de déconnexion */}
      <View style={styles.footer}>
        <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
          <MaterialCommunityIcons name="logout" size={20} />
          <Text style={styles.logoutText}>Déconnexion</Text>
        </TouchableOpacity>
      </View>
    </DrawerContentScrollView>
  );
}
