import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, FlatList, Alert, Modal } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styled from 'styled-components/native';

const Container = styled.View`
  flex: 1;
  padding: 20px;
  background-color: #E8F1F2;
`;

const Header = styled.Text`
  font-size: 28px;
  font-weight: bold;
  color: #0033A0;
  margin-bottom: 20px;
  text-align: center;
`;

const Input = styled.TextInput`
  height: 100px;
  border-color: #0033A0;
  border-width: 1px;
  border-radius: 8px;
  padding: 10px;
  margin-bottom: 20px;
  text-align: left;
`;

const ButtonContainer = styled.View`
  margin-top: 20px;
  align-items: center;
`;

const NoteItem = styled.View`
  padding: 10px;
  border-bottom-width: 1px;
  border-bottom-color: #ccc;
`;

const NoteText = styled.Text`
  font-size: 16px;
`;

const EditButton = styled.TouchableOpacity`
  background-color: #0033A0;
  padding: 5px 10px;
  border-radius: 5px;
  margin-right: 5px;
`;

const DeleteButton = styled.TouchableOpacity`
  background-color: #FF4D4D;
  padding: 5px 10px;
  border-radius: 5px;
`;

const ButtonText = styled.Text`
  color: #FFF;
  font-weight: bold;
`;

const ModalContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: rgba(0,0,0,0.5);
`;

const ModalContent = styled.View`
  width: 80%;
  padding: 20px;
  background-color: #FFF;
  border-radius: 10px;
  align-items: center;
`;

const ModalInput = styled.TextInput`
  height: 100px;
  border-color: #0033A0;
  border-width: 1px;
  border-radius: 8px;
  padding: 10px;
  width: 100%;
  margin-bottom: 20px;
`;

const NotasAlunoScreen = () => {
  const [observacao, setObservacao] = useState('');
  const [anotacoes, setAnotacoes] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(null);
  const [editObservacao, setEditObservacao] = useState('');

  useEffect(() => {
    const loadNotes = async () => {
      try {
        const storedNotes = await AsyncStorage.getItem('anotacoes');
        if (storedNotes) {
          setAnotacoes(JSON.parse(storedNotes));
        }
      } catch (error) {
        console.error('Erro ao carregar anotações', error);
      }
    };

    loadNotes();
  }, []);

  const saveNotes = async (notes) => {
    try {
      await AsyncStorage.setItem('anotacoes', JSON.stringify(notes));
    } catch (error) {
      console.error('Erro ao salvar anotações', error);
    }
  };

  const handleSave = () => {
    if (observacao.trim() === '') return;

    let updatedAnotacoes;
    if (currentIndex !== null) {
      updatedAnotacoes = anotacoes.map((item, index) =>
        index === currentIndex ? observacao : item
      );
      setCurrentIndex(null);
    } else {
      updatedAnotacoes = [...anotacoes, observacao];
    }

    setAnotacoes(updatedAnotacoes);
    saveNotes(updatedAnotacoes);
    setObservacao('');
  };

  const handleEdit = (index) => {
    setEditObservacao(anotacoes[index]);
    setCurrentIndex(index);
    setIsModalVisible(true);
  };

  const handleDelete = (index) => {
    Alert.alert(
      "Confirmar Exclusão",
      "Você tem certeza que deseja excluir esta anotação?",
      [
        { text: "Cancelar", style: "cancel" },
        { text: "Excluir", onPress: () => {
          const updatedAnotacoes = anotacoes.filter((_, i) => i !== index);
          setAnotacoes(updatedAnotacoes);
          saveNotes(updatedAnotacoes);
        }}
      ]
    );
  };

  const handleModalSave = () => {
    if (editObservacao.trim() === '') return;

    const updatedAnotacoes = anotacoes.map((item, index) =>
      index === currentIndex ? editObservacao : item
    );
    setAnotacoes(updatedAnotacoes);
    saveNotes(updatedAnotacoes);
    setIsModalVisible(false);
    setCurrentIndex(null);
    setEditObservacao('');
  };

  return (
    <Container>
      <Header>Anote suas observações sobre o aluno</Header>
      <Input
        multiline
        placeholder="Digite aqui sua observação..."
        value={observacao}
        onChangeText={setObservacao}
      />
      <ButtonContainer>
        <Button title="Salvar Anotação" onPress={handleSave} color="#0033A0" />
      </ButtonContainer>
      <FlatList
        data={anotacoes}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <NoteItem>
            <NoteText>{item}</NoteText>
            <ButtonContainer style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
              <EditButton onPress={() => handleEdit(index)}>
                <ButtonText>Editar</ButtonText>
              </EditButton>
              <DeleteButton onPress={() => handleDelete(index)}>
                <ButtonText>Excluir</ButtonText>
              </DeleteButton>
            </ButtonContainer>
          </NoteItem>
        )}
      />
      <Modal
        transparent={true}
        visible={isModalVisible}
        onRequestClose={() => setIsModalVisible(false)}
      >
        <ModalContainer>
          <ModalContent>
            <ModalInput
              multiline
              placeholder="Digite a anotação..."
              value={editObservacao}
              onChangeText={setEditObservacao}
            />
            <Button title="Salvar" onPress={handleModalSave} color="#0033A0" />
            <Button title="Cancelar" onPress={() => setIsModalVisible(false)} color="#FF4D4D" />
          </ModalContent>
        </ModalContainer>
      </Modal>
    </Container>
  );
};

export default NotasAlunoScreen;
