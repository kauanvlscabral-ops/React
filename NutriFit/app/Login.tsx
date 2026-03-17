import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "./App";

// Tipagem genérica para qualquer tela do stack
type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

export default function TelaLogin() {
  const navigation = useNavigation<NavigationProp>();

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const handleLogin = () => {
    if (!email || !senha) {
      Alert.alert("Erro", "Por favor, preencha todos os campos.");
      return;
    }

    // Aqui você poderia adicionar validação de login real
    navigation.navigate("TelaTMB");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>

      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        secureTextEntry
        value={senha}
        onChangeText={setSenha}
      />

      {/* Botão de entrar */}
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>

      {/* Botão de cadastro */}
      <TouchableOpacity onPress={() => navigation.navigate("Cadastro")}>
        <Text style={styles.registerText}>Não tem conta? Cadastre-se</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center", padding: 20 },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 20 },
  input: { width: "100%", height: 50, backgroundColor: "#E7ECE6", borderRadius: 8, paddingHorizontal: 10, marginBottom: 15 },
  button: { backgroundColor: "#1D6016", width: "100%", height: 50, justifyContent: "center", alignItems: "center", borderRadius: 8, marginBottom: 15 },
  buttonText: { color: "#fff", fontWeight: "bold", fontSize: 16 },
  registerText: { color: "#555" }
});
