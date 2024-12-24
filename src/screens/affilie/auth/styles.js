import { StyleSheet} from "react-native";


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
        paddingHorizontal: 50,
    },
    logo: {
        width: 200,
        marginBottom: 20,
    },
    form: {
        width: "100%",
    },
    input: {
        width: "100%",
        height: 45,
        backgroundColor: "white",
        borderRadius: 6,
        paddingHorizontal: 15,
        fontSize: 16,
        color: "black",
        marginBottom: 15,
        shadowColor: "gray",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.4,
        shadowRadius: 5,
        elevation: 6,
    },
    button: {
        width: "100%",
        height: 45,
        backgroundColor: "#9ca6d9",
        borderRadius: 5,
        justifyContent: "center",
        alignItems: "center",
        marginVertical: 10,
        borderRadius: 6,
    },
    buttonText: {
        color: "white",
        fontSize: 16,
        fontWeight: "500",
    },
    label: {
        fontSize: 14,
        marginBottom: 5,
        marginTop: 5,
        marginLeft:6
    },
    linkText: {
        fontSize: 14,
        textDecorationLine: "none",
    },
    mdpforget: {
        flexDirection: "row",
        marginTop: 10,
    },
    forget: {
        textDecorationLine: "underline",
        marginLeft: 2,
        color: "#9ca6d9",
    },
    error: {
        color: "red",
        fontSize: 14,
        marginBottom: 10,
    },

    boxvente:{
        backgroundColor:'red'
    }

   
});

export default styles;