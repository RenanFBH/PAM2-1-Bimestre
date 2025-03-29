//importando elementos 
import * as React from 'react';
import { useState, useEffect } from 'react';
import { View, Pressable, ScrollView } from 'react-native';
import { Text, TextInput, List, Button, Dialog, Portal, PaperProvider, Card, MD3DarkTheme } from 'react-native-paper';
import estilo from './css/Estilo';

//função default
const ViaCep =()=> {
    
    //variáveis e constantes
    let [cep, setCep] = useState("");
    let [dados, setDados] = useState<{ logradouro?: string; bairro?: string; localidade?: string; uf?: string }>({});
    let [expandir, setExpandir] = useState(false);
    let [nome, setNome] = useState(""); 
    let [email, setEmail] = useState(""); 
    let [numero, setNumero] = useState(""); 
    let [complemento, setComplemento] = useState("");  
    const [valorSelecionado, setValorSelecionado] = useState("Selecione o Estado");  
    const [valorAnterior, setValorAnterior] = useState(""); 
    const [visivelSucesso, setVisivelSucesso] = useState(false);
    const [visivelErro, setVisivelErro] = useState(false);
    const [visivelErroCEP, setVisivelErroCEP] = useState(false);
    const [visivelErroEmail, setVisivelErroEmail] = useState(false);
    const pressionado = () => setExpandir(!expandir);
    const mostrarDialogoSucesso = () => setVisivelSucesso(true);
    const esconderDialogoSucesso = () => setVisivelSucesso(false);
    const mostrarDialogoErro = () => setVisivelErro(true);
    const esconderDialogoErro = () => setVisivelErro(false);
    const mostrarDialogoErroCEP = () => setVisivelErroCEP(true);
    const esconderDialogoErroCEP = () => setVisivelErroCEP(false);
    const mostrarDialogoErroEmail = () => setVisivelErroEmail(true);
    const esconderDialogoErroEmail = () => setVisivelErroEmail(false);
    const [estados, setEstados] = useState(["AC", "AL", "AM", "AP", "BA", "CE", "DF", "ES", "GO", "MA", "MG", "MS", "MT", "PA", "PB", "PE", "PI", "PR", "RJ", "RN", "RO", "RR", "RS", "SC", "SE", "SP", "TO"]);
   
    //funções

    //pesquisa
    const BuscaCep = (cep: string) => {
        if (!cep.trim()) return; 
    
        let url = `https://viacep.com.br/ws/${cep}/json`;
    
        fetch(url)
            .then((resp) => resp.json())
            .then((dados) => {
                if (dados.erro) {
                    mostrarDialogoErroCEP();
                    errocep();
                } else {
                    setDados(dados);
                    setValorSelecionado(dados.uf || "");
                    ItemPressionado(dados.uf)
                }
            })
            .catch(() => {
                mostrarDialogoErroCEP();
                errocep();
            });
    };

    //acordion
    const ItemPressionado = (value: string) => {
        if (valorSelecionado !== "Selecione o Estado" && valorSelecionado !== "") {
            setEstados(prevEstados => {
                if (valorAnterior && !prevEstados.includes(valorAnterior)) {
                    return [...prevEstados, valorAnterior].sort();
                }
                return prevEstados.sort();
            });
        }
        setValorSelecionado(value);
        setExpandir(false);
        setEstados(prevEstados => prevEstados.filter(estado => estado !== value).sort());
    };

    useEffect(() => {
        if (valorSelecionado !== "Selecione o Estado" && valorSelecionado !== valorAnterior) {
            setValorAnterior(valorSelecionado);
        }
    }, [valorSelecionado]);

    //cadastro 
    const cadastrar = () => {
        if (!email || !nome || !email || !cep || !dados.logradouro || !numero || !dados.bairro || !dados.localidade) {
            mostrarDialogoErro();
        } else {
            if (!email.includes('@')){
                mostrarDialogoErroEmail();
            } else {
                setCep("");
                setDados({});
                setExpandir(false);
                setValorSelecionado("");
                setNome("");  
                setEmail(""); 
                setNumero("");
                setComplemento("") 
                ItemPressionado("Selecione o Estado")
                mostrarDialogoSucesso();
            } 
        }    
    };

    //atualiza
    const atualizar = () => {
        setCep("");
        setDados({});
        setExpandir(false);
        setValorSelecionado("");
        setNome("");  
        setEmail(""); 
        setNumero("");
        setComplemento("") 
        ItemPressionado("Selecione o Estado")
    }

    //atualiza quando o CEP for errado
    const errocep = () => {
        setCep("");
        setDados({});
        setExpandir(false);
        setValorSelecionado("");
        setNumero("");
        setComplemento("") 
        ItemPressionado("Selecione o Estado")
    }

    //tema para o paperprovider
    const theme = {
        ...MD3DarkTheme,
        colors: {
            ...MD3DarkTheme.colors,
            primary: '#FFFFFF',
            onSurface: '#FFFFFF',
            text: '#FFFFFF',
            surface: '#25232a',
        },
    };
    
    //layout
    return (
        <PaperProvider theme={theme}>
            <Card style={estilo.card}>
                <Card.Title style={estilo.titulo} title="Cadastro"/>
                <Card.Content>
                    <TextInput 
                        label="Nome" 
                        mode="flat" 
                        value={nome} 
                        onChangeText={setNome} 
                        style={estilo.input}
                        underlineStyle={estilo.underline}
                    />
                    <TextInput 
                        label="Email" 
                        mode="flat" 
                        value={email} 
                        onChangeText={setEmail}
                        style={estilo.input}
                        underlineStyle={estilo.underline}
                    />
                    <TextInput
                        label="CEP"
                        value={cep}  
                        onChangeText={(value) => setCep(value)} 
                        mode="flat"
                        onBlur={() => BuscaCep(cep)}  
                        keyboardType="numeric"
                        style={estilo.input}
                        underlineStyle={estilo.underline}
                    />
                    <TextInput
                        label="Rua"
                        value={dados.logradouro || ""}
                        onChangeText={(value) => setDados({ ...dados, logradouro: value })}
                        mode="flat"
                        style={estilo.input}
                        underlineStyle={estilo.underline}
                    />
                    <TextInput 
                        label="Número" 
                        mode="flat" 
                        keyboardType="numeric" 
                        value={numero} 
                        onChangeText={setNumero} 
                        style={estilo.input}
                        underlineStyle={estilo.underline}
                    />
                    <TextInput 
                        label="Complemento" 
                        mode="flat" 
                        value={complemento} 
                        onChangeText={setComplemento} 
                        style={estilo.input}
                        underlineStyle={estilo.underline}
                    />
                    <TextInput
                        label="Bairro"
                        value={dados.bairro || ""}
                        onChangeText={(value) => setDados({ ...dados, bairro: value })}
                        mode="flat"
                        style={estilo.input}
                        underlineStyle={estilo.underline}
                    />
                    <TextInput
                        label="Cidade"
                        value={dados.localidade || ""}
                        onChangeText={(value) => setDados({ ...dados, localidade: value })}
                        mode="flat"
                        style={estilo.input}
                        underlineStyle={estilo.underline}
                    />
                    <List.Section title="Estado">
                        <List.Accordion
                            title={valorSelecionado || "Selecione o Estado"}
                            expanded={expandir}
                            onPress={pressionado}
                        >
                            <ScrollView 
                                nestedScrollEnabled={true}
                                style={{ maxHeight: 60 }}
                            > 
                                {estados.map((estado) => (
                                    <List.Item
                                    key={estado}
                                    title={estado}
                                    onPress={() => ItemPressionado(estado)}
                                    style={estilo.itemList}
                                    />
                                ))}
                            </ScrollView>
                        </List.Accordion>
                    </List.Section>
                    <View style={estilo.btngroup}>
                        <Pressable  
                            style={({ pressed }) => [
                                estilo.btn,
                                pressed ? estilo.btnPressed : estilo.btnNormal  
                            ]}
                            onPress={cadastrar}
                        >
                            <Text style={estilo.txtbtn}>Enviar</Text>
                        </Pressable>
                        <Pressable 
                            style={({ pressed }) => [
                                estilo.btn,
                                pressed ? estilo.btnPressed : estilo.btnNormal  
                            ]}
                            onPress={atualizar}
                        >
                            <Text style={estilo.txtbtn}>Cancelar</Text>
                        </Pressable>
                    </View>
                </Card.Content>
            </Card>
            <Portal>
                <Dialog visible={visivelSucesso} onDismiss={esconderDialogoSucesso}>
                    <Dialog.Title>Cadastrado com Sucesso!</Dialog.Title>
                    <Dialog.Actions>
                        <Button onPress={esconderDialogoSucesso}>Ok</Button>
                    </Dialog.Actions>
                </Dialog>
            </Portal>
            <Portal>
                <Dialog visible={visivelErro} onDismiss={esconderDialogoErro}>
                    <Dialog.Title>Preencha os campos necessários!</Dialog.Title>
                    <Dialog.Actions>
                        <Button onPress={esconderDialogoErro}>Ok</Button>
                    </Dialog.Actions>
                </Dialog>
            </Portal>   
            <Portal>
                <Dialog visible={visivelErroCEP} onDismiss={esconderDialogoErroCEP}>
                    <Dialog.Title>CEP Inválido!</Dialog.Title>
                    <Dialog.Actions>
                        <Button onPress={esconderDialogoErroCEP}>Ok</Button>
                    </Dialog.Actions>
                </Dialog>
            </Portal>   
            <Portal>
                <Dialog visible={visivelErroEmail} onDismiss={esconderDialogoErroEmail}>
                    <Dialog.Title>Email Inválido!</Dialog.Title>
                    <Dialog.Content>
                        <Text variant="bodyMedium">O email não possui @. </Text>
                    </Dialog.Content>
                    <Dialog.Actions>
                        <Button onPress={esconderDialogoErroEmail}>Ok</Button>
                    </Dialog.Actions>
                </Dialog>
            </Portal>  
        </PaperProvider>
    );
};

export default ViaCep;
