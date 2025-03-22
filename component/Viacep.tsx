import * as React from 'react';
import { useState } from 'react';
import { ScrollView } from 'react-native';
import { Text, TextInput  } from 'react-native-paper';
import { List } from 'react-native-paper'
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
            <Text variant="displayLarge" style={estilo.titulo}>Login</Text>
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
                    <List.Item title="SP" onPress={()=> {HandleItemPress("SP")}}/>
                    <List.Item title="PR" onPress={()=> {HandleItemPress("PR")}}/>
                    <List.Item title="AC" onPress={()=> {HandleItemPress("AC")}}/>
                    <List.Item title="RJ" onPress={()=> {HandleItemPress("RJ")}}/>
                </List.Accordion>
            </List.Section>
        </ScrollView>
    )
}

export default ViaCep;