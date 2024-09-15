import React from 'react';
import { View, Text, Button } from 'react-native';

const AlunoItem = ({ aluno, onDelete }) => {
  return (
    <View style={{ padding: 10, borderBottomWidth: 1 }}>
      <Text>Nome: {aluno.nome}</Text>
      <Text>Data de Nascimento: {aluno.dataNascimento.toDateString()}</Text>
      <Text>Professor: {aluno.professor}</Text>
      <Button title="Excluir" onPress={() => onDelete(aluno)} />
    </View>
  );
};

export default AlunoItem;
