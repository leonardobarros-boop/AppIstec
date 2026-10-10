import { useState } from "react";
import { Text, TouchableOpacity } from "react-native";

export default function Contador() {
  const [contador, setContador] = useState<number>(0);

  return (
    <TouchableOpacity onPress={() => setContador(contador + 1)}>
      <Text>Contador: {contador}</Text>
    </TouchableOpacity>
  );
}
