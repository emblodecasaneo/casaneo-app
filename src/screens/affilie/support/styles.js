import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      padding: 15,
      backgroundColor: "white",
    },
    searchInput: {
      height: 35,
      width: '35%',
      borderColor: "#f5f7fe",
      borderWidth: .5,
      marginBottom: 10,
      paddingHorizontal: 10,
      backgroundColor: "white",
      borderRadius: 5,
      shadowColor: "gray",
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.4,
      shadowRadius: 5,
      elevation: 6,
    },
    filters: {
      flexDirection: "row",
      justifyContent: "space-around",
      marginVertical: 10,
      padding: 10,
      backgroundColor: 'white',
      borderRadius: 5,
      shadowColor: "gray",
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.4,
      shadowRadius: 5,
      elevation: 6,
    },
    row: {
      justifyContent: "space-between",
      marginBottom: 10,
    },
  
    rows: {
      flexDirection: "row",
      flexWrap: "wrap",
      marginTop: 10,
      justifyContent: "space-between",
    },
  
    pagination: {
      flexDirection: "row",
      justifyContent: 'center',
      gap: 30,
      alignItems: 'center',
      marginTop: 20,
    },
    pageNumber: {
      fontSize: 12,
      fontWeight: "500",
    },
  
    activeText: {
      color: "#9ca6d9",
      fontWeight: "500",
    },
    inactiveText: {
      color: "#000000",
    },
  });

  export default styles;