import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 15,
      backgroundColor: "#f5f5f5",
    },
    card: {
      backgroundColor: "#fff",
      padding: 15,
      marginBottom: 10,
      borderRadius: 3,
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 3,
    },
    cardTextDate: {
      color: "#7E8E9A",
      fontSize: 12,
    },
    row: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: 5,
    },
    cardText: {
      fontSize: 13,
      fontWeight: "500",
      color: "#555",
    },
    label: {
      fontWeight: "300",
      color: "#000",
    },
  
    
    modalContainer: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "rgba(0, 0, 0, 0.5)",
    },
    modalContent: {
      width: "80%",
      backgroundColor: "white",
      padding: 20,
      borderRadius: 10,
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
    },
    modalTitle: {
      fontSize: 18,
      fontWeight: "bold",
      marginBottom: 20,
    },
    checkboxRow: {
      flexDirection: "row",
      alignItems: "center",
      marginBottom: 15,
    },
    checkboxLabel: {
      fontSize: 16,
    },
  
    filter:{
      width:30,
      height:30,
      justifyContent:'center',
      alignItems:'center',
      borderRadius:3,
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      elevation: 3,
      backgroundColor: "#fff",
      marginBottom:10
    }
  });

  export default styles;