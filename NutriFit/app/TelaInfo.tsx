import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { Feather } from '@expo/vector-icons';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from './App';

export default function TelaInfo() {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const [profileImage, setProfileImage] = useState<string | null>(null);

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 1,
      allowsEditing: true,
      aspect: [1, 1],
    });

    if (!result.canceled) setProfileImage(result.assets[0].uri);
  };

  return (
    <View style={styles.container}>
      {/* Cabeçalho */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.profilePicContainer} onPress={pickImage}>
          <Image
            source={profileImage ? { uri: profileImage } : require('../src/fotoPerfil.jpeg')}
            style={styles.profilePic}
          />
        </TouchableOpacity>
      </View>

      {/* Informações do usuário */}
      <View style={styles.profileInfo}>
        <Text style={styles.name}>Ana Luíza Job</Text>
        <Text style={styles.email}>analuizajob123@gmail.com</Text>
      </View>

      <ScrollView contentContainerStyle={styles.scroll}>
        <View style={styles.infoBox}>
          <Text style={styles.label}>DATA DE NASCIMENTO</Text>
          <Text style={styles.value}>23/01/2007</Text>

          <View style={styles.sectionSpacing} />
          <Option label="VER DIETA" onPress={() => navigation.navigate('TelaDieta')} />

          <View style={styles.sectionSpacing} />
          <Option label="MEDIDAS" />

          <View style={styles.sectionSpacing} />
          <Option label="EXCLUIR CONTA" color="red" />
        </View>

        <TouchableOpacity style={styles.editButton}>
          <Text style={styles.editText}>Editar informações</Text>
        </TouchableOpacity>
      </ScrollView>

      {/* Menu inferior */}
      <View style={styles.bottomMenu}>
        <TouchableOpacity onPress={() => navigation.navigate('TelaDieta')}>
          <Feather name="edit-2" size={24} color="#7D7D7D" />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('TelaPrincipal')}>
          <Feather name="home" size={24} color="#7D7D7D" />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('TelaInfo')}>
          <Feather name="user" size={24} color="#4B0082" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

type OptionProps = {
  label: string;
  color?: string;
  onPress?: () => void;
};

const Option = ({ label, color = 'black', onPress }: OptionProps) => (
  <TouchableOpacity style={styles.optionRow} onPress={onPress}>
    <Text style={[styles.optionText, { color }]}>{label}</Text>
    <Text style={[styles.optionArrow, { color }]}>{'>'}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#E0E0E0', paddingBottom: 100 },
  header: {
    backgroundColor: '#4B0082',
    height: 140,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingBottom: 30,
  },
  profilePicContainer: {
    backgroundColor: '#eee',
    borderRadius: 999,
    padding: 5,
    position: 'absolute',
    top: 80,
  },
  profilePic: { width: 80, height: 80, borderRadius: 40 },
  profileInfo: { marginTop: 70, alignItems: 'center', marginBottom: 20 },
  name: { fontSize: 20, color: '#F2A100', fontWeight: 'bold' },
  email: { fontSize: 14, color: 'gray' },
  scroll: { alignItems: 'center', paddingHorizontal: 20 },
  infoBox: { width: '100%', marginTop: 10 },
  label: { fontWeight: 'bold', fontSize: 14, marginBottom: 4 },
  value: { color: '#666', marginBottom: 20 },
  sectionSpacing: { height: 16 },
  optionRow: { flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 10, paddingHorizontal: 10, backgroundColor: '#fff', borderRadius: 10, marginVertical: 5 },
  optionText: { fontSize: 16 },
  optionArrow: { fontSize: 18 },
  editButton: {
    marginTop: 20,
    alignSelf: 'center',
    backgroundColor: '#7BB662',
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 20,
  },
  editText: { color: '#fff', fontWeight: 'bold', fontSize: 16 },
  bottomMenu: {
    position: 'absolute',
    bottom: 20,
    backgroundColor: '#FFF',
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 12,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 6,
    alignSelf: 'center',
  },
});
