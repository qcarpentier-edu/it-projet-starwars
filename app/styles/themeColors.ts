// Les couleurs par défaut de l'application (Jedi ou Sith)
export const themeColors = {
    Jedi: {
      background: '#f3f4f6',
      text: '#000000',
      buttonBackground: '#007AFF',
      buttonText: '#ffffff',
      link: '#007AFF',
    },
    Sith: {
      background: '#1a1a1a',
      text: '#FFE81F',
      buttonBackground: '#ffed4c',
      buttonText: '#000000',
      link: '#ff4500',
    },
  };
  
// Type de la Faction (s'assurer qu'on sélectionne bien Jedi ou Sith, rien d'autre) -> typage TypeScript
export type FactionType = 'Jedi' | 'Sith';