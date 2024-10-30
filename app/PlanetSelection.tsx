import React, { useState, useEffect, useContext } from 'react';
import { View, Text, FlatList, Button, StyleSheet, TouchableOpacity, ActivityIndicator } from 'react-native';
import { Link } from 'expo-router';
import { useUserProfileContext } from './hooks/useUserProfileContext';

type Planet = {
  name: string
}

const PlanetSelectionScreen = () => {
    // Même principe que l'écran des personnages
    const [planets, setPlanets] = useState([]);
    const [loading, setLoading] = useState(true);

    // Récupération des données dans le contexte
    const { faction, setPlanet } = useUserProfileContext();

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
    <View>
      <Text>{item.name}</Text>
      <Link href="/ShipSelection" asChild>
        <TouchableOpacity onPress={() => setPlanet(item.name)}>
          <Text>Sélectionner</Text>
        </TouchableOpacity>
      </Link>
    </View>
  );

  return (
    <View>
      <Text>Sélectionnez une planète</Text>

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
