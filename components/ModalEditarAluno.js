import React from 'react';
import { View, Text, TextInput, Button, Modal, StyleSheet } from 'react-native';

const ModalEditarAluno = ({ modalVisible, setModalVisible, alunoEditando, setNomeEditado, setIdadeEditada, salvarEdicao, nomeEditado, idadeEditada }) => (
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
);

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContent: {
    width: '80%',
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
  },
  modalTitulo: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 8,
    marginBottom: 10,
    width: '100%',
    backgroundColor: '#FFFFFF',
  },
});

export default ModalEditarAluno;
