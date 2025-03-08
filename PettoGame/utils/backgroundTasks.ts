// utils/backgroundTasks.ts
import * as TaskManager from 'expo-task-manager';
import * as BackgroundFetch from 'expo-background-fetch';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const BACKGROUND_PET_CHECK = 'background-pet-check';

// Define your background task
TaskManager.defineTask(BACKGROUND_PET_CHECK, async () => {
  try {
    console.log('Checking pet status in background');
    
    // Get pet state from AsyncStorage
    const petJson = await AsyncStorage.getItem('pet_data');
    if (!petJson) return BackgroundFetch.BackgroundFetchResult.NoData;
    
    const pet = JSON.parse(petJson);
    
    // Check if notifications are needed
    if (pet.hunger <= 20 || pet.happiness <= 20 || 
        pet.energy <= 20 || pet.cleanliness <= 20) {
      
      // You would trigger a local notification here
      console.log('Pet needs attention!');
      
      return BackgroundFetch.BackgroundFetchResult.NewData;
    }
    
    return BackgroundFetch.BackgroundFetchResult.NoData;
  } catch (error) {
    console.error('Background task error:', error);
    return BackgroundFetch.BackgroundFetchResult.Failed;
  }
});

// Register the task
export async function registerBackgroundTask() {
  try {
    await BackgroundFetch.registerTaskAsync(BACKGROUND_PET_CHECK, {
      minimumInterval: 15 * 60, // 15 minutes
      stopOnTerminate: false,
      startOnBoot: true,
    });
    console.log('Background task registered');
  } catch (err) {
    console.log('Task registration failed:', err);
  }
}