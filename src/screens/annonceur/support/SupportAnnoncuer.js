import React, { useState } from "react";
import { View, Text, ScrollView, Pressable } from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import styles from "./styles";
import SupportCardAd from "../../../components/supportcardAd/SupportCardAd";
import FilterButtons from "../../../components/filterButton/FilterButtons";
import SearchableDropdown from "../../../components/searchabledropdown/SearchableDropdown";


export default function SupportAnnonceur() {
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [filter, setFilter] = useState("1");
  const [selectedPrograms, setSelectedPrograms] = useState([]);
  const itemsPerPage = 8;

  // Données fictives
  const programs = [
    { id: "1704", name: "Bannière générique - Lot 1", program: "ABC Meubles", taille: "320 x 50", ext: "GIF", add_date: "01/01/2025", image: "https://via.placeholder.com/150", type: "1" },
    { id: "170", name: "Bannière générique - Lot 1", program: "ABC Meubles", taille: "320 x 50", ext: "GIF", add_date: "01/01/2025", image: "https://via.placeholder.com/150", type: "1" },
    { id: "1601", name: "Bannière générique - Lot 1", program: "Ruy's Paris", taille: "320 x 50", ext: "GIF", add_date: "01/01/2025", image: "https://via.placeholder.com/150", type: "1" },
    { id: "57", name: "Lien Hompage", program: "ABC Meubles", display: "Public", add_date: "19/07/2023", address_url: "https://www.abc-meubles.com/fr/", type: "2" },
    { id: "56", name: "Catalogue F5", format: "CSV", program: "XYZ Meubles", online: 85, total_produit: 97, offline: 0, add_date: "19/07/2023", type: "4" },
    { id: "57", program: "ABC Meubles", add_date: "19/07/2023", name: "Code promo", description: "Code promo test", total_code: 3, attr: 2, n_attr: 1, type: "3" },
  ];

  const programOptions = [...new Set(programs.map((p) => p.program))];

  // Gestion des filtres
  const filteredPrograms = programs.filter((program) => {
    const matchesSearch = program.name.toLowerCase().includes(search.toLowerCase());
    const matchesFilter = program.type === filter;
    const matchesProgram = !selectedPrograms.length || selectedPrograms.includes(program.program);
    return matchesSearch && matchesFilter && matchesProgram;
  });

  const filters = [
    { value: "1", label: "Bannière" },
    { value: "2", label: "Adresse URL" },
    { value: "3", label: "Code promo" },
    { value: "4", label: "Catalogue" },
  ];

  // Pagination
  const paginatedPrograms = filteredPrograms.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  const handleNextPage = () => currentPage * itemsPerPage < filteredPrograms.length && setCurrentPage((prev) => prev + 1);
  const handlePreviousPage = () => currentPage > 1 && setCurrentPage((prev) => prev - 1);

  const handleSearchChange = (text) => setSearch(text);
  const handleProgramSelectionChange = (programs) => setSelectedPrograms(programs);

  return (
    <ScrollView style={styles.container}>
      {/* Filtres */}
      <FilterButtons filters={filters} activeFilter={filter} setFilter={setFilter} />

      {/* Barre de recherche et menu déroulant */}
      <SearchableDropdown
        searchPlaceholder="Rechercher..."
        dropdownPlaceholder="Tous les programmes"
        programOptions={programOptions}
        selectedPrograms={selectedPrograms}
        onSearchChange={handleSearchChange}
        onProgramSelectionChange={handleProgramSelectionChange}
      />

      {/* Liste des programmes */}
      <View style={styles.rows}>
        {paginatedPrograms.map((item, index) => (
          <SupportCardAd key={index} {...item} type={filter} />
        ))}
      </View>

      {/* Pagination */}
      {filteredPrograms.length > itemsPerPage && (
        <View style={styles.pagination}>
          <Pressable onPress={handlePreviousPage} disabled={currentPage === 1}>
            <FontAwesome size={16} color={currentPage === 1 ? "#ccc" : "#000"} name="chevron-left" />
          </Pressable>
          <Text style={styles.pageNumber}>{currentPage}</Text>
          <Pressable onPress={handleNextPage} disabled={currentPage * itemsPerPage >= filteredPrograms.length}>
            <FontAwesome size={16} color={currentPage * itemsPerPage >= filteredPrograms.length ? "#ccc" : "#000"} name="chevron-right" />
          </Pressable>
        </View>
      )}
    </ScrollView>
  );
}
