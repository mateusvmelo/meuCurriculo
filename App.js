import * as React from 'react';
import { Pressable, View, Text, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {
  createStackNavigator,
  HeaderBackButton,
} from '@react-navigation/stack';

function Home({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
     <Image 
        style={{widith: 200, height: 400}}
        source={require(`./assets/imagem_curriculo.jpeg`)}
        />
      <Text>MATEUS VIEIRA DE MELO</Text>
      <Pressable
        onPress={() => navigation.navigate('Experiencia')}
        style={{
          backgroundColor: 'grey',
          padding: 10,
          marginBottom: 10,
          marginTop: 10,
        }}>
        <Text>Experiencia</Text>
      </Pressable>
      <Pressable
        onPress={() => navigation.navigate('Habilidades')}
        style={{ backgroundColor: 'grey', padding: 10 }}>
        <Text>Habilidades</Text>
      </Pressable>
    </View>
  );
}

function Experiencia() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Tribunal de Justica de Pernambuco: Estagiario no setor financeiro</Text>
      <Text>RPL Engenharia e Sevicos: Assistente Administrativo</Text>
    </View>
  );
}

function Habilidades() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>JavaScript</Text>
      <Text>HTML e CSS</Text>
      <Text>Python</Text>
      <Text>REACT Native</Text>
      <Text>SQL</Text>
      <Text>Bootstrap</Text>
    </View>
  );
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={({ navigation, route }) => ({
          headerLeft: (props) => {
            return (
              <>
                <Text>Menu</Text>
                {props.canGoBack && <HeaderBackButton {...props} />}
              </>
            );
          },
        })}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Experiencia" component={Experiencia} />
        <Stack.Screen name="Habilidades" component={Habilidades} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
