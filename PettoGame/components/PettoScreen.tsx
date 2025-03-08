// components/TamagotchiScreen.tsx
import React from 'react';
import { View, StyleSheet } from 'react-native';
import PetDisplay from './PetDisplay';
import StatsBar from './StatsBar';
import ActionButtons from './ActionButtons';
import { Pet, PetMood, PetStage } from '../hooks/usePet';

interface TamagotchiScreenProps {
  pet: Pet;
  onFeed: () => void;
  onPlay: () => void;
  onClean: () => void;
  onSleep: () => void;
}

const TamagotchiScreen: React.FC<TamagotchiScreenProps> = ({ 
  pet, onFeed, onPlay, onClean, onSleep 
}) => {
  return (
    <View style={styles.container}>
      {/* Tamagotchi Device Frame */}
      <View style={styles.deviceFrame}>
        {/* Screen Container */}
        <View style={styles.screenContainer}>
          <PetDisplay 
            pet={pet} 
          />
        </View>
        
        {/* Stats Display */}
        <StatsBar 
          hunger={pet.hunger}
          happiness={pet.happiness}
          energy={pet.energy}
          cleanliness={pet.cleanliness}
        />
        
        {/* Action Buttons */}
        <ActionButtons 
          onFeed={onFeed}
          onPlay={onPlay}
          onClean={onClean}
          onSleep={onSleep}
          disabled={!pet.isAlive}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  deviceFrame: {
    width: '90%',
    height: '80%',
    backgroundColor: '#FFC2E8',
    borderRadius: 30,
    borderWidth: 5,
    borderColor: '#FF69B4',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 20,
  },
  screenContainer: {
    width: '85%',
    height: '50%',
    backgroundColor: '#E0FFFF',
    borderRadius: 12,
    marginTop: 30,
    overflow: 'hidden',
  },
});

export default TamagotchiScreen;