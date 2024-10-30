import React, { useContext, useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, ActivityIndicator } from 'react-native';
import { Link } from 'expo-router';
import { useUserProfileContext } from './hooks/useUserProfileContext';

type Ship = {
  name: string
}

const ShipSelectionScreen = () => {
    // Même principe que les autres écrans
    const [ships, setShips] = useState([]);
    const [loading, setLoading] = useState(true);

    // Récupération des données dans le contexte
    const { faction, setShip } = useUserProfileContext();

    useEffect(() => {
    fetch('https://swapi.dev/api/starships')
        .then((response) => response.json())
        .then((data) => {
            setShips(data.results);
        })
        .finally(() => {
            setLoading(false);
        });
    }, []);

    // Fonction pour rendre chaque élément
    const renderItem = ({ item }: { item: Ship }) => (
    <View>
        <Text>{item.name}</Text>
        <Link href="/ProfileScreen" asChild>
        <TouchableOpacity onPress={() => setShip(item.name)}>
            <Text>Sélectionner</Text>
        </TouchableOpacity>
        </Link>
    </View>
    );

    return (
    <View>
        <Text>Sélectionnez un vaisseau</Text>
        
        {loading ? (
        <ActivityIndicator size="large" color={faction === "Sith" ? '#ffffff' : '#000000'} />
        ) : (
        <FlatList
            data={ships}
            renderItem={renderItem}
            keyExtractor={(item) => item.name}
        />
        )}
    </View>
    );
};

export default ShipSelectionScreen;