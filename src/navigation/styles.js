import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    headerTitle: {
      fontSize: 14,
      fontWeight: '500',
      color: 'black',
      textTransform: 'capitalize'
    },
    avatarButton: {
      padding: 0,
    },
    row: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 5,
      marginHorizontal: 15,
    },
    avatar: {
      width: 28,
      height: 28,
      borderRadius: 50,
      resizeMode: 'contain',
    },
  
    rowhead: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 30
    },
  
    logo: {
      width: 80,
      resizeMode: 'contain'
    }
  });

  export default styles;