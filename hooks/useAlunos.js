// components/hooks/useAlunos.js
import { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const useAlunos = () => {
  const [alunos, setAlunos] = useState([]);

  useEffect(() => {
    carregarAlunos();
  }, []);

  const salvarAlunos = async (alunosAtualizados) => {
    try {
      const jsonValue = JSON.stringify(alunosAtualizados);
      await AsyncStorage.setItem('@alunos', jsonValue);
    } catch (e) {
      console.error('Erro ao salvar alunos:', e);
    }
  };

  const carregarAlunos = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('@alunos');
      if (jsonValue != null) {
        setAlunos(JSON.parse(jsonValue));
      }
    } catch (e) {
      console.error('Erro ao carregar alunos:', e);
    }
  };

  return {
    alunos,
    setAlunos,
    salvarAlunos,
    carregarAlunos,
  };
};
