// components/ActionButtons.tsx
import React from 'react';
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native';

interface ActionButtonsProps {
  onFeed: () => void;
  onPlay: () => void;
  onClean: () => void;
  onSleep: () => void;
  disabled: boolean;
}

const ActionButtons: React.FC<ActionButtonsProps> = ({ 
  onFeed, onPlay, onClean, onSleep, disabled 
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.buttonRow}>
        <TouchableOpacity 
          style={[styles.button, disabled && styles.buttonDisabled]}
          onPress={onFeed}
          disabled={disabled}
        >
          <Text style={styles.buttonText}>🍔</Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={[styles.button, disabled && styles.buttonDisabled]}
          onPress={onPlay}
          disabled={disabled}
        >
          <Text style={styles.buttonText}>🎮</Text>
        </TouchableOpacity>
      </View>
      
      <View style={styles.buttonRow}>
        <TouchableOpacity 
          style={[styles.button, disabled && styles.buttonDisabled]}
          onPress={onClean}
          disabled={disabled}
        >
          <Text style={styles.buttonText}>🛁</Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={[styles.button, disabled && styles.buttonDisabled]}
          onPress={onSleep}
          disabled={disabled}
        >
          <Text style={styles.buttonText}>😴</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginBottom: 20,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginBottom: 15,
  },
  button: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: '#FF69B4',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#FFFFFF',
  },
  buttonDisabled: {
    backgroundColor: '#CCCCCC',
    borderColor: '#AAAAAA',
  },
  buttonText: {
    fontSize: 24,
  },
});

export default ActionButtons;