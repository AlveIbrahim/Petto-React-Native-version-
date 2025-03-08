// hooks/usePet.ts
import { useState, useEffect, useRef } from 'react';

export type PetMood = 'happy' | 'sad' | 'sleeping';
export type PetStage = 'baby' | 'child' | 'teen' | 'adult';

export interface IPet {
  name: string;
  age: number;
  hunger: number;
  happiness: number;
  energy: number;
  cleanliness: number;
  careQuality: number;
  isAlive: boolean;
  isSleeping: boolean;
  lastFed: number;
  lastPlayed: number;
  
  update(): void;
  feed(): void;
  play(): void;
  clean(): void;
  sleep(): void;
  getMood(): PetMood;
  getEvolutionStage(): PetStage;
  getStatusMessage(): string;
  needsAttention(): string | null;
}

// Export the Pet class
export class Pet implements IPet {
  name: string;
  age: number = 0;
  hunger: number = 100;
  happiness: number = 100;
  energy: number = 100;
  cleanliness: number = 100;
  careQuality: number = 100;
  isAlive: boolean = true;
  isSleeping: boolean = false;
  lastFed: number = 0;
  lastPlayed: number = 0;
  private ticksLived: number = 0;
  private agingCounter: number = 0;
  private static AGING_THRESHOLD = 5; // Pet ages every 5 updates if well cared for
  
  constructor(name: string) {
    this.name = name;
  }
  
  update(): void {
    if (!this.isAlive) return;
    
    this.ticksLived++;
    
    // Calculate care quality
    const timeSinceLastFed = this.ticksLived - this.lastFed;
    const timeSinceLastPlayed = this.ticksLived - this.lastPlayed;
    
    // Reduce care quality if not attended to regularly
    if (timeSinceLastFed > 3) {
      this.careQuality = Math.max(0, this.careQuality - 5);
    }
    
    if (timeSinceLastPlayed > 4) {
      this.careQuality = Math.max(0, this.careQuality - 3);
    }
    
    // Restore care quality when needs are met
    if (this.hunger > 70 && this.happiness > 70) {
      this.careQuality = Math.min(100, this.careQuality + 2);
    }
    
    // Only age if care quality is good enough
    if (this.careQuality > 50) {
      this.agingCounter++;
      
      // Slower aging - only increment age after multiple updates
      if (this.agingCounter >= Pet.AGING_THRESHOLD) {
        this.age++;
        this.agingCounter = 0;
      }
    }
    
    if (this.isSleeping) {
      // Recover energy while sleeping
      this.energy = Math.min(this.energy + 15, 100);
      
      // 20% chance to wake up if energy is above 80%
      if (this.energy > 80 && Math.random() < 0.2) {
        this.isSleeping = false;
      }
    } else {
      // Decrease stats over time
      this.hunger = Math.max(0, this.hunger - 5);
      this.happiness = Math.max(0, this.happiness - 3);
      this.energy = Math.max(0, this.energy - 2);
      this.cleanliness = Math.max(0, this.cleanliness - 4);
      
      // Check if pet should die
      if (this.hunger <= 0 && this.happiness <= 0 && this.energy <= 0) {
        this.isAlive = false;
      }
    }
  }
  
  feed(): void {
    if (!this.isAlive || this.isSleeping) return;
    
    this.hunger = Math.min(this.hunger + 30, 100);
    this.energy = Math.max(0, this.energy - 5);
    this.cleanliness = Math.max(0, this.cleanliness - 10);
    
    // Update last fed time
    this.lastFed = this.ticksLived;
  }
  
  play(): void {
    if (!this.isAlive || this.isSleeping) return;
    
    this.happiness = Math.min(this.happiness + 25, 100);
    this.energy = Math.max(0, this.energy - 15);
    this.hunger = Math.max(0, this.hunger - 10);
    this.cleanliness = Math.max(0, this.cleanliness - 5);
    
    // Update last played time
    this.lastPlayed = this.ticksLived;
  }
  
  clean(): void {
    if (!this.isAlive || this.isSleeping) return;
    
    this.cleanliness = Math.min(this.cleanliness + 40, 100);
    this.happiness = Math.min(this.happiness + 5, 100);
  }
  
