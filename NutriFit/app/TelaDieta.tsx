import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from './App';

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

export default function TelaDieta() {
  const navigation = useNavigation<NavigationProp>();

  const meals = ['Café da manhã', 'Almoço', 'Lanche', 'Janta'];

  const handleShowDiet = (meal: string) => {
    alert(`Aqui está sua dieta personalizada para o ${meal.toLowerCase()}.`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Minha Dieta</Text>
      <View style={styles.separator} />

      <ScrollView contentContainerStyle={styles.scroll}>
        {meals.map((meal, index) => (
          <View key={index} style={styles.card}>
            <Text style={styles.mealText}>{meal}</Text>
            <TouchableOpacity style={styles.button} onPress={() => handleShowDiet(meal)}>
              <Text style={styles.buttonText}>Ver informação</Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>

      <TouchableOpacity style={styles.addButton}>
        <Feather name="plus" size={24} color="#4B0082" />
      </TouchableOpacity>

      {/* Barra inferior */}
      <View style={styles.footer}>
        <TouchableOpacity onPress={() => navigation.navigate('TelaDieta')}>
          <Feather name="edit-2" size={24} color="#4B0082" />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('TelaPrincipal')}>
          <Feather name="home" size={24} color="#7D7D7D" />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('TelaInfo')}>
          <Feather name="user" size={24} color="#7D7D7D" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#E0E0E0', paddingTop: 60, paddingHorizontal: 16 },
  title: { fontSize: 20, fontWeight: 'bold' },
  separator: { height: 2, backgroundColor: '#800080', width: '100%', marginVertical: 10 },
  scroll: { alignItems: 'center', paddingBottom: 100 },
  card: {
    width: '90%',
    backgroundColor: '#F5F5F5',
    borderRadius: 10,
    padding: 20,
    marginVertical: 20,
    alignItems: 'center',
  },
  mealText: { fontSize: 16, fontWeight: '600', marginBottom: 10 },
  button: { backgroundColor: '#7FFF00', paddingVertical: 6, paddingHorizontal: 12, borderRadius: 6 },
  buttonText: { color: '#1E1E1E', fontSize: 12 },
  addButton: { position: 'absolute', top: 65, right: 20 },
  footer: {
    position: 'absolute',
    bottom: 20,
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#FFF',
    paddingVertical: 12,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 6,
    alignSelf: 'center',
  },
});
