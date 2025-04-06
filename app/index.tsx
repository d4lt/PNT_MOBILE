import { useRef, useState } from "react";
import { Pressable, Text, TextInput, View, StyleSheet } from "react-native";

export default function Index() {
  const [name, setName] = useState("[Nome de Usuário]");
  const [saudacao, setSaudacao] = useState("Olá, ");
  const inputRef = useRef<TextInput>(null);

  const clear = () => {
    if (inputRef.current) {
      inputRef.current.clear();
    }
    setSaudacao("");
    setName("");
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        ref={inputRef}
        placeholder="Digite seu nome"
        onSubmitEditing={(e) => setName(e.nativeEvent.text)}
      />

      <Text style={styles.text}>
        {saudacao}
        {name}
      </Text>

      <View style={styles.buttonContainer}>
        <Pressable onPress={clear} style={styles.button}>
          <Text style={styles.text}>Limpar</Text>
        </Pressable>
        <Pressable
          onPress={() => setSaudacao("Bem-vindo(a) ao nosso App, ")}
          style={styles.button}
        >
          <Text style={styles.text}>Atualizar saudação</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#041b1f",
  },

  buttonContainer: {
    // flex: 0,
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
    gap: 15,
  },

  button: {
    padding: 14,
    borderRadius: 10,
    borderWidth: 3,
    borderColor: "#16b3ff",
    backgroundColor: "#16b3ff",
  },

  text: {
    color: "#fff",
  },

  textInput: {
    color: "#fff",
    backgroundColor: "#767580",
    borderWidth: 2,
    borderColor: "#bbb8c9",
    width: "50%",
    // padding: 10,
    paddingHorizontal: 10,
    borderRadius: 10,
    height: 50  },
});
