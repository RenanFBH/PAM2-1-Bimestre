//importando elementos 
import { StatusBar } from 'expo-status-bar';
import { ImageBackground, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { PaperProvider, IconButton, MD3DarkTheme  } from 'react-native-paper';
import ViaCep from './component/Viacep';
import estilo from './component/css/Estilo';

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


//função default
const App =()=> {
  return (
    <ScrollView style={estilo.scroll}>
      <PaperProvider theme={theme}>
        <ImageBackground 
          source={require('./component/img/bg.jpg')} 
          style={estilo.bg}
        >
          <View>
              <View style={estilo.header}>
                <Text style={estilo.titulo}>ViaCep Rest</Text>
                <IconButton 
                  icon="home" 
                  size={35} 
                  iconColor="#fff"  
                  onPress={() => {}} 
                  style={estilo.icone}  
                />
              </View>
              <View style={estilo.viacep}>
                <ViaCep />
                <StatusBar style="auto" />
              </View>
          </View>
          <View style={estilo.footer}>
            <Pressable>
              <Text style={estilo.txt}>Redes sociais</Text>
            </Pressable>
            <Pressable>
              <Text style={estilo.txt}>Sobre nós</Text>
            </Pressable>
          </View>
        </ImageBackground>
      </PaperProvider>
    </ScrollView>
  );
}
export default App;