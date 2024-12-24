import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    customSection: {
      padding: 16,
      //borderTopWidth: 1,
      // borderTopColor: "#E0E0E0",
    },
    sectionTitle: {
      fontSize: 15,
      fontWeight: "400",
      color: "black",
      marginBottom: 8,
    },
    customItemText: {
      fontSize: 12,
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
      fontSize: 14,
      fontWeight: "400",
    },
  });

  export default styles