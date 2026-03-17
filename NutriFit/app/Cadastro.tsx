import React from "react";
import { View, Text, Image, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "./App"; // seu RootStackParamList
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

// Agora a tipagem é genérica para qualquer tela do stack
type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

export default function TelaCadastro() {
  const navigation = useNavigation<NavigationProp>();

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          source={require("../src/logo.png")}
          style={{ width: 100, height: 120, resizeMode: "contain" }}
        />
        <Text style={styles.logoText}>Cadastre-se</Text>
      </View>

      <TextInput style={styles.input} placeholder="Nome" />
      <TextInput style={styles.input} placeholder="Sobrenome" />
      <TextInput style={styles.input} placeholder="Data de Nascimento" />
      <TextInput style={styles.input} placeholder="Email" />
      <TextInput style={styles.input} placeholder="Senha" secureTextEntry />
      <TextInput style={styles.input} placeholder="Confirmar Senha" secureTextEntry />

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("TMB")}>
        <Text style={styles.buttonText}>Cadastrar</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("Login")}>
        <Text style={styles.registerText}>
          Já tem uma conta? <Text style={{ fontWeight: "bold" }}>Logar</Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#f5f5f5", paddingHorizontal: 20 },
  logoContainer: { flexDirection: "row", alignItems: "center", marginBottom: 30 },
  logoText: { fontSize: 24, fontWeight: "bold", color: "#333" },
  input: { width: "100%", height: 50, backgroundColor: "#E7ECE6", borderRadius: 8, paddingHorizontal: 10, marginBottom: 15 },
  button: { backgroundColor: "#1D6016", width: "100%", height: 50, borderRadius: 8, justifyContent: "center", alignItems: "center", marginBottom: 15 },
  buttonText: { color: "#fff", fontWeight: "bold", fontSize: 16 },
  registerText: { color: "#555", fontSize: 14 }
});
