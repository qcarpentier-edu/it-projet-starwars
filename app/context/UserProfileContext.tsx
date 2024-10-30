import React, { createContext, useState, ReactNode } from 'react';
import { FactionType } from '../styles/themeColors';

// 1. Créer le type pour les données du profil utilisateur
type UserProfileContextType = {
  faction: FactionType;
  character: string;
  planet: string;
  ship: string;
  setFaction: (faction: FactionType) => void;
  setCharacter: (character: string) => void;
  setPlanet: (planet: string) => void;
  setShip: (ship: string) => void;
};

// 2. Créer et exporter le contexte (attention au typage)
export const UserProfileContext = createContext<UserProfileContextType | undefined>(undefined);

// 3. Créer le fournisseur de contexte (Provider)
export const UserProfileProvider = ({ children }: { children: ReactNode }) => {
  const [faction, setFaction] = useState<FactionType>('Jedi'); // Jedi par défaut
  const [character, setCharacter] = useState<string>('');
  const [planet, setPlanet] = useState<string>('');
  const [ship, setShip] = useState<string>('');

  return (
    <UserProfileContext.Provider
      value={{
        faction,
        character,
        planet,
        ship,
        setFaction,
        setCharacter,
        setPlanet,
        setShip
      }}
    >
      {children}
    </UserProfileContext.Provider>
  );
};
