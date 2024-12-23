import React from "react";
import { View, StyleSheet, Text, FlatList, Pressable, ScrollView } from "react-native";
import StatsCard from "../../components/StatsCard";
import ProgramCard from "../../components/programcard/ProgramCard";
import { Card, Divider, Icon, List } from "react-native-paper";
import SalesCard from "../../components/SalesCard";
import NewCard from "../../components/NewCard";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"


export default function DashboardAffilie({ navigation }) {
    const stats = [
        { icon: "eye", title: "Impressions", number: 3678, detail: "30 derniers jours" },
        { icon: "mouse", title: "Clics", number: 1245, detail: "30 derniers jours" },
        { icon: "account-box", title: "Leads", number: 120, detail: "30 derniers jours" },
    ];

    const totalvente = { icon: "wallet", title: "Ventes", number: 78, detail: "30 derniers jours" };


    const programs = [
        { name: "John Steel 2", cpa: '7.00 %', image: "https://www.john-steel.com/img/john-steel-logo-1603725720.jpg", levier: 'Ameublement' },
        { name: "Axodeco", cpa: '5.00 %', image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSXL5kXxFF7QUMJZ8ob1ElnAIZertSJDN42g&s", levier: 'Bricolage' },
    ];

    const news = { name: "Bienvenue sur votre application mobile Casaneo ", cpa: 60, image: "https://example.com/programmeC.jpg" };


    const commissions = [
        { title: "Trackées", soustitre: 'En attente de validation', amount: 700 },
        { title: "Attente", soustitre: 'Non payé à Casaneo.io', amount: 250 },
        { title: "Validées", soustitre: 'En attente de facturation', amount: 1000 },
    ];

    const payments = [
        { id: 1, date: "15/12/2024", amount: 500 },
        { id: 2, date: "01/12/2024", amount: 300 },
        { id: 3, date: "20/11/2024", amount: 450 },
    ];

    return (
        <ScrollView style={styles.container}>
            {/* Statistiques */}
            <View style={styles.row}>
                {stats.map((item, index) => (
                    <StatsCard
                        key={index}
                        icon={item.icon}
                        title={item.title}
                        number={item.number}
                        detail={item.detail}
                    />
                ))}
            </View>

            <Text style={styles.commissionsTitle}>Commissions</Text>
            <View style={styles.commissionsRow}>
                {commissions.map((item, index) => (
                    <Card key={index} style={styles.commissionCard}>
                        <Text style={styles.commissionTitle}>{item.title}</Text>
                        <Text style={styles.soustitre}>{item.soustitre}</Text>
                        <Text style={styles.commissionAmount}>{item.amount} €</Text>
                    </Card>
                ))}
            </View>

            <Card style={styles.programsContainer}>
                <View style={styles.row}>
                    <Text style={styles.programsTitle}>Derniers Programmes</Text>
                    <Pressable
                        style={styles.button}
                        onPress={() => navigation.navigate("PROGRAMMES")}
                    >
                        <MaterialCommunityIcons size={18} name="arrow-right"/>
                    </Pressable>
                </View>
                <Divider />

                <View style={styles.row}>
                    {programs.map((item, index) => (
                        <ProgramCard
                            key={index}
                            name={item.name}
                            cpa={item.cpa}
                            image={item.image}
                            levier={item.levier}
                        />
                    ))}
                </View>
            </Card>

            <View style={styles.row}>
                <View style={styles.boxpay}>
                    <Text style={styles.paymentsTitle}>Derniers paiements</Text>
                    {payments.map((item, index) => (
                        <Card key={index} style={styles.cardPay}>
                            <Text style={styles.commissionTitle}><Icon source={'wallet'} /> {item.amount}€</Text>
                            <Text style={styles.soustitre}><MaterialCommunityIcons name="calendar" /> {item.date}</Text>
                        </Card>
                    ))}
                </View>
                <View style={styles.boxvente}>
                    <SalesCard
                        icon={totalvente.icon}
                        title={totalvente.title}
                        number={totalvente.number}
                        detail={totalvente.detail}
                    />
                    <NewCard
                        name={news.name}
                        cpa={news.cpa}
                        image={news.image}
                    />
                </View>
            </View>
        </ScrollView>


    );
}

const styles = StyleSheet.create({
    container: {
        padding: 15,
        height: "100%",
        backgroundColor: '#f5f7fe'
    },
    row: {
        flexDirection: "row",
        flexWrap: "wrap",
        marginTop: 10,
        justifyContent: "space-between",
    },
    programsContainer: {
        marginTop: 20,
        backgroundColor: 'white',
        borderRadius: 4,
        padding: 10
    },

    soustitre: {
        fontSize: 11,
        color: '#9ca6d9',
        marginBottom: 5,
    },
    programsTitle: {
        fontSize: 14,
        fontWeight: "500",
        marginBottom: 10,
    },
    commissionsTitle: {
        fontSize: 14,
        fontWeight: "500",
        marginTop: 20,
        marginBottom: 10,
    },
    commissionsRow: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between",
    },
    commissionCard: {
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 4,
        marginBottom: 10,
        width: '30%', // Two cards per row
    },
    commissionTitle: {
        fontSize: 12,
        fontWeight: "500",
    },
    commissionAmount: {
        fontSize: 14,
        fontWeight: "500",
    },

    paymentsTitle: {
        fontSize: 14,
        fontWeight: "500",
        marginBottom: 10,
    },
    listItem: {
        backgroundColor: 'white',
        marginVertical: 5,
        borderRadius: 4,
    },

    boxvente: {
        width: '50%',
        marginVertical: 5,
        marginTop: 15,

    },

    boxpay: {
        width: '46%',
        marginVertical: 5,
        marginTop: 15,
    },

    seeplus: {
        fontSize: 11,
        color: "#777",
    },

    cardPay: {
        margin: 5,
        borderRadius: 3,
        padding: 8,
        backgroundColor: 'white'
    }
});
