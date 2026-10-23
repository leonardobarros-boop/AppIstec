import { RootStackParamList } from "@/navigation/types";
import { NativeStackScreenProps } from "expo-router/build/react-navigation/native-stack";
import { Text, View } from "react-native";

type Props = NativeStackScreenProps<RootStackParamList, "DetalhesScreen">;

const DetalhesScreen = ({ route }: Props) => {
  const { title, concluida } = route.params;

  return (
    <View style={{ padding: 16, gap: 8 }}>
      <Text style={{ fontSize: 20, fontWeight: "bold" }}>{title}</Text>
      <Text>Status: {concluida ? "Concluída" : "Pendente"}</Text>
    </View>
  );
};

export default DetalhesScreen;