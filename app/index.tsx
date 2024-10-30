import React, { useContext } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';
import { useUserProfileContext } from './hooks/useUserProfileContext';
import { themeStyles } from './styles/themeStyles';

const IndexScreen = () => {
	// Récupération des données du Context grâce au Hook personnalisé
	const { faction, setFaction } = useUserProfileContext();

	// Chargement du style personnalisé
  const styles = themeStyles(faction);

  return (
    <View style={styles.container}>
      <Text style={[styles.title, styles.text]}>Choisissez votre faction</Text>
      <View style={styles.buttonContainer}>
        <Link href="/CharacterSelection" style={styles.link} asChild>
            <TouchableOpacity onPress={() => setFaction('Jedi')} style={styles.button}>
              <Text style={styles.buttonText}>Jedi</Text>
            </TouchableOpacity>
        </Link>
        <Link href="/CharacterSelection" style={styles.link} asChild>
          <TouchableOpacity onPress={() => setFaction('Sith')} style={styles.button}>
            <Text style={styles.buttonText}>Sith</Text>
          </TouchableOpacity>
        </Link>
      </View>
    </View>
  );
};

export default IndexScreen;