import { useContext } from 'react';
import { UserProfileContext } from '../context/UserProfileContext';

// Hook personnalisé pour utiliser le profil utilisateur
export const useUserProfileContext = () => {
    const context = useContext(UserProfileContext);

    if (context === undefined) {
        throw new Error("useUserProfile doit être dans un UserProfileProvider");
    }

    return context;
};
