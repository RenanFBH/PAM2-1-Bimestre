import * as React from 'react';
import { useState } from 'react';
import { View, Pressable, ScrollView } from 'react-native';
import { Text, TextInput, List  } from 'react-native-paper';
import estilo from './css/Estilo';

const ViaCep=()=>{

    //variáveis
    let [cep, setCep] = useState("")
    let [dados, setDados] = useState<{ logradouro?: string; bairro?: string; localidade?: string }>({});
    let [expandir, setExpandir] = useState(false);
    const [valorSelecionado, setValorSelecionado] = useState("")
    const handlePress = () => setExpandir(!expandir);
    

    //funções
    const BuscaCep =(cep)=>{
        let url = `https://viacep.com.br/ws/${cep}/json`
        //protocolo http 
        fetch(url)
        .then(
            (resp)=>{ return resp.json() }
        )
        .then(            
            (dados)=>{
                console.log(dados) 
                setDados(dados)
                setValorSelecionado(dados.uf)
            }   
        )
        .catch(
            (x)=>{console.log("Erro: " + x)}
        )
        
    }
    
    const HandleItemPress =(value)=>{
        setValorSelecionado(value)
        setExpandir(false)
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
                value = {dados.logradouro}
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
                value = {dados.bairro}
                onChangeText={(value)=>{setCep(dados.bairro = value)}}
                mode="outlined"
            />
            <TextInput
                label="Cidade"
                value = {dados.localidade}
                onChangeText={(value)=>{setCep(dados.localidade = value)}}
                mode="outlined"
            />
            <List.Section title="Estado">
                <List.Accordion title={valorSelecionado == "" ? "Selecione o Estado" : valorSelecionado} expanded={expandir} onPress={handlePress}>
                    <List.Item title="AC" onPress={() => { HandleItemPress("AC") }} />
                    <List.Item title="AL" onPress={() => { HandleItemPress("AL") }} />
                    <List.Item title="AM" onPress={() => { HandleItemPress("AM") }} />
                    <List.Item title="AP" onPress={() => { HandleItemPress("AP") }} />
                    <List.Item title="BA" onPress={() => { HandleItemPress("BA") }} />
                    <List.Item title="CE" onPress={() => { HandleItemPress("CE") }} />
                    <List.Item title="DF" onPress={() => { HandleItemPress("DF") }} />
                    <List.Item title="ES" onPress={() => { HandleItemPress("ES") }} />
                    <List.Item title="GO" onPress={() => { HandleItemPress("GO") }} />
                    <List.Item title="MA" onPress={() => { HandleItemPress("MA") }} />
                    <List.Item title="MG" onPress={() => { HandleItemPress("MG") }} />
                    <List.Item title="MS" onPress={() => { HandleItemPress("MS") }} />
                    <List.Item title="MT" onPress={() => { HandleItemPress("MT") }} />
                    <List.Item title="PA" onPress={() => { HandleItemPress("PA") }} />
                    <List.Item title="PB" onPress={() => { HandleItemPress("PB") }} />
                    <List.Item title="PE" onPress={() => { HandleItemPress("PE") }} />
                    <List.Item title="PI" onPress={() => { HandleItemPress("PI") }} />
                    <List.Item title="PR" onPress={() => { HandleItemPress("PR") }} />
                    <List.Item title="RJ" onPress={() => { HandleItemPress("RJ") }} />
                    <List.Item title="RN" onPress={() => { HandleItemPress("RN") }} />
                    <List.Item title="RO" onPress={() => { HandleItemPress("RO") }} />
                    <List.Item title="RR" onPress={() => { HandleItemPress("RR") }} />
                    <List.Item title="RS" onPress={() => { HandleItemPress("RS") }} />
                    <List.Item title="SC" onPress={() => { HandleItemPress("SC") }} />
                    <List.Item title="SE" onPress={() => { HandleItemPress("SE") }} />
                    <List.Item title="SP" onPress={() => { HandleItemPress("SP") }} />
                    <List.Item title="TO" onPress={() => { HandleItemPress("TO") }} />
                </List.Accordion>
            </List.Section>
            <View style={estilo.btngroup}>
                <Pressable style={estilo.btn} onPress={() => {}}>
                    <Text style={estilo.txtbtn}>Enviar</Text>
                </Pressable>
                <Pressable style={estilo.btn} onPress={() => {}}>
                    <Text style={estilo.txtbtn}>Cancelar</Text>
                </Pressable>
            </View>
        </ScrollView> 
    )
}

export default ViaCep;