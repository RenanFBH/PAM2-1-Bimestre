//importando elementos 
import { StyleSheet, Dimensions } from "react-native";

//constante 
const { width, height } = Dimensions.get("window");

//css
const estilo = StyleSheet.create({
    bg: {
        flex: 1,
        width: "100%",
        height: "100%"
    },
    scroll: {
        maxHeight: height * 1.5,
        flexGrow: 1
    },
    card: {
        backgroundColor: "#25232a",
        marginTop: height * 0.01
    },
    header: {
        height: height * 0.09,
        backgroundColor: "#25232a",
        flexDirection: "row", 
        alignItems: "center",  
        paddingHorizontal: width * 0.05, 
        justifyContent: "space-between" 
    },
    titulo: {
        color: "#fff",
        fontSize: 20,
        fontWeight: "bold",
        marginTop: height * 0.03,
        textAlign: "center"
    },
    icone: {
        fontSize: 20,
        fontWeight: "bold",
        marginTop: height * 0.03
    },
    login: {
        color: "#000",
        fontWeight: "bold",
        fontSize: 20,
        textAlign: "center"
    },
    viacep: {
        marginTop: height * 0.02, 
        marginStart: width * 0.05,
        marginEnd: width * 0.05
    },
    input: {
        color: "#000", 
        backgroundColor: "transparent"
    },
    underline: {
        borderBottomColor: "#000"
    },
    itemList: {
        backgroundColor: "#000",
        paddingVertical: height * 0.015
    },
    btngroup: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between" 
    },
    btn: {
        width: width * 0.41,
        padding: height * 0.02,
        borderRadius: 10
    },
    btnNormal: {
        backgroundColor: "#4d4d4d"
    },
    btnPressed: {
        backgroundColor: "#000"
    },
    txtbtn: {
        color: "#ffffff",
        textAlign: "center",
        justifyContent: "center",
        fontSize: 15,
        fontWeight: "bold"
    },
    txt: {
        color: "#fff"
    },
    footer: {
        bottom: 0,        
        width: "100%",        
        marginTop: height * 0.09, 
        height: height * 0.05,
        backgroundColor: "#25232a",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: width * 0.05
    },
    footerTextLeft: {
        color: "#fff",
        fontSize: 16
    },
    footerTextRight: {
        color: "#fff",
        fontSize: 16,
        textAlign: "right"
    }
});

export default estilo;