  sleep(): void {
    if (!this.isAlive) return;
    
    this.isSleeping = !this.isSleeping;
  }
  
  getMood(): PetMood {
    if (this.isSleeping) {
      return 'sleeping';
    } else if (this.hunger < 30 || this.happiness < 30 || 
               this.energy < 30 || this.cleanliness < 30) {
      return 'sad';
    } else {
      return 'happy';
    }
  }
  
  getEvolutionStage(): PetStage {
    if (this.age >= 14) {
      return 'adult';
    } else if (this.age >= 7) {
      return 'teen';
    } else if (this.age >= 3) {
      return 'child';
    } else {
      return 'baby';
    }
  }
  
  getStatusMessage(): string {
    if (this.hunger < 20) {
      return "I'm hungry! 🍽️";
    } else if (this.happiness < 20) {
      return "I'm bored! 😕";
    } else if (this.energy < 20) {
      return "I'm tired! 😴";
    } else if (this.cleanliness < 20) {
      return "I'm dirty! 🛁";
    } else {
      return "I'm happy! 😊";
    }
  }
  
  // New method to check if pet needs attention (for notifications)
  needsAttention(): string | null {
    if (!this.isAlive) return null;
    
    if (this.hunger <= 20) {
      return "Your pet is hungry! 🍽️";
    } else if (this.happiness <= 20) {
      return "Your pet is feeling lonely! 😕";
    } else if (this.energy <= 20) {
      return "Your pet is tired! 😴";
    } else if (this.cleanliness <= 20) {
      return "Your pet needs cleaning! 🛁";
    }
    return null;
  }
  
  // Get care quality status for UI display
  getCareQualityMessage(): string {
    if (this.careQuality > 80) {
      return "Your pet is well cared for!";
    } else if (this.careQuality > 50) {
      return "Your pet is doing okay.";
    } else if (this.careQuality > 30) {
      return "Your pet needs more attention.";
    } else {
      return "Your pet is neglected!";
    }
  }
}

// Define the return type of usePet hook
interface UsePetReturn {
  pet: Pet;
  feedPet: () => void;
  playWithPet: () => void;
  cleanPet: () => void;
  toggleSleep: () => void;
}

const usePet = (name: string): UsePetReturn => {
  const [pet, setPet] = useState<Pet>(new Pet(name));
  
  // Game loop using useRef and useEffect
  const gameLoopRef = useRef<NodeJS.Timeout | null>(null);
  
  // Update pet stats every 5 seconds
  useEffect(() => {
    gameLoopRef.current = setInterval(() => {
      setPet(prevPet => {
        const updatedPet = new Pet(prevPet.name);
        // Copy all properties from the previous pet
        Object.assign(updatedPet, prevPet);
        // Update the pet
        updatedPet.update();
        return updatedPet;
      });
    }, 5000);
    
    // Clean up interval on unmount
    return () => {
      if (gameLoopRef.current) {
        clearInterval(gameLoopRef.current);
      }
    };
  }, []);
  
  // Functions to interact with pet
  const feedPet = () => {
    setPet(prevPet => {
      const updatedPet = new Pet(prevPet.name);
      Object.assign(updatedPet, prevPet);
      updatedPet.feed();
      return updatedPet;
    });
  };
  
  const playWithPet = () => {
    setPet(prevPet => {
      const updatedPet = new Pet(prevPet.name);
      Object.assign(updatedPet, prevPet);
      updatedPet.play();
      return updatedPet;
    });
  };
  
  const cleanPet = () => {
    setPet(prevPet => {
      const updatedPet = new Pet(prevPet.name);
      Object.assign(updatedPet, prevPet);
      updatedPet.clean();
      return updatedPet;
    });
  };
  
  const toggleSleep = () => {
    setPet(prevPet => {
      const updatedPet = new Pet(prevPet.name);
      Object.assign(updatedPet, prevPet);
      updatedPet.sleep();
      return updatedPet;
    });
  };
  
  return { pet, feedPet, playWithPet, cleanPet, toggleSleep };
};

export default usePet;