import { StyleSheet, Dimensions } from "react-native";

// Obtendo as dimensões da tela
const { width, height } = Dimensions.get("window");

// Definição do objeto de estilo
const estilo = StyleSheet.create({
    bg: {
        flex: 1, 
        width: width,
        height: height
    },
    header: {
        height: height * 0.09,
        backgroundColor: "#4d4d4d",
        flexDirection: "row", 
        alignItems: "center",  
        paddingHorizontal: width * 0.05, 
        justifyContent: "space-between" 
    },
    titulo: {
        color: "#fff",
        fontSize: 20,
        fontWeight: "bold",
        marginTop: height * 0.03
    },
    icone: {
        color: "#fff",
        fontSize: 20,
        fontWeight: "bold",
        marginTop: height * 0.03
    },
    login: {
        color: "#000",
        fontWeight: "bold",
        fontSize: 20,
        textAlign: "center",
    },
    viacep: {
        marginTop: height * 0.02, 
        marginStart: width * 0.05,
        marginEnd: width * 0.05
    },
    btngroup: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between" 
    },
    btn: {
        backgroundColor: "#4d4d4d",
        width: width * 0.448,
        padding: height * 0.02,
        borderRadius: 10
    },
    txtbtn: {
        color: "#ffffff",
        textAlign: "center",
        justifyContent: "center",
        fontSize: 15,
        fontWeight: "bold"
    },
    footer: {
        position: 'absolute',
        bottom: height - 880,
        left: 0,
        right: 0,
        height: height * 0.05,
     
        backgroundColor: "#4d4d4d",
        alignItems: 'center',
        justifyContent: "space-between" 
    }
});

export default estilo;
