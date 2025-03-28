import { StatusBar } from 'expo-status-bar';
import { ImageBackground, ScrollView, StyleSheet, Text, View } from 'react-native';
import { PaperProvider } from 'react-native-paper';
import ViaCep from './component/Viacep';
import estilo from './component/css/Estilo';

export default function App() {
  return (
    <ScrollView>
      <ImageBackground 
        source={require('./component/img/bg.jpg')} style={estilo.bg}>
        <View style={estilo.header}>
          <Text style={estilo.titulo}>ViaCep Rest</Text>
          <Text style={estilo.icone}>Icone</Text>
        </View>
        <View style={estilo.viacep}>
          <ViaCep style={estilo.viacep}/>
          <StatusBar style="auto" />
        </View>
        <View style={estilo.footer}>
          
        </View>
      </ImageBackground>
    </ScrollView>  
  );
}

