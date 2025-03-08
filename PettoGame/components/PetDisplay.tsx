// components/PetDisplay.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Pet, PetMood, PetStage } from '../hooks/usePet';
import PetSVG from './PetSVG';

interface PetDisplayProps {
  pet: Pet;
}

const PetDisplay: React.FC<PetDisplayProps> = ({ pet }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.statusText}>{pet.getStatusMessage()}</Text>
      <Text style={styles.ageText}>Age: {pet.age} days</Text>
      
      <View style={styles.petContainer}>
        <PetSVG 
          stage={pet.getEvolutionStage()} 
          mood={pet.getMood()} 
          width={150} 
          height={150} 
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 10,
  },
  statusText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  ageText: {
    fontSize: 12,
    color: '#555',
    marginBottom: 10,
  },
  petContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    borderWidth: 2,
    borderColor: '#000',
    borderStyle: 'dashed',
    backgroundColor: 'transparent',
  },
});

export default PetDisplay;