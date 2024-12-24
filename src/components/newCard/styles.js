import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    card: {
      width: "100%",
      marginTop: 10,
      justifyContent: 'center',
      backgroundColor: "white",
      borderRadius: 5,
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.4,
      shadowRadius: 5,
      elevation: 6,
    },
    cardHeader: {
      flexDirection: "row",
      alignItems: "center",
      marginTop: 10
    },
    image: {
      width: 30,
      borderRadius: 4,
      marginRight: 3,
      resizeMode: 'contain'
    },
    textContainer: {
      justifyContent: "center",
    },
    programName: {
      fontSize: 12,
      fontWeight: "500",
    },
    date: {
      fontSize: 11,
      color: "#777",
      textAlign: 'center',
      marginBottom: 5,
      marginTop: 10,
  
    },
  
    actu: {
      ontSize: 11,
      marginBottom: 8,
      marginTop: 8,
      marginLeft: 5
    }
  });
  
  export default styles;
  