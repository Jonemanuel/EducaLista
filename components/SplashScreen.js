import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, StatusBar, ScrollView, Modal, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { MaterialIcons, FontAwesome } from '@expo/vector-icons'; // Pacote para ícones

const SplashScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const navigation = useNavigation();

  const handleStart = () => {
    navigation.navigate('HomeScreen');
  };

  const handleNotas = () => {
    navigation.navigate('NotasAlunoScreen');
  };

  const handleListaTelefonica = () => {
    navigation.navigate('ListaTelefonicaScreen');
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <StatusBar barStyle="light-content" />
      <Image
        source={require('../assets/fotoCapa.jpg')}
        style={styles.image}
      />
      <Text style={styles.title}>Bem-vindo, ao EDI Professor André Luiz!</Text>
      <Text style={styles.subtitle}>Preparado para iniciar a chamada de hoje?</Text>

      <View style={styles.menuContainer}>
        <TouchableOpacity style={styles.card} onPress={handleStart}>
          <MaterialIcons name="play-arrow" size={50} color="#0033A0" />
          <Text style={styles.cardText}>Iniciar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card} onPress={handleNotas}>
          <FontAwesome name="book" size={50} color="#0033A0" />
          <Text style={styles.cardText}>Notas dos Alunos</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card} onPress={handleListaTelefonica}>
          <FontAwesome name="phone" size={50} color="#0033A0" />
          <Text style={styles.cardText}>Lista Telefônica dos Pais</Text>
        </TouchableOpacity>
      </View>

      {/* Rodapé com informações do desenvolvedor */}
      <View style={styles.footer}>
        <TouchableOpacity onPress={() => setModalVisible(true)}>
          <Text style={styles.footerText}>Desenvolvido por Jonatas Emanuel</Text>
        </TouchableOpacity>
      </View>

      {/* Modal com informações sobre o desenvolvedor */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.modalBackground}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalTitle}>Sobre o Desenvolvedor</Text>
            <Text style={styles.modalText}>
            Este aplicativo foi desenvolvido por Jonatas Emanuel. Jonatas é um desenvolvedor com experiência em React Native, JavaScript, e ASP.NET. Ele trabalha com desenvolvimento de software e tem uma sólida formação técnica. Além disso, é pós-graduado em Engenharia de Software .
            </Text>
            <Text style={styles.modalText}>
              Email: jonatasemanuel276@gmail.com
            </Text>
            <Text style={styles.modalText}>
              Todos os direitos reservados.
            </Text>
            <Button title="Fechar" onPress={() => setModalVisible(!modalVisible)} />
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#E8F1F2',
  },
  image: {
    width: 300,
    height: 300,
    borderRadius: 20,
    marginBottom: 30,
    borderColor: '#0033A0',
    borderWidth: 3,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#0033A0',
    marginBottom: 10,
    textAlign: 'center',
    paddingHorizontal: 20,
  },
  subtitle: {
    fontSize: 18,
    color: '#333',
    marginBottom: 30,
    textAlign: 'center',
    paddingHorizontal: 20,
  },
  menuContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  card: {
    backgroundColor: '#FFF',
    borderRadius: 20,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    width: '80%',
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 5,
  },
  cardText: {
    marginTop: 10,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#0033A0',
  },
  footer: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#e0e0e0',
    borderRadius: 10,
    alignItems: 'center',
  },
  footerText: {
    fontSize: 14,
    color: '#0033A0',
    textDecorationLine: 'underline',
  },
  modalBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContainer: {
    width: '80%',
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  modalText: {
    fontSize: 16,
    marginBottom: 10,
    textAlign: 'center',
  },
});

export default SplashScreen;
