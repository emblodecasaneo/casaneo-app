import React, { useState } from "react";
import { View, Text, FlatList, Modal, Pressable } from "react-native";
import { Divider, Checkbox } from "react-native-paper";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import styles from "./styles";

const transactions = [
  {
    id: "t5CfZZ5a",
    programName: "Nateo Concept",
    dateAdded: "2024-01-15",
    dateValidated: "2024-01-20",
    commission: 50,
    totalCost: 500,
    idcom: "60617",
    status: "Validé",
  },
  {
    id: "t5CfZY5a",
    programName: "ABC Meuble",
    dateAdded: "2024-01-15",
    dateValidated: "2024-01-20",
    commission: 500,
    totalCost: 1000,
    idcom: "60617",
    status: "Refusé",
  },
  {
    id: "t5CfZV5a",
    programName: "Ruy's Paris",
    dateAdded: "2024-01-15",
    dateValidated: "2024-01-20",
    commission: 50,
    totalCost: 500,
    idcom: "60617",
    status: "En attente",
  },
];

export default function FacturationAffilie() {
  const [visible, setVisible] = useState(false);
  const [filters, setFilters] = useState({
    programName: true,
    idcom: true,
    commission: true,
    totalCost: true,
    dateAdded: true,
    dateValidated: true,
    status: true,
  });

  const toggleFilter = (key) => {
    setFilters({ ...filters, [key]: !filters[key] });
  };

  return (
    <View style={styles.container}>
      {/* Modal for Filters */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={visible}
        onRequestClose={() => setVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            {Object.keys(filters).map((key) => (
              <View style={styles.checkboxRow} key={key}>
                <Checkbox 
                  status={filters[key] ? "checked" : "unchecked"}
                  onPress={() => toggleFilter(key)}
                />
                <Text style={styles.checkboxLabel}>{key}</Text>
              </View>
            ))}
            <Pressable onPress={() => setVisible(false)}>
              <Text style={{textAlign:'center'}}>Afficher</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Pressable style={styles.filter}
        onPress={() => setVisible(true)}>
        <MaterialCommunityIcons size={18} name="filter" />
      </Pressable>


      <FlatList
        data={transactions}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <View style={styles.row}>
              {filters.programName && (
                <Text style={styles.cardText}>{item.programName}</Text>
              )}
              {filters.idcom && (
                <Text style={styles.cardText}>
                  <Text style={styles.label}>Commande: </Text>
                  {item.idcom}
                </Text>
              )}
              <MaterialCommunityIcons name="more" size={16} color={"black"} />
            </View>
            <Divider style={{ marginBottom: 8 }} />
            <View style={styles.row}>
              {filters.commission && (
                <Text style={styles.cardText}>
                  <Text style={styles.label}>Commission: </Text>
                  {item.commission}€
                </Text>
              )}
              {filters.totalCost && (
                <Text style={styles.cardText}>
                  <Text style={styles.label}>Coût: </Text>
                  {item.totalCost}€
                </Text>
              )}
            </View>
            <Divider style={{ marginBottom: 5 }} />
            <View style={styles.row}>
              {filters.dateAdded && (
                <Text style={styles.cardTextDate}>
                  <Text style={styles.label}>Ajouté : </Text>
                  {item.dateAdded}
                </Text>
              )}
              {filters.dateValidated && (
                <Text style={styles.cardTextDate}>
                  <Text style={styles.label}>Validé : </Text>
                  {item.dateValidated}
                </Text>
              )}
              {filters.status && (
                <Text style={styles.cardText}>
                  {item.status === "Validé" ? (
                    <MaterialCommunityIcons
                      name="check-circle"
                      color={"green"}
                      size={18}
                    />
                  ) : item.status === "Refusé" ? (
                    <MaterialCommunityIcons
                      name="close-circle"
                      color={"red"}
                      size={18}
                    />
                  ) : (
                    <MaterialCommunityIcons
                      name="reload"
                      size={18}
                      color={"orange"}
                    />
                  )}
                </Text>
              )}
            </View>
          </View>
        )}
      />
    </View>
  );
}