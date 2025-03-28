import * as React from 'react';
import { useState } from 'react';
import { View, Pressable, ScrollView } from 'react-native';
import { Text, TextInput, List, Button, Dialog, Portal, PaperProvider  } from 'react-native-paper';
import estilo from './css/Estilo';

const ViaCep=()=>{

    //variáveis
    let [cep, setCep] = useState("")
    let [dados, setDados] = useState<{ logradouro?: string; bairro?: string; localidade?: string }>({});
    let [expandir, setExpandir] = useState(false);
    const [valorSelecionado, setValorSelecionado] = useState("")
    const pressionado = () => setExpandir(!expandir);

    const [visivel, setVisivel] = React.useState(false);
    const mostrarDialogo = () => setVisivel(true);
    const esconderDialogo = () => setVisivel(false);

    //funções
    const BuscaCep =(cep)=>{
        let url = `https://viacep.com.br/ws/${cep}/json`
        //protocolo http 
        fetch(url)
        .then(
            (resp)=>{ 
                return resp.json()
                setVisivel(false)
             }
        )
        .then(            
            (dados)=>{
                console.log(dados) 
                setDados(dados)
                setValorSelecionado(dados.uf)
            }   
        )
        .catch(
            (x)=>{ 
                setVisivel(true)
             }
        )
        
    }
    
    const ItemPressionado =(value)=>{
        setValorSelecionado(value)
        setExpandir(false)
    }

    const cadastrar =()=>{
        setCep("")
        setDados({})
        setExpandir(false)
        setValorSelecionado("")
        mostrarDialogo()
    }

    //
    return(
        <ScrollView>
            <Text variant="displayLarge" style={estilo.login}>Login</Text>
            <TextInput
                label="Nome"
                mode="outlined"
            />
            <TextInput
                label="Email"
                mode="outlined"
            />
            <TextInput
                label="CEP"
                onChangeText={(value)=>{setCep(value)}}
                mode="outlined"
                onBlur={()=>{BuscaCep(cep)}}
                keyboardType="numeric"
            />
            <TextInput
                label="Rua"
                value = {dados.logradouro == null ? "" : dados.localidade}
                onChangeText={(value)=>{setCep(dados.logradouro = value)}}
                mode="outlined"
            />
            <TextInput
                label="Número"
                mode="outlined"
                keyboardType="numeric"
            />
            <TextInput
                label="Complemento"
                mode="outlined"
            />
            <TextInput
                label="Bairro"
                value = {dados.bairro == null ? "" : dados.bairro}
                onChangeText={(value)=>{setCep(dados.bairro = value)}}
                mode="outlined"
            />
            <TextInput
                label="Cidade"
                value = {dados.localidade == null ? "" : dados.localidade}
                onChangeText={(value)=>{setCep(dados.localidade = value)}}
                mode="outlined"
            />
            <List.Section title="Estado">
                <List.Accordion title={valorSelecionado == "" ? "Selecione o Estado" : valorSelecionado} expanded={expandir} onPress={pressionado}>
                    <List.Item title="AC" onPress={() => { ItemPressionado("AC") }} />
                    <List.Item title="AL" onPress={() => { ItemPressionado("AL") }} />
                    <List.Item title="AM" onPress={() => { ItemPressionado("AM") }} />
                    <List.Item title="AP" onPress={() => { ItemPressionado("AP") }} />
                    <List.Item title="BA" onPress={() => { ItemPressionado("BA") }} />
                    <List.Item title="CE" onPress={() => { ItemPressionado("CE") }} />
                    <List.Item title="DF" onPress={() => { ItemPressionado("DF") }} />
                    <List.Item title="ES" onPress={() => { ItemPressionado("ES") }} />
                    <List.Item title="GO" onPress={() => { ItemPressionado("GO") }} />
                    <List.Item title="MA" onPress={() => { ItemPressionado("MA") }} />
                    <List.Item title="MG" onPress={() => { ItemPressionado("MG") }} />
                    <List.Item title="MS" onPress={() => { ItemPressionado("MS") }} />
                    <List.Item title="MT" onPress={() => { ItemPressionado("MT") }} />
                    <List.Item title="PA" onPress={() => { ItemPressionado("PA") }} />
                    <List.Item title="PB" onPress={() => { ItemPressionado("PB") }} />
                    <List.Item title="PE" onPress={() => { ItemPressionado("PE") }} />
                    <List.Item title="PI" onPress={() => { ItemPressionado("PI") }} />
                    <List.Item title="PR" onPress={() => { ItemPressionado("PR") }} />
                    <List.Item title="RJ" onPress={() => { ItemPressionado("RJ") }} />
                    <List.Item title="RN" onPress={() => { ItemPressionado("RN") }} />
                    <List.Item title="RO" onPress={() => { ItemPressionado("RO") }} />
                    <List.Item title="RR" onPress={() => { ItemPressionado("RR") }} />
                    <List.Item title="RS" onPress={() => { ItemPressionado("RS") }} />
                    <List.Item title="SC" onPress={() => { ItemPressionado("SC") }} />
                    <List.Item title="SE" onPress={() => { ItemPressionado("SE") }} />
                    <List.Item title="SP" onPress={() => { ItemPressionado("SP") }} />
                    <List.Item title="TO" onPress={() => { ItemPressionado("TO") }} />
                </List.Accordion>
            </List.Section>
            <View style={estilo.btngroup}>
                <Pressable style={estilo.btn} onPress={cadastrar}>
                    <Text style={estilo.txtbtn}>Enviar</Text>
                </Pressable>
                <Pressable style={estilo.btn} onPress={() => {}}>
                    <Text style={estilo.txtbtn}>Cancelar</Text>
                </Pressable>
            </View>
            <PaperProvider>
               
                <Portal >
                    <Dialog visible={visivel}>
                        <Dialog.Title>Cadastrado com Sucesso!</Dialog.Title>
                        <Dialog.Actions>
                            <Button onPress={esconderDialogo}>Ok</Button>
                        </Dialog.Actions>
                    </Dialog>
                </Portal>
            </PaperProvider>
        </ScrollView> 
    )
}

export default ViaCep;