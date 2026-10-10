import { createNativeStackNavigator } from "expo-router/build/react-navigation/native-stack";
import { RootStackParamList } from "./types";
import { NavigationContainer } from "@react-navigation/native";
import TarefasScreen from "./features/Listatarefas/TarefasScreen";

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function AppNavigator() {
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName="HomeScreen">
                <Stack.Screen name="HomeScreen" component={HomeScreen} />
                <Stack.Screen name="Tarefas" component={TarefasScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}