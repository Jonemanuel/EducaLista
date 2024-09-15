import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, FlatList, TouchableOpacity, Alert, StyleSheet, Clipboard } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ListaTelefonicaScreen = () => {
  const [contatos, setContatos] = useState([]);
  const [nome, setNome] = useState('');
  const [numero, setNumero] = useState('');

  useEffect(() => {
    carregarContatos();
  }, []);

  const salvarContatos = async (contatosAtualizados) => {
    try {
      await AsyncStorage.setItem('contatos', JSON.stringify(contatosAtualizados));
      setContatos(contatosAtualizados);
    } catch (error) {
      console.error('Erro ao salvar contatos', error);
    }
  };

  const carregarContatos = async () => {
    try {
      const contatosSalvos = await AsyncStorage.getItem('contatos');
      if (contatosSalvos) {
        setContatos(JSON.parse(contatosSalvos));
      }
    } catch (error) {
      console.error('Erro ao carregar contatos', error);
    }
  };

  const adicionarContato = () => {
    if (nome.trim() === '' || numero.trim() === '') {
      Alert.alert('Erro', 'Por favor, insira o nome e o número.');
      return;
    }

    const novoContato = { id: Date.now().toString(), nome, numero };
    const contatosAtualizados = [...contatos, novoContato];

    salvarContatos(contatosAtualizados);
    setNome('');
    setNumero('');
  };

  const excluirContato = (id) => {
    Alert.alert(
      'Confirmar Exclusão',
      'Você tem certeza que deseja excluir este contato?',
      [
        {
          text: 'Cancelar',
          style: 'cancel',
        },
        {
          text: 'Excluir',
          onPress: () => {
            const contatosAtualizados = contatos.filter((contato) => contato.id !== id);
            salvarContatos(contatosAtualizados);
          },
        },
      ],
      { cancelable: true }
    );
  };

  const copiarNumero = (numero) => {
    Clipboard.setString(numero);
    Alert.alert('Número Copiado', 'O número foi copiado para a área de transferência.');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Lista Telefônica dos Pais</Text>

      <TextInput
        placeholder="Nome do Aluno"
        value={nome}
        onChangeText={setNome}
        style={styles.input}
      />

      <TextInput
        placeholder="Número de Telefone"
        value={numero}
        onChangeText={setNumero}
        keyboardType="phone-pad"
        style={styles.input}
      />

      <Button title="Adicionar Contato" onPress={adicionarContato} />

      <FlatList
        data={contatos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <View>
              <Text style={styles.nome}>{item.nome}</Text>
              <Text style={styles.numero}>{item.numero}</Text>
            </View>
            <View style={styles.buttonsContainer}>
              <TouchableOpacity onPress={() => copiarNumero(item.numero)} style={styles.copiarButton}>
                <Text style={styles.copiarText}>Copiar</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => excluirContato(item.id)} style={styles.excluirButton}>
                <Text style={styles.excluirText}>Excluir</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  titulo: {
    fontSize: 24,
    marginBottom: 20,
    fontWeight: 'bold',
  },
  input: {
    borderBottomWidth: 1,
    marginVertical: 10,
    padding: 10,
    fontSize: 16,
  },
  card: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    marginVertical: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  nome: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  numero: {
    fontSize: 16,
    color: '#666',
  },
  buttonsContainer: {
    flexDirection: 'row',
  },
  copiarButton: {
    backgroundColor: '#4CAF50',
    padding: 10,
    borderRadius: 5,
    marginRight: 10,
  },
  excluirButton: {
    backgroundColor: '#FF4D4D',
    padding: 10,
    borderRadius: 5,
  },
  copiarText: {
    color: '#FFF',
    fontWeight: 'bold',
  },
  excluirText: {
    color: '#FFF',
    fontWeight: 'bold',
  },
});

export default ListaTelefonicaScreen;
