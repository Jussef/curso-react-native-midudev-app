import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { StyleSheet, Text, View, Image, Button } from "react-native";
import { getLatestGames } from "./lib/metacritic";
import icon from "./assets/icon.png";

export default function App() {
  const [games, setGames] = useState([]);

  useEffect(() => {
    getLatestGames().then((games) => setGames(games));
  }, []);

  return (
    <View style={styles.container}>
      <Image source={icon} style={{ width: 200, height: 200 }} />
      <StatusBar style="auto" />
      <Text>Aplicación de React Native</Text>
      <Button title="Presionar" onPress={() => alert("Hola Mundo")} />
      {games.map((game) => (
        <View key={game.slug} style={styles.card}>
          <Image source={{ uri: game.image }} style={{ width: 100, height: 100 }} />
        </View>
      ))}
      <Text>Fin de la aplicación</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff898",
    alignItems: "center",
    justifyContent: "center",
  },
});
