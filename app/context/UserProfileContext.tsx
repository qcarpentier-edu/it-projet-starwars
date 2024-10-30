import React, { createContext, useState, ReactNode } from 'react';

// 1. Créer le type pour les données du profil utilisateur
type UserProfileContextType = {
  faction: string;
  setFaction: (faction: string) => void;
};

// 2. Créer et exporter le contexte (attention au typage)
export const UserProfileContext = createContext<UserProfileContextType | undefined>(undefined);

// 3. Créer le fournisseur de contexte (Provider)
export const UserProfileProvider = ({ children }: { children: ReactNode }) => {
  const [faction, setFaction] = useState('Jedi'); // Jedi par défaut

  return (
    <UserProfileContext.Provider
      value={{
        faction,
        setFaction,
      }}
    >
      {children}
    </UserProfileContext.Provider>
  );
};
