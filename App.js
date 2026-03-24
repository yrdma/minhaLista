
import { useEffect, useState } from 'react';
import { Text, View, StyleSheet, TextInput, Button, FlatList } from 'react-native';




export default function App() {
  const [dados, setDados] = useState([])

  const buscarDados = async () => {
    try {
      const resposta = await fetch('https://jsonplaceholder.typicode.com/posts');
      const dados = await resposta.jason();
      setDados(dados);
    } catch (erro) {
      console.error('Erro ao Buscar dados:', erro)

    } finally {
      setLoading(false);
    }

    useEffect(() => {

    }, []);

    if (loanding) {
      return (
        <View style={styles.container}>
          <Text>Carregando...</Text>
        </View>
      );
    }
    return (
      <View style={styles.container}>
        <FlatList

        />
      </View>
    );


  }


  return ();

}
const styles = StyleSheet.create({
  container: {

  },
});





