import { StyleSheet} from "react-native";


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f5f7fe",
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
        borderRadius: 5,
        paddingHorizontal: 15,
        fontSize: 16,
        color: "black",
        marginBottom: 15,
        shadowColor: "black",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 3,
    },
    button: {
        width: "100%",
        height: 45,
        backgroundColor: "#9ca6d9",
        borderRadius: 5,
        justifyContent: "center",
        alignItems: "center",
        marginVertical: 10,
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