import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Card, Title, IconButton } from "react-native-paper";


const StatsCard = ({ icon, title, number, detail}) => {
  return (
    <Card style={styles.card}>
      <View style={styles.cardHeader}>
        <IconButton
          icon={icon}
          size={15}
          style={styles.icon}
        />
        <Title style={styles.title}>{title}</Title>
      </View>
      <Text style={styles.number}>{number}</Text>
      <Text style={styles.detail}>{detail}</Text>
    </Card>
  );
};

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
    width: "31%",
    height: 78,
    backgroundColor: 'white',
    alignItems:'center',
    marginBottom: 10,
    borderRadius:4
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
    color: '#7E8E9A'

  }
});

export default StatsCard;
