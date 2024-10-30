import React, { createContext, useState, ReactNode } from 'react';

// 1. Créer le type pour les données du profil utilisateur
type UserProfileContextType = {
  faction: string;
  character: string;
  setFaction: (faction: string) => void;
  setCharacter: (character: string) => void;
};

// 2. Créer et exporter le contexte (attention au typage)
export const UserProfileContext = createContext<UserProfileContextType | undefined>(undefined);

// 3. Créer le fournisseur de contexte (Provider)
export const UserProfileProvider = ({ children }: { children: ReactNode }) => {
  const [faction, setFaction] = useState('Jedi'); // Jedi par défaut
  const [character, setCharacter] = useState<string>('');

  return (
    <UserProfileContext.Provider
      value={{
        faction,
        character,
        setFaction,
        setCharacter
      }}
    >
      {children}
    </UserProfileContext.Provider>
  );
};
