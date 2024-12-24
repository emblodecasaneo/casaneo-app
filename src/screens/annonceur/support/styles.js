import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      padding: 15,
      backgroundColor: "white",
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

    multiSelectDropdown: {
     width:'55%',
     marginVertical:10,
    },

    searchContainer:{
      flexDirection:'row',
      alignItems:'center',
      justifyContent:'space-between',
    },
    dropdownHeader: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      borderWidth: .5,
      borderColor: "#ccc",
      paddingHorizontal: 10,
      paddingVertical: 8,
      backgroundColor: "white",
      borderRadius: 5,
      shadowColor: "gray",
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.4,
      shadowRadius: 5,
      elevation: 6,
    },
    dropdownHeaderText: {
      flex: 1,
      marginRight: 5,
      fontSize:13
    },
    dropdownOptions: {
      position: "absolute",
      top: "100%",
      left: 0,
      right: 0,
      backgroundColor: "white",
      borderWidth: 1,
      borderColor: "#ccc",
      borderRadius: 5,
      zIndex: 10,
      maxHeight: 150,
      shadowColor: "gray",
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.9,
      shadowRadius: 5,
      elevation: 6,
      overflow: "scroll",
    },
    dropdownOption: {
      flexDirection: "row",
      alignItems: "center",
      paddingVertical: 8,
      paddingHorizontal: 10,
    },
    checkbox: {
      marginRight: 10,
    },
    dropdownOptionText: {
      flex: 1,
    },
  });

  export default styles;