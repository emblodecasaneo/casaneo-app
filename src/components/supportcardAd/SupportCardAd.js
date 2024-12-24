import React, { useState } from "react";
import { View, Text, Image } from "react-native";
import { Card, Divider } from "react-native-paper";
import Entypo from "react-native-vector-icons/Entypo";
import Foundation from "react-native-vector-icons/Foundation";

import styles from "./styles";

const SupportCardAd = ({ name, image, program, add_date, display, total_produit, online, offline, format, total_code, taille, attr, n_attr, ext, id, type, address_url }) => {
    const openModal = () => setModalVisible(true);

    const renderTypeSpecificContent = () => {
        switch (type) {
            case '1':
                return (
                    <>
                        <View>
                            <Text style={styles.cpa}>Propriétés</Text>
                            <View>
                                <Text style={styles.levier}>{taille}</Text>
                                <Text style={styles.ext}>{ext}</Text>
                            </View>
                        </View>
                        <View style={{ alignContent: 'center', alignItems: 'center' }}>
                            <Text style={styles.cpa}>apercu</Text>
                            <Image source={{ uri: image }} style={styles.modalImage} />
                        </View>
                    </>
                );
            case '2':
                return (
                    <View>
                        <Text style={styles.cpa}>Addresse URL</Text>
                        <View>
                            <Text style={styles.ext}>{address_url}</Text>
                        </View>
                    </View>
                );
            case '3':
                return (
                    <>
                        <View>
                            <Text style={styles.cpa}>Code promo</Text>
                            <Text style={{ ...styles.levier, textAlign: 'center' }}>{total_code}</Text>
                        </View>
                        <View>
                            <Text style={styles.cpa}>Non attribué</Text>
                            <Text style={{ ...styles.levier, textAlign: 'center' }}>{n_attr}</Text>
                        </View>
                        <View>
                            <Text style={styles.cpa}>Attribué</Text>
                            <Text style={{ ...styles.levier, textAlign: 'center' }}>{attr}</Text>
                        </View>
                    </>
                );
            case '4':
                return (
                    <>
                        <View>
                            <Text style={styles.cpa}>Format</Text>
                            <View>
                                <Text style={styles.ext}>{format}</Text>
                            </View>
                        </View>
                        <View>
                            <Text style={styles.cpa}>Produits</Text>
                            <View>
                                <Text style={styles.ext}>{total_produit}</Text>
                            </View>
                        </View>
                        <View>
                            <Text style={styles.cpa}>En ligne</Text>
                            <View>
                                <Text style={styles.ext}>{online}</Text>
                            </View>
                        </View>
                        <View>
                            <Text style={styles.cpa}>Hors ligne</Text>
                            <View>
                                <Text style={styles.ext}>{offline}</Text>
                            </View>
                        </View>
                    </>
                );
            default:
                return null;
        }
    };

    const renderIcon = () => {
        const iconProps = { size: 16, onPress: openModal };
        if (type === '1') return <Entypo {...iconProps} name="link" />;
        if (['3', '4'].includes(type)) return <Foundation {...iconProps} name="indent-more" />;
        return null;
    };

    return (
        <Card style={styles.card}>
            <Card.Content>
                <View style={styles.rowcontenair}>
                    <View>
                        <Text style={styles.cpa}>ID</Text>
                        <Text style={styles.levier}>{id}</Text>
                    </View>
                    <View>
                        <Text style={styles.cpa}>
                            {type === '3' ? 'Groupe' : type === '4' ? 'Nom' : 'Nom du visuel'}
                        </Text>
                        <Text style={styles.levier}>{name}</Text>
                    </View>
                    {renderTypeSpecificContent()}
                </View>
                <Divider style={styles.border} />

                <View style={styles.rowcontenair}>
                    <View>
                        <Text style={styles.cpa}>Programme</Text>
                        <Text style={styles.levier}>{program}</Text>
                    </View>
                    {type === '2' && (
                        <View>
                            <Text style={styles.cpa}>Diffusion</Text>
                            <View>
                                <Text style={styles.ext}>{display}</Text>
                            </View>
                        </View>
                    )}
                    <View>
                        <Text style={{ ...styles.cpa, textAlign: 'center' }}>Ajouté</Text>
                        <Text style={styles.levier}>{add_date}</Text>
                    </View>
                    {type !== '2' && <View style={styles.more}>{renderIcon()}</View>}
                </View>
            </Card.Content>
        </Card>
    );
};

export default SupportCardAd;
