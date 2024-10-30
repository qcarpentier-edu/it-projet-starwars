import { Stack } from "expo-router";
import { UserProfileProvider } from './context/UserProfileContext';

export default function RootLayout() {
  return (
    // Rendre disponible le fournisseur aux autres écrans (Provider) 
    <UserProfileProvider>
      {/* Ne pas afficher l'entête de l'écran actuel (Stack) */}
      <Stack screenOptions={{ headerShown: false }}/>
    </UserProfileProvider>
  );
}
