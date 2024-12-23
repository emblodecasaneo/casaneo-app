import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { DrawerContentScrollView, DrawerItemList } from "@react-navigation/drawer";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Entypo from "react-native-vector-icons/Entypo";
import FontAwesome from "react-native-vector-icons/FontAwesome";
 
export default function CustomDrawerContent(props) {
  const handleLogout = () => {
    props.navigation.navigate("Acceuil"); // Assurez-vous que "Acceuil" est bien défini dans votre navigation
  };

  const navigateToScreen = (screenName) => {
    props.navigation.navigate(screenName); // Navigue vers l'écran spécifié
  };

  const accountManagerName = "John Doe"; // Remplacez par une donnée dynamique

  return (
    <DrawerContentScrollView {...props} contentContainerStyle={{ flex: 1 }}>
      {/* Liste des items du Drawer */}
      <DrawerItemList {...props} />

      {/* Bloc pour ASSISTANCE */}
      <View style={styles.customSection}>
        <Text style={styles.sectionTitle}>ASSISTANCE</Text>
        <TouchableOpacity onPress={() => navigateToScreen("Assistance")}>
          <Text style={styles.customItemText}><Entypo name="help-with-circle" color="#7E8E9A" size={14}/> Centre d'aide</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigateToScreen("Support")}>
          <Text style={styles.customItemText}><FontAwesome name="support" size={14} color="#7E8E9A" /> Support tech</Text>
        </TouchableOpacity>
      </View>

      {/* Bloc pour PARAMÈTRES */}
      <View style={styles.customSection}>
        <Text style={styles.sectionTitle}>PARAMÈTRES</Text>
        <TouchableOpacity onPress={() => navigateToScreen("ProfileSettings")}>
          <Text style={styles.customItemText}><MaterialCommunityIcons name="account" size={16} color="#7E8E9A" /> Mon profile</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigateToScreen("NotificationSettings")}>
          <Text style={styles.customItemText}><Entypo size={14} name="notification" color="#7E8E9A" /> Notifications</Text>
        </TouchableOpacity>
      </View>

      {/* Bloc pour le bouton de déconnexion */}
      <View style={styles.footer}>
        <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
          <MaterialCommunityIcons name="logout" size={20} color="#7E8E9A" />
          <Text style={styles.logoutText}>Déconnexion</Text>
        </TouchableOpacity>
      </View>
    </DrawerContentScrollView>
  );
}

const styles = StyleSheet.create({
  customSection: {
    padding: 16,
    //borderTopWidth: 1,
    // borderTopColor: "#E0E0E0",
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: "400",
    color: "black",
    marginBottom: 8,
  },
  customItemText: {
    fontSize: 16,
    color: "#7E8E9A",
    marginTop: 8,
    paddingVertical: 4,
  },
  footer: {
    marginTop: "auto", // Place le bouton en bas
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: "#E0E0E0",
  },
  logoutButton: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  logoutText: {
    fontSize: 16,
    color: "#7E8E9A",
    fontWeight: "500",
  },
});
