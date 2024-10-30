import React, { useState, useEffect, useContext } from 'react';
import { View, Text, FlatList, TouchableOpacity, ActivityIndicator } from 'react-native';
import { Link } from 'expo-router';
import { useUserProfileContext } from './hooks/useUserProfileContext';

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
		<View>
		<Text>{item.name}</Text>
		<Link href="/PlanetSelection" asChild>
			<TouchableOpacity onPress={() => setCharacter(item.name)}>
				<Text>Sélectionner</Text>
			</TouchableOpacity>
		</Link>
		</View>
	);

	return (
		<View>
		<Text>Sélectionnez un personnage</Text>

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
