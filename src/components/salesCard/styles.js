import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      padding: 15,
      height: "100%",
  
    },
    title: {
      fontSize: 12,
      fontWeight: "600",
    },
    row: {
      flexDirection: "row",
      flexWrap: "wrap",
      justifyContent: 'space-between',
    },
    card: {
      width: "100%",
      height: 78,
      backgroundColor: 'white',
      alignItems:'center',
      marginBottom: 10,
      borderRadius:5,
      shadowColor: "gray",
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.4,
      shadowRadius: 5,
      elevation: 6,
    },
    cardHeader: {
      flexDirection: "row",
      alignItems: "center",
    },
    icon: {
      backgroundColor: '#e6fbfa',
      width: 20,
      height: 20,
      margin: 4
    },
  
    number:{
      textAlign:'center',
      fontWeight:'500',
      marginBottom: 10
    },
  
    detail:{
      textAlign: 'center',
      fontSize: 10,
      color: 'black'
  
    }
  });

  export default styles;
  