import React from 'react';
import { View, Text } from 'react-native';
import { useUserProfileContext } from './hooks/useUserProfileContext';
import { Link } from 'expo-router';
import { themeStyles } from './styles/themeStyles';

const ProfileScreen = () => {
    // Récupération des données dans le contexte
    const { faction, character, planet, ship } = useUserProfileContext();

    // Chargement du style personnalisé
	const styles = themeStyles(faction);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Profil de l'utilisateur</Text>
            <Text style={styles.profileText}>Faction: {faction}</Text>
            <Text style={styles.profileText}>Personnage: {character}</Text>
            <Text style={styles.profileText}>Planète: {planet}</Text>
            <Text style={styles.profileText}>Vaisseau: {ship}</Text>
            <Link href="/" style={styles.link}>
                <Text style={styles.linkText}>Redéfinir mon profil</Text>
            </Link>
        </View>
    );
};

export default ProfileScreen;
