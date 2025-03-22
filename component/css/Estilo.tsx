import { StyleSheet, Dimensions } from "react-native";

// Constantes das dimensões da tela
const { width, height } = Dimensions.get("window");

// Definição do objeto de estilo
const estilo = StyleSheet.create({
    bg: {
        flex: 1, 
        justifyContent: "center",
        width: width,
        height: height
    },
    header: {
        textAlign: "center",
        justifyContent: "center",
    },
    titulo: {
        color: "#b30000",
        backgroundColor: "#ffe6e6",
        width: width, 
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        fontSize: 28,
        fontWeight: "bold",
    },
    viacep: {
        marginTop: 0.01 * height 
    }
});

export default estilo;