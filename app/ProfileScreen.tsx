import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useUserProfileContext } from './hooks/useUserProfileContext';
import { Link } from 'expo-router';

const ProfileScreen = () => {
    // Récupération des données dans le contexte
    const { faction, character, planet, ship } = useUserProfileContext();

    return (
        <View>
            <Text>Profil de l'utilisateur</Text>
            <Text>Faction: {faction}</Text>
            <Text>Personnage: {character}</Text>
            <Text>Planète: {planet}</Text>
            <Text>Vaisseau: {ship}</Text>
            <Link href="/">
                <Text>Redéfinir mon profil</Text>
            </Link>
        </View>
    );
};

export default ProfileScreen;
