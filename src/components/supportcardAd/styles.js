import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    card: {
        width: "100%",
        marginTop: 5,
        marginBottom: 5,
        borderRadius: 5,
        backgroundColor: "white",
        shadowColor: "gray",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.4,
        shadowRadius: 5,
        elevation: 6,
    },
    cardHeader: {
        flexDirection: "row",
        alignItems: "center",
        width: '100%',
        justifyContent: 'space-between'
    },
    image: {
        width: 45,
        height: 40,
        borderRadius: 1,
        resizeMode: 'contain'
    },

    textContainer: {
        justifyContent: "center",
        alignItems: "center",
        width: '60%',
        //backgroundColor:'red'
    },

    programName: {
        fontSize: 12,
        fontWeight: "600",
    },
    cpa: {
        fontSize: 11,
        color:'#6c757d',
        fontWeight: "400",
    },
    levier: {
        fontSize: 12,
        marginBottom: 5,
        marginTop: 5,
    },

    ext:{
        textAlign:'center',
        fontSize: 12,
    },
    cpatext: {
        backgroundColor: "#FFE4C7",
        padding: 3,
        borderRadius: 4,
        marginBottom: 5,
    },
    cpat: {
        fontSize: 10,
        color: "red",
    },
    more: {
        height: 20,
        width:30,
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
        borderWidth: 0.5,
        marginTop: 12,
        borderRadius: 3
    },
    modalOverlay: {
        flex: 1,
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        justifyContent: "center",
        alignItems: "center",
    },
    modalContent: {
        width: "86%",
        backgroundColor: "white",
        borderRadius: 3,
        padding: 10,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    modalImage: {
        width: 50,
        height: 30,
        borderRadius: 1,
        resizeMode: 'contain'
    },
    modalText: {
        fontSize: 14,
        marginBottom: 10,
    },
    label: {
        fontWeight: "bold",
    },

    rowmodal: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:'space-between',
        width:'100%'
    },

    row:{
        flexDirection: 'row',
        alignItems: 'center',
    },

    rowcontenair:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:'space-between'
    },

    textcontent: {
        width: '60%',
        height: '100%'
    },
    imagcontent: {
        width: 30,
        height: 50
    },

    remu: {
        color: 'black',
        marginBottom: 10
    },

    describe: {
        color: 'black',
        textAlign: 'left',
        marginBottom: 10
    },

    cardDescribe: {
        padding: 10,
        backgroundColor: 'white',
        borderRadius: 3,
        marginVertical:8,
        shadowColor: "gray",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.4,
        shadowRadius: 5,
        elevation: 6,
    },
    contentDescribe: {
        fontSize: 14,
        textAlign: 'justify'
    },

    border: {
        borderWidth: .2,
        marginBottom: 5,
        marginTop: 5
    },

    btn:{
        borderRadius:4,
        marginVertical:10,
        borderWidth: 0.5,
        width:150,
        alignItems:'center',
        height:30,
        justifyContent:'center'
    }

});

export default styles