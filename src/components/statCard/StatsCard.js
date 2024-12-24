import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Card, Title, IconButton } from "react-native-paper";
import styles from "./styles";


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

export default StatsCard;
