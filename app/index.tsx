import React, { useContext } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';
import { UserProfileContext } from './context/UserProfileContext';

const IndexScreen = () => {
  // Utilisation du Context (créé précédemment)
	const context = useContext(UserProfileContext);

	// Simple check si le contexte est undefined (sinon erreur de typage en TypeScript)
	if (context === undefined) {
		throw new Error("useUserProfile doit être dans un UserProfileProvider");
	}
		
	// Récupération des données du Context (faction pour le thème, setFaction pour sauvegarder la faction choisie)
	const { faction, setFaction } = context;

  return (
    <View>
      <Text>Choisissez votre faction</Text>
      <View>
        <Link href="/CharacterSelection" asChild>
            <TouchableOpacity onPress={() => setFaction('Jedi')}>
              <Text>Jedi</Text>
            </TouchableOpacity>
        </Link>
        <Link href="/CharacterSelection" asChild>
          <TouchableOpacity onPress={() => setFaction('Sith')}>
            <Text>Sith</Text>
          </TouchableOpacity>
        </Link>
      </View>
    </View>
  );
};

export default IndexScreen;