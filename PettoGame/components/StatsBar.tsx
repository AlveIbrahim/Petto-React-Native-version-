// components/StatsBar.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface StatsBarProps {
  hunger: number;
  happiness: number;
  energy: number;
  cleanliness: number;
}

const StatsBar: React.FC<StatsBarProps> = ({ 
  hunger, happiness, energy, cleanliness 
}) => {
  // Helper function to render progress bars
  const renderProgressBar = (value: number, color: string) => {
    return (
      <View style={styles.progressBarContainer}>
        <View 
          style={[
            styles.progressBarFill, 
            { width: `${value}%`, backgroundColor: color }
          ]} 
        />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.statContainer}>
        <Text style={styles.statLabel}>🍔</Text>
        {renderProgressBar(hunger, '#FF9900')}
      </View>
      
      <View style={styles.statContainer}>
        <Text style={styles.statLabel}>😊</Text>
        {renderProgressBar(happiness, '#FF69B4')}
      </View>
      
      <View style={styles.statContainer}>
        <Text style={styles.statLabel}>⚡</Text>
        {renderProgressBar(energy, '#FFD700')}
      </View>
      
      <View style={styles.statContainer}>
        <Text style={styles.statLabel}>🛁</Text>
        {renderProgressBar(cleanliness, '#00BFFF')}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginVertical: 15,
  },
  statContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  statLabel: {
    fontSize: 16,
    marginRight: 10,
    width: 25,
    textAlign: 'center',
  },
  progressBarContainer: {
    flex: 1,
    height: 10,
    backgroundColor: '#DDDDDD',
    borderRadius: 5,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#000',
  },
  progressBarFill: {
    height: '100%',
  },
});

export default StatsBar;