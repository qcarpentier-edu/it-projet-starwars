import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, ActivityIndicator } from 'react-native';
import { Link } from 'expo-router';
import { useUserProfileContext } from './hooks/useUserProfileContext';
import { themeStyles } from './styles/themeStyles';

type Ship = {
  name: string
}

const ShipSelectionScreen = () => {
    // Même principe que les autres écrans
    const [ships, setShips] = useState([]);
    const [loading, setLoading] = useState(true);

    // Récupération des données dans le contexte
    const { faction, setShip } = useUserProfileContext();

    // Chargement du style personnalisé
	const styles = themeStyles(faction);

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

    const renderItem = ({ item }: { item: Ship }) => (
        <View style={styles.item}>
            <Text style={styles.itemText}>{item.name}</Text>
            <Link href="/ProfileScreen" style={styles.link} asChild>
                <TouchableOpacity onPress={() => setShip(item.name)} style={styles.button}>
                <Text style={styles.buttonText}>Sélectionner</Text>
                </TouchableOpacity>
            </Link>
        </View>
    );

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Sélectionnez un vaisseau</Text>
            
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