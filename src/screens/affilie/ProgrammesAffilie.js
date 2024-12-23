import React, { useState } from "react";
import { View, Text, FlatList, StyleSheet, TextInput, Pressable, ScrollView } from "react-native";
import ProgramCard from "../../components/programcard/ProgramCard";
import FontAwesome from "react-native-vector-icons/FontAwesome";

export default function ProgrammesAffilie() {
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [filter, setFilter] = useState("all"); // Filtre par défaut : tous les programmes
  const itemsPerPage = 8;

  // Données fictives
  const programs = [
    { id: 1, name: "4 Pieds Acquisition", cpa: "5.00%", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLGUnL-3YLI-5klFtmiqJYKuZzkf6lg4-5Aw&s", levier: "High", status: "inscrit" },
    { id: 2, name: "Nateo Concept", cpa: "8.00%", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4ZADc7wJ6gZ3izjxRCQ4XUtmqXwaLu3I0IA&s", levier: "Medium", status: "en attente" },
    { id: 3, name: "ABC Meubles", cpa: "5.00%", image: "https://abc-meubles.com/img/og-logo-fr.png", levier: "Low", status: "inscrit" },
    { id: 4, name: "Chambre Kids", cpa: "7.00%", image: "https://www.chambrekids.com/img/logo-1681476342.jpg", levier: "High", status: "inscrit" },
    { id: 5, name: "Climsom", cpa: "30%", image: "https://www.climsom.com/img/logo_Climsom_prune_bleu_fonce.png", levier: "Medium", status: "en attente" },
    { id: 6, name: "Rudy's Paris", cpa: "6.00%", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRym32y0N3x0BGZ4q6smMmcKhVB7GEQBqGjMw&s", levier: "Low", status: "refusé" },
    { id: 7, name: "Sellpy", cpa: "7.00%", image: "https://www.sellpy.se/market/assets/img/sellpyOgImage.png", levier: "Low", status: "Active" },
    { id: 8, name: "Emile Henry", cpa: "7.00%", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHek4mc-yys3RCglboMN9c1YdrL6qH0m4kmg&s", levier: "Medium", status: "refusé" },
    { id: 9, name: "Traclet", cpa: "20%", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwegCG_brS8UQSK9ehUnI0BFoG7W7OUO8_AQ&s", levier: "High", status: "en attente" },
    { id: 10, name: "Nous le Savons", cpa: "7.00%", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRjbvyZGaxVd90Wx03sqqUSmelhPSJDOUEoQ&s", levier: "Medium", status: "inscrit" },
    { id: 11, name: "Paul Marius", cpa: "7.00%", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBs73kXKNDDSKfAXrIn6oIb4GaxUxlf26-gA&s", levier: "Low", status: "refusé" },
    { id: 12, name: "Happy Garden", cpa: "7.00%", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRr1XhjapKroztDlDfzvJTJ9m6xuO_B6If_IQ&s", levier: "High", status: "en attente" },
    { id: 13, name: "Miss Glam", cpa: "6.00%", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRumvgEwXhr7OMy9CoA6LnmWkDBlVQZFGg7ow&s", levier: "Medium", status: "inscrit" },
    { id: 14, name: "Emile & Ida", cpa: "6.00%", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpXac8wXHMAleCRqV4hCXy31Z3SxSqOU7z6w&s", levier: "Low", status: "refusé" },
    { id: 15, name: "Best Mobilier", cpa: "7.00%", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZ13UpIpWUCDGWoa-0ApIV171WWvCntgHguw&s", levier: "Low", status: "en attente" },
    { id: 16, name: "Livea Cashback", cpa: "8.00%", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSH_khAUJ2NwYpaEWvEN9cX-GTiWPoll_NLkw&s", levier: "Medium", status: "inscrit" },
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

  console.log('nombre de items', paginatedPrograms.length);

  const handleNextPage = () => {
    if (currentPage * itemsPerPage < filteredPrograms.length) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

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
            filter === "inscrit" && styles.activeFilter,
          ]}
          onPress={() => setFilter("inscrit")}
        >
          <Text
            style={
              filter === "inscrit" ? styles.activeText : styles.inactiveText
            }
          >
            Inscrit
          </Text>
        </Pressable>
        <Pressable
          style={[
            styles.filterButton,
            filter === "en attente" && styles.activeFilter,
          ]}
          onPress={() => setFilter("en attente")}
        >
          <Text
            style={
              filter === "en attente" ? styles.activeText : styles.inactiveText
            }
          >
            En attente
          </Text>
        </Pressable>
        <Pressable
          style={[
            styles.filterButton,
            filter === "refusé" && styles.activeFilter,
          ]}
          onPress={() => setFilter("refusé")}
        >
          <Text
            style={
              filter === "refusé" ? styles.activeText : styles.inactiveText
            }
          >
            Refusé
          </Text>
        </Pressable>
      </View>

      {/* Barre de recherche */}
      <TextInput
        style={styles.searchInput}
        placeholder="Rechercher..."
        value={search}
        onChangeText={setSearch}
      />

      {/* Liste des programmes */}
      <View style={styles.rows}>
        {paginatedPrograms.map((item, index) => (
          <ProgramCard
            key={index}
            name={item.name}
            cpa={item.cpa}
            image={item.image}
            levier={item.levier}
          />
        ))}
      </View>

      {/* Pagination */}
      {paginatedPrograms.length >= 8 && (
        <View style={styles.pagination}>
          <Pressable
            onPress={handlePreviousPage}
            disabled={currentPage === 1}
          >
            <FontAwesome size={16} color={currentPage === 1 && '#00d2c5'} name="chevron-left" />
          </Pressable>
          <Text style={styles.pageNumber}>{currentPage}</Text>
          <Pressable
            onPress={handleNextPage}
            disabled={currentPage * itemsPerPage >= filteredPrograms.length}
          >
          <FontAwesome size={16} color = {currentPage * itemsPerPage >= filteredPrograms.length && '#00d2c5'} name="chevron-right" />
          </Pressable>
        </View>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
    backgroundColor: "#f5f7fe",
  },
  searchInput: {
    height: 35,
    borderColor: "#ccc",
    borderWidth: .5,
    borderRadius: 4,
    marginBottom: 10,
    paddingHorizontal: 10,
    backgroundColor: "white",
  },
  filters: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 10,
    padding: 10,
    backgroundColor: 'white'
  },
  row: {
    justifyContent: "space-between",
    marginBottom: 10,
  },

  rows: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 10,
    justifyContent: "space-between",
  },

  pagination: {
    flexDirection: "row",
    justifyContent: 'center',
    gap: 30,
    alignItems: 'center',
    marginTop: 20,
  },
  pageNumber: {
    fontSize: 12,
    fontWeight: "500",
  },

  activeText: {
    color: "#9ca6d9",
    fontWeight: "500",
  },
  inactiveText: {
    color: "#000000",
  },
});
