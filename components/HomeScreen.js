import React, { useState, useEffect } from 'react';
import { SafeAreaView, FlatList, View, Text, TextInput, Button, Alert, TouchableOpacity, Modal, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AlunoForm from './AlunoForm';
import DatePicker from './DatePicker';
import { useAlunos } from '../hooks/useAlunos';  
import { styles } from '../styles/styles';  

const HomeScreen = () => {
  const { alunos, setAlunos, salvarAlunos, carregarAlunos } = useAlunos();
  const [novoAluno, setNovoAluno] = useState('');
  const [idadeAluno, setIdadeAluno] = useState('');
  const [nomeProfessora, setNomeProfessora] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [alunoEditando, setAlunoEditando] = useState(null);
  const [nomeEditado, setNomeEditado] = useState('');
  const [idadeEditada, setIdadeEditada] = useState('');
  const [dataPresenca, setDataPresenca] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [dataSelecionada, setDataSelecionada] = useState(null);

  const navigation = useNavigation(); // Adiciona navegação

  useEffect(() => {
    carregarAlunos();
  }, []);

  const adicionarAluno = () => {
    if (novoAluno.trim() === '' || idadeAluno.trim() === '') {
      Alert.alert('Erro', 'Por favor, insira o nome e a idade do aluno.');
      return;
    }

    const novoId = (alunos.length + 1).toString();
    const alunosAtualizados = [
      ...alunos,
      { id: novoId, nome: novoAluno, idade: idadeAluno, presente: false, data: dataPresenca.toISOString().split('T')[0] },
    ];

    setAlunos(alunosAtualizados);
    setNovoAluno('');
    setIdadeAluno('');
    setDataPresenca(new Date());
    salvarAlunos(alunosAtualizados);
  };

  const marcarPresenca = (id) => {
    const alunosAtualizados = alunos.map((aluno) =>
      aluno.id === id ? { ...aluno, presente: !aluno.presente } : aluno
    );
    
    setAlunos(alunosAtualizados);
    salvarAlunos(alunosAtualizados);
  };

  const editarAluno = (aluno) => {
    setAlunoEditando(aluno);
    setNomeEditado(aluno.nome);
    setIdadeEditada(aluno.idade);
    setModalVisible(true);
  };

  const salvarEdicao = () => {
    const alunosAtualizados = alunos.map((aluno) =>
      aluno.id === alunoEditando.id ? { ...aluno, nome: nomeEditado, idade: idadeEditada } : aluno
    );

    setAlunos(alunosAtualizados);
    salvarAlunos(alunosAtualizados);
    setModalVisible(false);
  };

  const excluirAluno = (id) => {
    Alert.alert(
      'Confirmar Exclusão',
      'Você tem certeza que deseja excluir este aluno?',
      [
        {
          text: 'Cancelar',
          style: 'cancel',
        },
        {
          text: 'Excluir',
          onPress: () => {
            const alunosAtualizados = alunos.filter((aluno) => aluno.id !== id);
            setAlunos(alunosAtualizados);
            salvarAlunos(alunosAtualizados);
          },
        },
      ],
      { cancelable: true }
    );
  };

  const filtrarAlunos = () => {
    if (!searchQuery.trim()) return filtrarPorData(dataSelecionada);
    return filtrarPorData(dataSelecionada).filter(aluno =>
      aluno.nome.toLowerCase().includes(searchQuery.toLowerCase())
    );
  };

  const filtrarPorData = (data) => {
    if (!data) return alunos;
    return alunos.filter(aluno => aluno.data === data.toISOString().split('T')[0]);
  };

  const selecionarData = (data) => {
    setDataSelecionada(data);
  };

  const renderAluno = ({ item }) => (
    <View style={styles.alunoCard}>
      <Text style={styles.nomeAluno}>{item.nome} ({item.idade} anos)</Text>
      <View style={styles.botoesContainer}>
        <Button
          title={item.presente ? 'Presente' : 'Ausente'}
          onPress={() => marcarPresenca(item.id)}
          color={item.presente ? 'green' : 'red'}
        />
        <TouchableOpacity onPress={() => editarAluno(item)} style={styles.botaoEditar}>
          <Text style={styles.textoBotao}>Editar</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => excluirAluno(item.id)} style={styles.botaoExcluir}>
          <Text style={styles.textoBotao}>Excluir</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Text style={styles.titulo}>Lista de Presença</Text>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Nome da Professora"
            value={nomeProfessora}
            onChangeText={setNomeProfessora}
          />
        </View>

        <AlunoForm
          novoAluno={novoAluno}
          idadeAluno={idadeAluno}
          dataPresenca={dataPresenca}
          showDatePicker={showDatePicker}
          setShowDatePicker={setShowDatePicker}
          setDataPresenca={setDataPresenca}
          adicionarAluno={adicionarAluno}
          setNovoAluno={setNovoAluno}
          setIdadeAluno={setIdadeAluno}
        />

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Buscar Aluno"
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
        </View>

        <View style={styles.dataPickerContainer}>
          <Text style={styles.dataLabel}>Selecionar Data:</Text>
          <TouchableOpacity onPress={() => setShowDatePicker(true)} style={styles.dataPickerButton}>
            <Text style={styles.dataPickerText}>{dataSelecionada ? dataSelecionada.toDateString() : 'Escolha uma data'}</Text>
          </TouchableOpacity>
          {showDatePicker && (
            <DatePicker
              value={dataSelecionada || new Date()}
              onChange={(event, date) => {
                setShowDatePicker(false);
                if (date) selecionarData(date);
              }}
            />
          )}
        </View>

        <FlatList
          data={filtrarAlunos()}
          renderItem={renderAluno}
          keyExtractor={(item) => item.id}
          ListEmptyComponent={<Text style={styles.listaVazia}>Nenhum aluno encontrado para a data selecionada.</Text>}
        />

        <Modal visible={modalVisible} animationType="slide" transparent={true}>
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Text style={styles.modalTitulo}>Editar Aluno</Text>
              <TextInput
                style={styles.input}
                value={nomeEditado}
                onChangeText={setNomeEditado}
              />
              <TextInput
                style={styles.input}
                value={idadeEditada}
                onChangeText={setIdadeEditada}
                keyboardType="numeric"
              />
              <Button title="Salvar" onPress={salvarEdicao} />
              <Button title="Cancelar" onPress={() => setModalVisible(false)} />
            </View>
          </View>
        </Modal>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
