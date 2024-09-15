import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  alunoCard: {
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    padding: 15,
    marginVertical: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 3,
  },
  nomeAluno: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  botoesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  botaoEditar: {
    backgroundColor: '#4CAF50',
    borderRadius: 5,
    padding: 10,
  },
  botaoExcluir: {
    backgroundColor: '#f44336',
    borderRadius: 5,
    padding: 10,
  },
  textoBotao: {
    color: '#fff',
    fontWeight: 'bold',
  },
  listaVazia: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 16,
    color: '#888',
  },
  inputContainer: {
    marginBottom: 15,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    fontSize: 16,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    width: '80%',
  },
  modalTitulo: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  dataPickerContainer: {
    marginBottom: 15,
  },
  dataLabel: {
    fontSize: 16,
    marginBottom: 5,
  },
  dataPickerButton: {
    padding: 10,
    backgroundColor: '#eee',
    borderRadius: 5,
  },
  dataPickerText: {
    fontSize: 16,
  },
});
