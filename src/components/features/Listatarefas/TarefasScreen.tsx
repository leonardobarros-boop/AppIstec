import { useMemo, useState } from 'react';
import {
    FlatList,
    Text,
    TextInput,
    View,
} from 'react-native';

import AppButton from '../../AppButton';
import Card from '../../Card';

type Tarefa = {
  id: string;
  title: string;
  concluida: boolean;
};

type Filtro = 'todos' | 'pendentes' | 'concluidas';

const TarefasScreen = () => {
  const [tarefas, setTarefas] = useState<Tarefa[]>([]);
  const [novaTarefa, setNovaTarefa] = useState('');
  const [filtro, setFiltro] = useState<Filtro>('todos');

  const tarefasFiltradas = useMemo(() => {
    switch (filtro) {
      case 'pendentes':
        return tarefas.filter((tarefa) => !tarefa.concluida);
      case 'concluidas':
        return tarefas.filter((tarefa) => tarefa.concluida);
      default:
        return tarefas;
    }
  }, [filtro, tarefas]);

  const adicionarTarefa = () => {
    const texto = novaTarefa.trim();

    if (!texto) {
      return;
    }

    setTarefas((itensAtuais) => [
      ...itensAtuais,
      {
        id: `${Date.now()}`,
        title: texto,
        concluida: false,
      },
    ]);
    setNovaTarefa('');
  };

  return (
    <View style={{ flex: 1, padding: 10 }}>
      <View
        style={{
          flexDirection: 'row',
          gap: 10,
          marginTop: 5,
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <TextInput
          value={novaTarefa}
          onChangeText={setNovaTarefa}
          placeholder="Digite a nova tarefa"
          style={{ flex: 1, borderWidth: 1, padding: 8, borderRadius: 6 }}
        />
        <AppButton
          onPress={adicionarTarefa}
          title="Adicionar Tarefa"
        />
      </View>

      <View style={{ flexDirection: 'row', gap: 10, marginTop: 12 }}>
        <AppButton onPress={() => setFiltro('todos')} title="Todos" />
        <AppButton onPress={() => setFiltro('pendentes')} title="Pendentes" />
        <AppButton onPress={() => setFiltro('concluidas')} title="Concluídas" />
      </View>

      <FlatList
        data={tarefasFiltradas}
        style={{ marginTop: 12 }}
        keyExtractor={(item) => item.id}
        renderItem={({ item: tarefa }) => (
          <Card
            title={tarefa.title}
            concluida={tarefa.concluida}
            onConcluir={() =>
              setTarefas((itensAtuais) =>
                itensAtuais.map((t) =>
                  t.id === tarefa.id ? { ...t, concluida: !t.concluida } : t,
                ),
              )
            }
            onDelete={() =>
              setTarefas((itensAtuais) =>
                itensAtuais.filter((t) => t.id !== tarefa.id),
              )
            }
          />
        )}
        ListEmptyComponent={<Text>Nenhuma tarefa cadastrada.</Text>}
      />
    </View>
  );
};

export default TarefasScreen;
