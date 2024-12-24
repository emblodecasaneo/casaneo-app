import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    filters: {
        flexDirection: "row",
        justifyContent: "space-around",
        flexWrap: "wrap",
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

      activeFilter:{
        backgroundColor: '#9ca6d9',
        borderRadius: 5,
        shadowColor: "gray",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.4,
        shadowRadius: 5,
        elevation: 6,
        paddingHorizontal:3,
        marginHorizontal:3
      },

    activeText: {
      color: "white",
      fontWeight: "500",
    },
    inactiveText: {
      color: "black",
    },
  });

  export default styles