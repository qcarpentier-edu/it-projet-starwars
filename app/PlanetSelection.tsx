import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, ActivityIndicator } from 'react-native';
import { Link } from 'expo-router';
import { useUserProfileContext } from './hooks/useUserProfileContext';
import { themeStyles } from './styles/themeStyles';

type Planet = {
  name: string
}

const PlanetSelectionScreen = () => {
    // Même principe que l'écran des personnages
    const [planets, setPlanets] = useState([]);
    const [loading, setLoading] = useState(true);

    // Récupération des données dans le contexte
    const { faction, setPlanet } = useUserProfileContext();

    // Chargement du style personnalisé
	const styles = themeStyles(faction);

  useEffect(() => {
    fetch('https://swapi.dev/api/planets/')
      .then((response) => response.json())
      .then((data) => {
        setPlanets(data.results);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const renderItem = ({ item }: { item: Planet }) => (
    <View style={styles.item}>
      <Text style={styles.itemText}>{item.name}</Text>
      <Link href="/ShipSelection" style={styles.link} asChild>
        <TouchableOpacity onPress={() => setPlanet(item.name)} style={styles.button}>
          <Text style={styles.buttonText}>Sélectionner</Text>
        </TouchableOpacity>
      </Link>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sélectionnez une planète</Text>

      {loading ? (
        <ActivityIndicator size="large" color={faction === "Sith" ? '#ffffff' : '#000000'} />
      ) : (
        <FlatList
          data={planets}
          renderItem={renderItem}
          keyExtractor={(item) => item.name}
        />
      )}
    </View>
  );
};

export default PlanetSelectionScreen;
