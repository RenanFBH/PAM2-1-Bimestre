//importando elementos 
import * as React from 'react';
import { useState } from 'react';
import { View, Pressable, ScrollView } from 'react-native';
import { Text, TextInput, List, Button, Dialog, Portal, PaperProvider, Card, Provider } from 'react-native-paper';
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
    const [valorSelecionado, setValorSelecionado] = useState("");
    const [visivelSucesso, setVisivelSucesso] = useState(false);
    const [visivelErro, setVisivelErro] = useState(false);
    const pressionado = () => setExpandir(!expandir);
    const mostrarDialogoSucesso = () => setVisivelSucesso(true);
    const esconderDialogoSucesso = () => setVisivelSucesso(false);
    const mostrarDialogoErro = () => setVisivelErro(true);
    const esconderDialogoErro = () => setVisivelErro(false);

    //funções
    const BuscaCep = (cep: string) => {
        if (!cep.trim()) return; 
    
        let url = `https://viacep.com.br/ws/${cep}/json`;
    
        fetch(url)
            .then((resp) => resp.json())
            .then((dados) => {
                if (dados.erro) {
                    mostrarDialogoErro();
                } else {
                    console.log(dados);
                    setDados(dados);
                    setValorSelecionado(dados.uf || "");
                }
            })
            .catch(() => {
                mostrarDialogoErro();
            });
    };

    const ItemPressionado = (value: string) => {
        setValorSelecionado(value);
        setExpandir(false);
    };

    const cadastrar = () => {
       
        
        setCep("");
        setDados({});
        setExpandir(false);
        setValorSelecionado("");
        setNome("");  
        setEmail(""); 
        setNumero("");
        setComplemento("") 
        mostrarDialogoSucesso();
    };

    const atualizar = () => {
        setCep("");
        setDados({});
        setExpandir(false);
        setValorSelecionado("");
        setNome("");  
        setEmail(""); 
        setNumero("");
        setComplemento("") 
    }


    
    //layout
    return (
        <ScrollView>
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
                            <ScrollView style={{ maxHeight: 58 }}> 
                            {["AC", "AL", "AM", "AP", "BA", "CE", "DF", "ES", "GO", "MA", "MG", "MS", "MT", "PA", "PB", "PE", "PI", "PR", "RJ", "RN", "RO", "RR", "RS", "SC", "SE", "SP", "TO"].map((estado) => (
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
            <PaperProvider>
                <Portal>
                    <Dialog visible={visivelErro} onDismiss={esconderDialogoErro}>
                        <Dialog.Title>Alert</Dialog.Title>
                        <Dialog.Content>
                        <Text variant="bodyMedium">This is simple dialog</Text>
                        </Dialog.Content>
                        <Dialog.Actions>
                        <Button onPress={esconderDialogoErro}>Done</Button>
                        </Dialog.Actions>
                    </Dialog>
                </Portal>
            </PaperProvider>
        </ScrollView>
    );
};

export default ViaCep;
