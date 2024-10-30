import React, { useContext } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';
import { useUserProfileContext } from './hooks/useUserProfileContext';

const IndexScreen = () => {
	// Récupération des données du Context grâce au Hook personnalisé
	const { faction, setFaction } = useUserProfileContext();

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