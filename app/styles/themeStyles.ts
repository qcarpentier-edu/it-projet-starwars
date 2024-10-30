import { StyleSheet } from 'react-native';
import { themeColors, FactionType } from './themeColors';

export const themeStyles = (faction: FactionType) => {
  // Par défaut, utiliser les couleurs Jedi si la faction n'est pas définie
  const colors = themeColors[faction] || themeColors['Jedi']; 

  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background, // Couleur de fond
      alignItems: 'center',
      justifyContent: 'center',
    },
    text: {
      color: colors.text, // Couleur du texte
    },
    title: {
      fontSize: 24,
      color: colors.text, // Couleur du texte du titre
      fontWeight: 'bold',
      marginBottom: 20,
      fontFamily: 'StarJedi', // Utilisation de la police Star Wars
    },
    buttonContainer: {
      marginBottom: 20,
    },
    button: {
      backgroundColor: colors.buttonBackground, // Couleur du bouton
      padding: 15,
      marginVertical: 10,
      borderRadius: 5,
      alignItems: 'center',
    },
    buttonText: {
      color: colors.buttonText, // Couleur du texte du bouton
      fontSize: 18,
      fontFamily: 'StarJedi',
    },
    item: {
      padding: 15,
      borderBottomWidth: 1,
      borderBottomColor: '#ccc',
    },
    itemText: {
      color: colors.text, // Couleur du texte pour les éléments de liste
      fontSize: 18,
      fontFamily: 'StarJedi',
    },
    link: {
      marginTop: 20,
      padding: 10,
      textAlign: 'center',
    },
    linkText: {
      color: colors.link, // Couleur des liens
      fontSize: 18,
    },
    profileText: {
      fontSize: 18,
      color: colors.text, // Couleur du texte pour le profil
      marginVertical: 10,
      fontFamily: 'StarJedi',
    },
  });
};
