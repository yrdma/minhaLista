
import { useEffect, useState } from 'react';
import { Text, View, StyleSheet, TextInput, Button, FlatList } from 'react-native';

export default function App() {
  const [dados, setDados] = useState([])
  const [loading, setLoading] = useState(true)

  const buscarDados = async () => {
    try {
      const resposta = await fetch('https://jsonplaceholder.typicode.com/posts');
      const dados = await resposta.json();
      setDados(dados);
    } catch (erro) {
      console.error('Erro ao Buscar dados:', erro)

    } finally {
      setLoading(false);
    }
  }
  useEffect(() => {
    buscarDados()
  }, []);

  if (loading) {
    return (
      <View style={styles.container}>
        <Text>Carregando...</Text>
      </View>
    );
  }






  return (
    <View style={styles.container}>
      <FlatList
        data={dados}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View>
            <Text>{item.title}</Text>
            <Text>{item.body}</Text>
          </View>
        )}
      />
    </View>
  );

}
const styles = StyleSheet.create({
  container: {

  },
});





