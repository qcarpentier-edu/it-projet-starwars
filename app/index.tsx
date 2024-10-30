import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';

const IndexScreen = () => {
  return (
    <View>
      <Text>Choisissez votre faction</Text>
      <View>
        <Link href="/CharacterSelection" asChild>
            <TouchableOpacity>
              <Text>Jedi</Text>
            </TouchableOpacity>
        </Link>
        <Link href="/CharacterSelection" asChild>
          <TouchableOpacity>
            <Text>Sith</Text>
          </TouchableOpacity>
        </Link>
      </View>
    </View>
  );
};

export default IndexScreen;