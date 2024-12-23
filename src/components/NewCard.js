import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { Card, Divider } from "react-native-paper";
import logo from "../assets/logo.png"

const NewCard = ({ name, image }) => {
  return (
    <Card style={styles.card}>
        <Text style={styles.actu}>Actualités</Text>
        <Divider />
        <Card.Content>
        <View style={styles.cardHeader}>
          <Image source={logo} style={styles.image} />
          <View style={styles.textContainer}>
            <Text style={styles.programName}>{name}</Text>
            <Text style={styles.date}>Publié le 13.03.2024</Text>
          </View>
        </View>
        </Card.Content>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    width: "100%",
    marginTop: 10,
    justifyContent: 'center',
    backgroundColor: "white",
    padding:2,
    borderRadius:4
  },
  cardHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginTop:10
  },
  image: {
    width: 30,
    borderRadius: 4,
    marginRight: 3,
    resizeMode:'contain'
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
    textAlign:'center',
    marginBottom:5,
    marginTop:10,

  },

  actu:{
    ontSize: 11,
    marginBottom:8,
    marginTop:8,
    marginLeft:5
  }
});

export default NewCard;
