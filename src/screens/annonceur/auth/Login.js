import React, { useState } from "react";
import { View, Text, Pressable, StyleSheet, TextInput, Image, TouchableOpacity, Alert } from "react-native";
import { useDispatch } from "react-redux";
import { login } from "../../../store/slices/AuthSlice";
import styles from "./styles";

import logo from "../../../assets/logo.png";

export default function Login({ navigation }) {
    const dispatch = useDispatch();
    const [email, setEmail] = useState("example@gmail.com");
    const [password, setPassword] = useState("123Fsds");
    const [error, setError] = useState(null);

    const handleLogin = () => {
        if (email === "" || password === "") {
            setError("Tous les champs sont requis.");
            return;
        }

        navigation.navigate("Annonceur");
        const loginPayload = { email, password };
        

        // Dispatch Redux
        /*dispatch(login(loginPayload))
            .then((response) => {
                if (response.payload?.success) {
                    setError(null);
                    navigation.navigate("Affilie"); // Navigation après succès
                } else {
                    setError("Login ou mot de passe incorrect.");
                }
            })
            .catch(() => {
                setError("Une erreur est survenue. Veuillez réessayer.");
            });

            */
    };

    return (
        <View style={styles.container}>
            <Image source={logo} resizeMode="contain" style={styles.logo} />

            <View style={styles.form}>
                {error && <Text style={styles.error}>{error}</Text>}

                <Text style={styles.label}>Login (adresse e-mail)</Text>
                <TextInput
                    style={styles.input}
                    placeholder="example@gmail.com"
                    placeholderTextColor="#999"
                    value={email}
                    onChangeText={setEmail}
                    keyboardType="email-address"
                    autoCapitalize="none"
                />

                <Text style={styles.label}>Mot de passe</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Xsy!dfdx"
                    placeholderTextColor="#999"
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry
                />

                <TouchableOpacity style={styles.button} onPress={handleLogin}>
                    <Text style={styles.buttonText}>Connexion</Text>
                </TouchableOpacity>

                <View style={styles.mdpforget}>
                    <Text style={styles.linkText}>Mot de passe oublié ?</Text>
                    <Pressable onPress={() => Alert.alert("Mot de passe oublié", "Lien de récupération envoyé !")}>
                        <Text style={styles.forget}>Cliquer ici</Text>
                    </Pressable>
                </View>
            </View>
        </View>
    );
}

