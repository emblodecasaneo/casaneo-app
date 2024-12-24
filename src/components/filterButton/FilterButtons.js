import React from "react";
import { View, Pressable, Text } from "react-native";
import styles from "./styles";

export default function FilterButtons({ filters, activeFilter, setFilter }) {
  return (
    <View style={styles.filters}>
      {filters.map((filter) => (
        <Pressable
          key={filter.value}
          style={[
            styles.filterButton,
            activeFilter === filter.value && styles.activeFilter,
          ]}
          onPress={() => setFilter(filter.value)}
        >
          <Text
            style={
              activeFilter === filter.value
                ? styles.activeText
                : styles.inactiveText
            }
          >
            {filter.label}
          </Text>
        </Pressable>
      ))}
    </View>
  );
}