import React, { useState, useEffect, useContext } from 'react';
import { View, Text, FlatList, TouchableOpacity, ActivityIndicator } from 'react-native';
import { Link } from 'expo-router';
import { useUserProfileContext } from './hooks/useUserProfileContext';
import { themeStyles } from './styles/themeStyles';

type Character = {
	name: string;
};

const CharacterSelectionScreen = () => {
	// État local pour récolter et stocker les personnages (de l'API)
	const [characters, setCharacters] = useState([]);
	// Sert à l'affichage du chargement de la page
	const [loading, setLoading] = useState(true);

	// Récupération des données du Context grâce au Hook personnalisé
	const { faction, setCharacter } = useUserProfileContext();

	// Chargement du style personnalisé
	const styles = themeStyles(faction);
		
	useEffect(() => {
		fetch('https://swapi.dev/api/people/')
		.then((response) => response.json())
		.then((data) => {
			setCharacters(data.results);
		})
		.finally(() => {
			setLoading(false);
		});
	}, []);

	const renderItem = ({ item }: { item: Character}) => (
		<View style={styles.item}>
		<Text style={styles.itemText}>{item.name}</Text>
		<Link href="/PlanetSelection" style={styles.link} asChild>
			<TouchableOpacity onPress={() => setCharacter(item.name)} style={styles.button}>
				<Text style={styles.buttonText}>Sélectionner</Text>
			</TouchableOpacity>
		</Link>
		</View>
	);

	return (
		<View style={styles.container}>
		<Text style={styles.title}>Sélectionnez un personnage</Text>

		{loading ? (
			<ActivityIndicator size="large" color={faction === "Sith" ? '#ffffff' : '#000000'} />
		) : (
			<FlatList
			data={characters}
			renderItem={renderItem}
			keyExtractor={(item) => item.name}
			/>
		)}
		</View>
	);
};

export default CharacterSelectionScreen;
