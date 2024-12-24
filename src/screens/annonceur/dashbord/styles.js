import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        padding: 15,
        height: "100%",
        backgroundColor: 'white'
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
        padding: 10,
        borderRadius: 0,
        shadowColor: "gray",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.4,
        shadowRadius: 5,
        elevation: 6,
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
        marginBottom: 10,
        width: '30%', // Two cards per row
        shadowColor: "gray",
        borderRadius:5,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.4,
        shadowRadius: 5,
        elevation: 6,
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
        marginLeft:5,
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
        padding: 8,
        backgroundColor: 'white',
        borderRadius:5,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.4,
        shadowRadius: 5,
        elevation: 6,
    }
});

export default styles;
