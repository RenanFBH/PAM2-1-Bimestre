import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { PaperProvider } from 'react-native-paper';
import ViaCep from './component/Viacep';
import estilo from './component/css/Estilo';

export default function App() {
  return (
    <View style={estilo.bg}>
      <View style={estilo.container}>
        <View style={estilo.header}>
          <Text style={estilo.titulo}>ViaCep Rest</Text>
        </View>
        <View style={estilo.viacep}>
          <ViaCep style={estilo.viacep}/>
          <StatusBar style="auto" />
        </View>
      </View>
    </View>  
  );
}

