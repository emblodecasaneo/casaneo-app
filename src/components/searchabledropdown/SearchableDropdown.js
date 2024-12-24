import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import AntDesign from "react-native-vector-icons/AntDesign"
import styles from "./styles";

const SearchableDropdown = ({
  searchPlaceholder = "Rechercher...",
  dropdownPlaceholder = "Tous les programmes",
  programOptions = [],
  selectedPrograms = [],
  onSearchChange,
  onProgramSelectionChange,
}) => {
  const [search, setSearch] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleProgramSelection = (program) => {
    const updatedPrograms = selectedPrograms.includes(program)
      ? selectedPrograms.filter((p) => p !== program)
      : [...selectedPrograms, program];

    onProgramSelectionChange(updatedPrograms);
  };

  return (
    <View style={styles.searchContainer}>
      {/* Barre de recherche */}
      <TextInput
        style={styles.searchInput}
        placeholder={searchPlaceholder}
        value={search}
        onChangeText={(text) => {
          setSearch(text);
          onSearchChange(text);
        }}
      />

      {/* Menu déroulant avec cases à cocher */}
      <View style={styles.multiSelectDropdown}>
        <TouchableOpacity
          style={styles.dropdownHeader}
          onPress={() => setDropdownOpen(!dropdownOpen)}
        >
          <Text style={styles.dropdownHeaderText}>
            {selectedPrograms.length
              ? selectedPrograms.join(", ")
              : dropdownPlaceholder}
          </Text>
          <AntDesign
            name={dropdownOpen ? "up" : "down"} size={12} />
        </TouchableOpacity>
        {dropdownOpen && (
          <View style={styles.dropdownOptions}>
            {programOptions.map((program, index) => (
              <TouchableOpacity
                key={index}
                style={styles.dropdownOption}
                onPress={() => toggleProgramSelection(program)}
              >
                <AntDesign
                  name={selectedPrograms.includes(program) ? "check-square" : "square-o"}
                  size={16}
                  style={styles.checkbox}
                />
                <Text style={styles.dropdownOptionText}>{program}</Text>
              </TouchableOpacity>
            ))}
          </View>
        )}
      </View>
    </View>
  );
};

export default SearchableDropdown;
