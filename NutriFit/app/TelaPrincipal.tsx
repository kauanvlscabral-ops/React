import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { ProgressBar } from 'react-native-paper';
import { Feather, Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from './App';

// ❌ NÃO restringir a um único screen
type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

export default function TelaInfo() {
  const navigation = useNavigation<NavigationProp>(); // ✅ permite navegar para qualquer tela

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.header}>Calorias e Macronutrientes hoje</Text>

        {/* Círculo de progresso */}
        <View style={styles.circleContainer}>
          <View style={styles.circle}>
            <Text style={styles.percentage}>0%</Text>
          </View>
          <Text style={styles.meta}>Meta diária: 1800kcal</Text>
        </View>

        {/* Barras de macronutrientes */}
        <View style={styles.macros}>
          {['Carboidrato', 'Proteína', 'Gordura'].map((macro, i) => (
            <View key={macro} style={styles.macroItem}>
              <Text style={styles.macroLabel}>{macro}</Text>
              <ProgressBar
                progress={i === 0 ? 0.2 : i === 1 ? 0.5 : 0.3}
                color={i === 0 ? '#a179dc' : i === 1 ? '#00BFFF' : '#F19D00'}
                style={styles.progress}
              />
            </View>
          ))}
        </View>

        {/* Refeições */}
        <View style={styles.meals}>
          {['Café da manhã', 'Almoço', 'Lanche', 'Janta'].map((meal) => (
            <View key={meal} style={styles.mealItem}>
              <Text style={styles.mealText}>{meal}</Text>
              <TouchableOpacity>
                <Ionicons name="add" size={30} color="#333" />
              </TouchableOpacity>
            </View>
          ))}
        </View>
      </ScrollView>

      {/* Barra inferior */}
      <View style={styles.footer}>
        {/* Edit → vai para TelaDieta */}
        <TouchableOpacity onPress={() => navigation.navigate('TelaDieta')}>
          <Feather name="edit-2" size={24} color="#7D7D7D" />
        </TouchableOpacity>

        {/* Home → permanece na TelaPrincipal */}
        <TouchableOpacity onPress={() => navigation.navigate('TelaPrincipal')}>
          <Feather name="home" size={24} color="#4B0082" />
        </TouchableOpacity>

        {/* User → vai para TelaInfo */}
        <TouchableOpacity onPress={() => navigation.navigate('TelaInfo')}>
          <Feather name="user" size={24} color="#7D7D7D" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  scrollContainer: { padding: 20 },
  header: { fontSize: 16, fontWeight: 'bold', marginBottom: 10, textAlign: 'center' },
  circleContainer: { alignItems: 'center', marginBottom: 25 },
  circle: { width: 120, height: 120, borderRadius: 60, borderWidth: 10, borderColor: '#5c3ea1', justifyContent: 'center', alignItems: 'center' },
  percentage: { fontSize: 20, fontWeight: 'bold', color: '#5c3ea1' },
  meta: { marginTop: 10 },
  macros: { marginBottom: 20 },
  macroItem: { marginBottom: 10 },
  macroLabel: { fontSize: 14, marginBottom: 5 },
  progress: { height: 8, borderRadius: 10 },
  meals: { gap: 12 },
  mealItem: { backgroundColor: '#f3f3f3', padding: 15, borderRadius: 10, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  mealText: { fontSize: 14 },
  footer: { position: 'absolute', bottom: 20, width: '90%', flexDirection: 'row', justifyContent: 'space-around', backgroundColor: '#FFF', paddingVertical: 12, borderRadius: 20, shadowColor: '#000', shadowOpacity: 0.1, shadowRadius: 10, elevation: 5 },
});
