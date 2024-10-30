import { Stack } from "expo-router";
import { UserProfileProvider } from './context/UserProfileContext';
import { ActivityIndicator } from "react-native";
import { useFonts } from 'expo-font';

export default function RootLayout() {
  // Charger la police StarJedi avec le hook useFonts (téléchargée et mise dans ../assets/fonts)
  const [fontsLoaded] = useFonts({
    'Starjedi': require('../assets/fonts/Starjedi.ttf'),
  });

  // Afficher un chargement uniquement si la police n'est pas chargée
  if (!fontsLoaded) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }
  
  return (
    // Rendre disponible le fournisseur aux autres écrans (Provider) 
    <UserProfileProvider>
      {/* Ne pas afficher l'entête de l'écran actuel (Stack) */}
      <Stack screenOptions={{ headerShown: false }}/>
    </UserProfileProvider>
  );
}
