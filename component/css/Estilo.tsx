import { StyleSheet, Dimensions } from "react-native";

// Constantes das dimensões da tela
const { width, height } = Dimensions.get("window");

// Definição do objeto de estilo
const estilo = StyleSheet.create({
    bg: {
        flex: 1, 
        width: width,
        height: height
    },
    header: {
        height: 0.09 * height,
        backgroundColor: "#4d4d4d",
        flexDirection: "row", 
        alignItems: "center",  
        paddingHorizontal: 0.05 * width, 
        justifyContent: "space-between" 
    },
    titulo: {
        color: "#fff",
        fontSize: 20,
        fontWeight: "bold",
        marginTop: 0.03 * height
    },
    icone: {
        color: "#fff",
        fontSize: 20,
        fontWeight: "bold",
        marginTop: 0.03 * height
    },
    login: {
        color: "#000",
        fontWeight: "bold",
        fontSize: 20,
        textAlign: "center",
    },
    viacep: {
        marginTop: 0.02 * height, 
        marginStart: 0.05 * width,
        marginEnd: 0.05 * width
    },
    btngroup:{

    },
    btn: {
        
    },
    txtbtn: {

    },
    footer: {
        marginTop: 0.07 * height,
        height: 0.05 * height,
        backgroundColor: "#4d4d4d",
        paddingHorizontal: 0.05 * width, 
        justifyContent: "space-between" 
    }
});

export default estilo;