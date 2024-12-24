import React, { useState } from "react";
import { View, Text, Pressable, ScrollView } from "react-native";
import ProgramCardAd from "../../../components/programcardAd/ProgramCardAd";
import styles from "./styles";

export default function ProgrammesAnnonceur() {
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [filter, setFilter] = useState("all"); // Filtre par défaut : tous les programmes
  const itemsPerPage = 8;

  // Données fictives
  const programs = [
    { id: 1, name: "4 Pieds Acquisition", cpa: "5.00%", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLGUnL-3YLI-5klFtmiqJYKuZzkf6lg4-5Aw&s", levier: "High", status: "Actifs" },
    { id: 2, name: "Nateo Concept", cpa: "8.00%", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4ZADc7wJ6gZ3izjxRCQ4XUtmqXwaLu3I0IA&s", levier: "Medium", status: "En attente" },
  ];


  // Filtrage
  const filteredPrograms = programs.filter((program) => {
    const matchesSearch = program.name.toLowerCase().includes(search.toLowerCase());
    const matchesFilter = filter === "all" || program.status === filter;
    return matchesSearch && matchesFilter;
  });

  // Pagination
  const paginatedPrograms = filteredPrograms.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );


  return (
    <ScrollView style={styles.container}>
      {/* Filtres */}
      <View style={styles.filters}>
        <Pressable
          style={[styles.filterButton, filter === "all" && styles.activeFilter]}
          onPress={() => setFilter("all")}
        >
          <Text style={filter === "all" ? styles.activeText : styles.inactiveText}>
            Tout
          </Text>
        </Pressable>
        <Pressable
          style={[
            styles.filterButton,
            filter === "Actifs" && styles.activeFilter,
          ]}
          onPress={() => setFilter("Actifs")}
        >
          <Text
            style={
              filter === "Actifs" ? styles.activeText : styles.inactiveText
            }
          >
            ActifS
          </Text>
        </Pressable>
        <Pressable
          style={[
            styles.filterButton,
            filter === "En attente" && styles.activeFilter,
          ]}
          onPress={() => setFilter("En attente")}
        >
          <Text
            style={
              filter === "En attente" ? styles.activeText : styles.inactiveText
            }
          >
            En attente
          </Text>
        </Pressable>
        <Pressable
          style={[
            styles.filterButton,
            filter === "Inactifs" && styles.activeFilter,
          ]}
          onPress={() => setFilter("Inactifs")}
        >
          <Text
            style={
              filter === "Inactifs" ? styles.activeText : styles.inactiveText
            }
          >
            Inactifs
          </Text>
        </Pressable>
      </View>

      {/* Liste des programmes */}
      {paginatedPrograms.map((item, index) => (
        <ProgramCardAd
          key={index}
          name={item.name}
          cpa={item.cpa}
          image={item.image}
          levier={item.levier}
        />
      ))}
    </ScrollView>
  );
}