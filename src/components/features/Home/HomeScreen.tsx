import { Filtro } from "@/app/types";
import AppButton from "@/components/AppButton";
import Header from "@/components/Header";
import { useState } from "react";
import {
    Button,
    FlatList,
    Image,
    ScrollView,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";

type Tarefa = {
  id: string;
  title: string;
  concluida: boolean;
};

type BotaoProps = {
  onPress?: () => void;
  text?: string;
};

const data = [
  {
    id: "1",
    title: "Tarefa 1",
    concluida: false,
  },
  {
    id: "2",
    title: "Tarefa 2",
    concluida: false,
  },
  {
    id: "3",
    title: "Tarefa 3",
    concluida: true,
  },
] as Array<Tarefa>;





const HomeScreen = ({ onPress, text }: BotaoProps) => {
  const nome = "Afonso";
  const idade = 25;
  const [email, setEmail] = useState<string>("" as string); // 2 formas de tipificar
  const [curso, setCurso] = useState("Engenharia Informatica");
  const valida = curso.length > 0;
  const renderAllContent = true;
  const [contador, setContador] = useState(0);
  const [tarefas, setTarefas] = useState(data as Array<Tarefa>); // Array<Tarefa> | Tarefa[]
  const [novaTarefa, setNovaTarefa] = useState("");
  const [filtro, setFiltro] = useState<Filtro>('todos');

  function tarefasVisiveis() {
    if (filtro === 'pendentes') {
      return tarefas.filter((t) => !t.concluida);
    }
    if (filtro === 'concluidas') {
      return tarefas.filter((t) => t.concluida);
    }
    return tarefas;
  }

  console.log(email);
  return (
    <View
      style={[
        {
          flex: 1,
          borderWidth: 5,
          // alignItems: "center",
          // justifyContent: "center",
        },
        // valida && { backgroundColor: "#000" },
      ]}
    >
      <ScrollView>
        <Header title="Home Screen" />
        <Text style={{ fontSize: 18 }}>{nome}</Text>
        <Text>{idade + 10}</Text>
        {/* <Text>{text}</Text> */}
        <Text>{curso}</Text>
        <Text>{email}</Text>
        <TextInput
          value={email}
          onChangeText={setEmail}
          placeholder="Digite o email"
        />
        <Button onPress={() => setEmail(email)} title="Button1" />
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
        <AppButton onPress={onPress} title={text} />
        <TouchableOpacity onPress={() => setContador(contador + 1)}>
          <Text>Contador: {contador}</Text>
        </TouchableOpacity>

        <View
          style={{
            flexDirection: "row",
            gap: 10,
            marginTop: 5,
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <TouchableOpacity onPress={() => setFiltro("todos")}>
            <Text>Todos</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setFiltro("pendentes")}>
            <Text>Pendentes</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setFiltro("concluidas")}>
            <Text>Concluídas</Text>
          </TouchableOpacity>
        </View>

        <TextInput
          value={novaTarefa}
          onChangeText={setNovaTarefa}
          placeholder="Nova tarefa"
        />
        <Button
          title="Adicionar"
          onPress={() => {
            if (!novaTarefa.trim()) return;
            setTarefas((current) => [
              ...current,
              {
                id: String(Date.now()),
                title: novaTarefa.trim(),
                concluida: false,
              },
            ]);
            setNovaTarefa("");
          }}
        />

        <FlatList
          data={tarefasVisiveis()}
          keyExtractor={(item) => item.id}
          scrollEnabled={false}
          renderItem={({ item }) => (
            <View style={{ paddingVertical: 8 }}>
              <Text>{item.title}</Text>
            </View>
          )}
        />
      </ScrollView>
    </View>
  );
};

export default HomeScreen;