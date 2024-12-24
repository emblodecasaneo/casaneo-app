import React from "react";
import { View, Text, Pressable, StyleSheet, Image } from "react-native";
import logo from "../assets/logo.png"

export default function HomeScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Image source={logo} resizeMode="contain" style={styles.logo} />
            <View style={styles.buttonContainer}>
                <Pressable
                    style={styles.button}
                    onPress={() => navigation.navigate("Connexion annonceur")}
                >
                    <Text style={styles.buttonText}>Annonceur</Text>
                </Pressable>
                <Text style={styles.buttonText}>|</Text>
                <Pressable
                    style={styles.button}
                    onPress={() => navigation.navigate("Connexion affilié")}
                >
                    <Text style={styles.buttonText}>Affilié</Text>
                </Pressable>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
    },

    buttonText: {
        color: "black",
        fontSize: 14,
        fontWeight: '500'
    },

    logo: {
        width: 200,
    },


    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap:5
    },
});