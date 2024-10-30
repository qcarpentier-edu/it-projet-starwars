import React, { useState, useEffect, useContext } from 'react';
import { View, Text, FlatList, TouchableOpacity, ActivityIndicator } from 'react-native';
import { Link } from 'expo-router';
import { UserProfileContext } from './context/UserProfileContext';

type Character = {
	name: string;
};

const CharacterSelectionScreen = () => {
	// État local pour récolter et stocker les personnages (de l'API)
	const [characters, setCharacters] = useState([]);
	// Sert à l'affichage du chargement de la page
	const [loading, setLoading] = useState(true);

	// Utilisation du Context (créé précédemment)
	const context = useContext(UserProfileContext);

	// Simple check si le contexte est undefined (sinon erreur de typage en TypeScript)
	if (context === undefined) {
		throw new Error("useUserProfile doit être dans un UserProfileProvider");
	}
		
	// Récupération des données du Context (faction pour le thème, setCharacter pour sauvegarder le personnage choisi)
	const { faction, setCharacter } = context;

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
