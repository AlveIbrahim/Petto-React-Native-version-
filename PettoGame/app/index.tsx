// app/index.tsx
import React, { useEffect } from 'react';
import { View, StyleSheet, SafeAreaView } from 'react-native';
import TamagotchiScreen from '../components/PettoScreen';
import usePet from '../hooks/usePet';
import useNotifications from '../hooks/useNotifications';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { registerBackgroundTask } from '../utils/backgroundTasks';

export default function Home() {
  const { pet, feedPet, playWithPet, cleanPet, toggleSleep } = usePet('Petto');
  const { sendNotification } = useNotifications();
  
  // Register background task when the app starts
  useEffect(() => {
    registerBackgroundTask();
  }, []);
  
  // Save pet data to AsyncStorage for background tasks
  useEffect(() => {
    const savePetData = async () => {
      try {
        const petData = {
          name: pet.name,
          hunger: pet.hunger,
          happiness: pet.happiness,
          energy: pet.energy,
          cleanliness: pet.cleanliness,
          isAlive: pet.isAlive
        };
        
        await AsyncStorage.setItem('pet_data', JSON.stringify(petData));
      } catch (error) {
        console.error('Error saving pet data:', error);
      }
    };
    
    savePetData();
  }, [pet]);
  
  // Check if pet needs attention and send notification
  useEffect(() => {
    const notificationCheck = setInterval(() => {
      const attentionMessage = pet.needsAttention();
      if (attentionMessage) {
        sendNotification('Petto needs your attention!', attentionMessage);
      }
    }, 30000);
    
    return () => clearInterval(notificationCheck);
  }, [pet]);

  return (
    <SafeAreaView style={styles.container}>
      <TamagotchiScreen 
        pet={pet}
        onFeed={feedPet}
        onPlay={playWithPet}
        onClean={cleanPet}
        onSleep={toggleSleep}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFD6FF',
  },
});