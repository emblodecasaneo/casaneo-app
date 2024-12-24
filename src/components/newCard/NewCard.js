import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { Card, Divider } from "react-native-paper";
import logo from "../../assets/logo.png";
import styles from "./styles";

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

export default NewCard;