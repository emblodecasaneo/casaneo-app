import React, { useState } from "react";
import { View, Text, StyleSheet, FlatList, Modal, Button, Pressable } from "react-native";
import { Divider, Checkbox, Switch } from "react-native-paper";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: "#f5f5f5",
  },
  card: {
    backgroundColor: "#fff",
    padding: 15,
    marginBottom: 10,
    borderRadius: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  cardTextDate: {
    color: "#7E8E9A",
    fontSize: 12,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 5,
  },
  cardText: {
    fontSize: 13,
    fontWeight: "500",
    color: "#555",
  },
  label: {
    fontWeight: "300",
    color: "#000",
  },

  
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    width: "80%",
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 20,
  },
  checkboxRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
  },
  checkboxLabel: {
    fontSize: 16,
  },

  filter:{
    width:30,
    height:30,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    elevation: 3,
    backgroundColor: "#fff",
    marginBottom:10
  }
});
