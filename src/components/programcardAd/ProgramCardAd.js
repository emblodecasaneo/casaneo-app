import React, { useState } from "react";
import { View, Text, Image, StyleSheet, Modal, Button, Pressable } from "react-native";
import { Card, IconButton, DataTable, Divider } from "react-native-paper";
import Ionicons from "react-native-vector-icons/Ionicons";
import styles from "./styles";

const ProgramCardAd = ({ name, cpa, image, levier }) => {
    const [modalVisible, setModalVisible] = useState(false);

    const openModal = () => setModalVisible(true);
    const closeModal = () => setModalVisible(false);

    return (
        <>
            <Card style={styles.card}>
                <Card.Content>
                    <View style={styles.rowcontenair}>
                        <View style={styles.row}>
                            <Image source={{ uri: image }} style={styles.image} />
                            <View>
                                <Text>Rudy's Paris</Text>
                                <Text style={styles.levier}>Accessoires de mode</Text>
                            </View>
                        </View>
                        <View>
                            <Text style={styles.cpa}>CPA</Text>
                            <Text style={styles.levier}>7.00%</Text>
                        </View>
                        <View>
                            <Text style={styles.cpa}>Vente</Text>
                            <Text style={styles.levier}>0</Text>
                        </View>
                    </View>
                    <Divider style={styles.border} />
                    <View style={styles.rowcontenair}>
                        <View>
                            <Text style={styles.cpa}>ROAS</Text>
                            <Text style={styles.levier}>0.00</Text>
                        </View>
                        <View>
                            <Text style={styles.cpa}>AR</Text>
                            <Text style={styles.levier}>0%</Text>
                        </View>
                        <View>
                            <Text style={styles.cpa}>AR</Text>
                            <Text style={styles.levier}>0%</Text>
                        </View>
                        <View>
                            <Text style={styles.cpa}>Visibilité</Text>
                            <Text style={styles.levier}>Privé</Text>
                        </View>
                        <View>
                            <Text style={styles.cpa}>Gestionnaires</Text>
                            <Text style={styles.levier}>Tout le mode</Text>
                        </View>
                        <IconButton style={styles.more} onPress={openModal} size={15} icon={"magnify"} />
                    </View>
                </Card.Content>
            </Card>

            {/* Modal pour afficher les détails du programme */}
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={closeModal}
            >
                <View style={styles.modalOverlay}>
                    <View style={styles.modalContent}>
                        <View style={styles.rowmodal}>
                            <View style={styles.imagcontent}>
                                <Image source={{ uri: image }} style={styles.modalImage} />
                            </View>
                            <View style={styles.textcontent}>
                                <Text style={styles.remu}>Rémunération</Text>
                                <View style={styles.rowcontenair}>
                                    <View>
                                        <Text style={styles.cpa}>CPM</Text>
                                        <Text style={styles.levier}>0.00</Text>
                                    </View>
                                    <View>
                                        <Text style={styles.cpa}>Clics</Text>
                                        <Text style={styles.levier}>0.00</Text>
                                    </View>
                                    <View>
                                        <Text style={styles.cpa}>Lead</Text>
                                        <Text style={styles.levier}>0%</Text>
                                    </View>
                                    <View>
                                        <Text style={styles.cpa}>Vente</Text>
                                        <Text style={styles.levier}>0%</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                        <Card style={styles.cardDescribe}>
                            <Text style={styles.describe}>Description</Text>
                            <Text style={styles.contentDescribe}>{name} est une entreprise spécialisée dans la découpe de pièce sur mesure. Il offre la possibilité de créer des pièces simplement en ligne.Le mot d'ordre de John Steel : Faire simple et badass. Nous croyons en un service professionnel, de qualité et accessible à tous. Mais toujours avec une petite touche d'humour !</Text>
                        </Card>
                        <Card style={styles.cardDescribe}>
                            <Text style={styles.describe}>Conditions de diffusion</Text>
                            <Divider style={styles.border} />
                            <Text style={styles.describe}><Ionicons size={15} color={"green"} name="checkmark-circle-outline" />Autorisé</Text>
                            <Text style={styles.contentDescribe}>Code de réduction,
                                Comparateur de prix CPA,
                                Retargeting display,
                                Emailing dédié,
                                Retargeting,
                                Cashback,
                                Targeting display,
                            </Text>
                            <Divider style={styles.border} />
                            <Text style={styles.describe}>Cas par cas</Text>
                            <Text style={styles.contentDescribe}>Article sponsorisé,
                                Achat de mots clés (SEM),
                                Comparateur de prix (CPC),
                                Remarketing email</Text>
                        </Card>
                        <Pressable style={styles.btn} onPress={closeModal}>
                            <Text>Fermer</Text>
                        </Pressable>
                    </View>
                </View>
            </Modal>
        </>
    );
};

export default ProgramCardAd;
