import React, { useState } from "react";
import { Picker } from "@react-native-picker/picker";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Alert,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "./App";

export default function TMBScreen() {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const [peso, setPeso] = useState("");
  const [altura, setAltura] = useState("");
  const [idade, setIdade] = useState("");
  const [objetivo, setObjetivo] = useState("");
  const [nivelAtividade, setNivelAtividade] = useState("");
  const [genero, setGenero] = useState("");
  const [tmb, setTmb] = useState<number | null>(null);

  const calcularTMB = () => {
    const p = parseFloat(peso);
    const a = parseFloat(altura);
    const i = parseInt(idade);

    if (!p || !a || !i || !genero) {
      Alert.alert("Atenção", "Preencha todos os campos e selecione o gênero.");
      return;
    }

    let resultado = 0;
    if (genero === "masculino") {
      resultado = 88.36 + 13.4 * p + 4.8 * a - 5.7 * i;
    } else if (genero === "feminino") {
      resultado = 447.6 + 9.2 * p + 3.1 * a - 4.3 * i;
    }

    setTmb(Math.round(resultado));
  };

  return (
    <View style={styles.fullScreen}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Taxa de Metabolismo Basal {"\n"}(TMB)</Text>

        <Text style={styles.label}>Peso (kg):</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          value={peso}
          onChangeText={setPeso}
        />

        <Text style={styles.label}>Altura (cm):</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          value={altura}
          onChangeText={setAltura}
        />

        <Text style={styles.label}>Idade:</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          value={idade}
          onChangeText={setIdade}
        />

        <Text style={styles.label}>Objetivo:</Text>
        <View style={styles.pickerWrapper}>
          <Picker
            selectedValue={objetivo}
            onValueChange={(itemValue) => setObjetivo(itemValue)}
            mode="dropdown"
          >
            <Picker.Item label="Selecione seu objetivo" value="" />
            <Picker.Item label="Perder Peso" value="perder" />
            <Picker.Item label="Ganhar Peso" value="ganhar" />
            <Picker.Item label="Manter Peso" value="manter" />
          </Picker>
        </View>

        <Text style={styles.label}>Nível de Atividade:</Text>
        <View style={styles.pickerWrapper}>
          <Picker
            selectedValue={nivelAtividade}
            onValueChange={(itemValue) => setNivelAtividade(itemValue)}
            mode="dropdown"
          >
            <Picker.Item label="Selecione o nível de atividade" value="" />
            <Picker.Item label="Nenhum" value="nenhum" />
            <Picker.Item label="Moderada" value="moderada" />
            <Picker.Item label="Intensa" value="intensa" />
          </Picker>
        </View>

        <Text style={styles.label}>Gênero:</Text>
        <View style={styles.genderContainer}>
          <TouchableOpacity
            style={[
              styles.genderButton,
              genero === "masculino" && styles.selectedGender,
            ]}
            onPress={() => setGenero("masculino")}
          >
            <Text style={styles.genderText}>Masculino</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.genderButton,
              genero === "feminino" && styles.selectedGender,
            ]}
            onPress={() => setGenero("feminino")}
          >
            <Text style={styles.genderText}>Feminino</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.calculateButton} onPress={calcularTMB}>
          <Text style={styles.calculateText}>Calcular TMB</Text>
        </TouchableOpacity>

        <View style={styles.divider} />

        {tmb !== null && (
          <Text style={styles.resultado}>Sua TMB é: {tmb} kcal/dia</Text>
        )}

        {/* Botão de navegação com verificação de campos */}
        <TouchableOpacity
          style={styles.arrowButton}
          onPress={() => {
            if (!peso || !altura || !idade || !genero || !objetivo || !nivelAtividade) {
              Alert.alert("Atenção", "Preencha todos os campos antes de continuar!");
              return;
            }
            navigation.navigate("TelaPrincipal");
          }}
        >
          <Text style={styles.arrowText}>→</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  fullScreen: { flex: 1, backgroundColor: "#fff" },
  container: { padding: 20, alignItems: "center" },
  title: { fontSize: 18, textAlign: "center", marginBottom: 20, fontWeight: "500" },
  label: { alignSelf: "flex-start", marginTop: 10, fontSize: 16 },
  input: {
    width: "100%",
    height: 40,
    borderWidth: 1,
    borderColor: "#ddd",
    backgroundColor: "#f5f5f5",
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  pickerWrapper: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    backgroundColor: "#fff",
    marginBottom: -10,
  },
  genderContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginBottom: 15,
    gap: 10,
  },
  genderButton: {
    backgroundColor: "#d3eac8",
    padding: 10,
    borderRadius: 10,
    flex: 1,
    alignItems: "center",
  },
  selectedGender: { backgroundColor: "#9fd989" },
  genderText: { fontSize: 16 },
  calculateButton: {
    backgroundColor: "#9ef78a",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    marginTop: 10,
  },
  calculateText: { fontSize: 16, fontWeight: "bold", color: "#fff" },
  divider: { width: "100%", borderBottomWidth: 1, marginVertical: 15 },
  resultado: { fontSize: 18, fontWeight: "600", marginVertical: 10, color: "#333" },
  arrowButton: {
    backgroundColor: "#9ef78a",
    borderRadius: 20,
    padding: 10,
    marginTop: 10,
  },
  arrowText: { fontSize: 18, color: "#fff" },
});
