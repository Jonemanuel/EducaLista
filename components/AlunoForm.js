import React from 'react';
import { View, TextInput, Button, Text, TouchableOpacity } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker'; // Certifique-se de instalar esta biblioteca
import { styles } from '../styles/styles';

const AlunoForm = ({
  novoAluno,
  idadeAluno,
  dataPresenca,
  showDatePicker,
  setShowDatePicker,
  setDataPresenca,
  adicionarAluno,
  setNovoAluno,
  setIdadeAluno,
}) => {
  const onDateChange = (event, selectedDate) => {
    setShowDatePicker(false);
    if (selectedDate) {
      setDataPresenca(selectedDate);
    }
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        placeholder="Nome do Aluno"
        value={novoAluno}
        onChangeText={setNovoAluno}
      />
      <TextInput
        style={styles.input}
        placeholder="Idade"
        keyboardType="numeric"
        value={idadeAluno}
        onChangeText={setIdadeAluno}
      />
      <TouchableOpacity onPress={() => setShowDatePicker(true)} style={styles.dataPickerButton}>
        <Text style={styles.dataPickerText}>{dataPresenca.toDateString()}</Text>
      </TouchableOpacity>
      {showDatePicker && (
        <DateTimePicker
          value={dataPresenca}
          mode="date"
          display="default"
          onChange={onDateChange}
        />
      )}
      <Button title="Adicionar Aluno" onPress={adicionarAluno} />
    </View>
  );
};

export default AlunoForm;
