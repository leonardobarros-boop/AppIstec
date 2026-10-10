import Header from "@/components/Header";
import { Tarefa } from "./types";
import { useState } from "react";
import {
  Button,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";

interface BotaoProps {
  text: string;
  onPress: () => void;
}


const HomeScreen = ({ onPress, text }: BotaoProps) => {

  const [curso, setCurso] = useState("Curso do Mal");
  const [email, setEmail] = useState("");
  const nome = "Andre Freire";
  const idade = 32;
  const adjetivo = "Feio";
  const [imagem, setImagem] = useState(false);
  const [contador, setContador] = useState(0);
  const valida = false;
  const [tarefas, setTarefa] = useState([] as Array<Tarefa>);

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      borderWidth: 5,
      alignItems: "center",
      justifyContent: "center",
    },
    gif: {
      width: 196,
      height: 294,
    },
  });

  return (
    <View style={styles.container}>
      <ScrollView>
        <Header title="Inicio" />
        <Text>{nome}</Text>
        <Text>{idade + 10}</Text>
        <Text>{text}</Text>
        <Text>{curso}</Text>

        <Button onPress={() => setCurso("Curso Fixe😎")} title="Button1" />

        <Image
          source={ imagem ? require("./../../assets/images/icon.png") : { uri: "https://media.giphy.com/media/04DMYESomjb6BCBNB8/giphy.gif " }}

          style={styles.gif}
          resizeMode="contain"
        />

        <Image
          source={require("./../../assets/images/icon.png")}
          style={{ width: 150, height: 150 }}
        />
        {/* Operador ternário */}
        <Text>{valida ? "Válido" : "Inválido"}</Text>
        <Text style={{ fontSize: 20 }}>
          Bruh <Text style={{ fontWeight: "bold" }}>Bruhhh</Text>
        </Text>
        <TouchableOpacity onPress={onPress}>
          <Text>{text || "Respect the sigma"}</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => setImagem(!imagem)}>
          <Text>Mudar imagem</Text>
        </TouchableOpacity>

      </ScrollView>
    </View>
  );
};

export default HomeScreen;
