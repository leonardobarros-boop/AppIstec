import Header from "@/components/Header";
import { useState } from "react";
import { Button, Image, ScrollView, Text, TextInput, View } from "react-native";

interface BotaoProps {
  text: string;
  onPress: () => void;
}

const HomeScreen = ({ onPress, text }: BotaoProps) => {
  const nome = "Afonso";
  const idade = 25;
  const [email, setEmail] = useState<string>("" as string); // 2 formas de tipificar
  const [curso, setCurso] = useState("Engenharia Informatica");
  const valida = curso.length > 0;
  console.log(email);
  return (
    <View
      style={[
        {
          flex: 1,
          borderWidth: 5,
          alignItems: "center",
          justifyContent: "center",
        },
        // valida && { backgroundColor: "#000" },
      ]}
    >
      <ScrollView>
        <Header title="Home Screen" />
        <Text>{nome}</Text>
        <Text>{idade + 10}</Text>
        {/* <Text>{text}</Text> */}
        <Text>{curso}</Text>
        <Text>{email}</Text>
        <TextInput
          value={email}
          onChangeText={setEmail}
          placeholder="Digite o email"
        />
        <Button onPress={() => setCurso("Novo Curso")} title="Button1" />
        {/* Imagem remota */}
        <Image
          source={{ uri: "https://via.placeholder.com/150" }}
          style={{ width: 150, height: 150 }}
        />
        {/* Imagem local */}
        <Image
          source={require("./../../assets/images/icon.png")}
          style={{ width: 150, height: 150 }}
        />
        {/* Operador ternário */}
        <Text>{valida ? "Válido" : "Inválido"}</Text>
        <Text style={{ fontSize: 20 }}>
          Bla bla bla text <Text style={{ fontWeight: "bold" }}>longo</Text>
        </Text>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
coisa