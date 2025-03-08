// components/PetSVG.tsx
import React from 'react';
import Svg, { Rect, Path } from 'react-native-svg';
import { PetMood, PetStage } from '../hooks/usePet';

interface PetSVGProps {
  stage: PetStage;
  mood: PetMood;
  width: number;
  height: number;
}

const PetSVG: React.FC<PetSVGProps> = ({ stage, mood, width, height }) => {
  // Define colors for different stages
  const stageColors = {
    baby: '#CCCCFF',
    child: '#AAAAFF',
    teen: '#9999FF',
    adult: '#7777FF',
  };

  // Select base color by stage
  const baseColor = stageColors[stage];

  // Render different SVGs based on stage and mood
  switch (stage) {
    case 'baby':
      return renderBabyPet(mood, baseColor, width, height);
    case 'child':
      return renderChildPet(mood, baseColor, width, height);
    case 'teen':
      return renderTeenPet(mood, baseColor, width, height);
    case 'adult':
      return renderAdultPet(mood, baseColor, width, height);
    default:
      return renderBabyPet(mood, baseColor, width, height);
  }
};

// Baby Pet renderer
const renderBabyPet = (mood: PetMood, color: string, width: number, height: number) => {
  switch (mood) {
    case 'happy':
      return (
        <Svg width={width} height={height} viewBox="0 0 16 16">
          {/* Baby body */}
          <Rect x="6" y="6" width="4" height="4" fill={color} />
          {/* Left eye */}
          <Rect x="7" y="7" width="1" height="1" fill="black" />
          {/* Right eye */}
          <Rect x="9" y="7" width="1" height="1" fill="black" />
          {/* Smile */}
          <Rect x="7" y="9" width="3" height="1" fill="black" />
        </Svg>
      );
    
    case 'sad':
      return (
        <Svg width={width} height={height} viewBox="0 0 16 16">
          {/* Baby body */}
          <Rect x="6" y="6" width="4" height="4" fill={color} />
          {/* Left eye */}
          <Rect x="7" y="7" width="1" height="1" fill="black" />
          {/* Right eye */}
          <Rect x="9" y="7" width="1" height="1" fill="black" />
          {/* Frown */}
          <Rect x="8" y="9" width="1" height="1" fill="black" />
          {/* Tear */}
          <Rect x="7" y="8" width="1" height="2" fill="#33CCFF" />
        </Svg>
      );
    
    case 'sleeping':
      return (
        <Svg width={width} height={height} viewBox="0 0 16 16">
          {/* Baby body */}
          <Rect x="6" y="6" width="4" height="4" fill={color} />
          {/* Closed eyes */}
          <Rect x="7" y="8" width="3" height="1" fill="black" />
          {/* Z bubble */}
          <Path d="M10,4 h1 v1 h-1 v1 h1 v1 h-2 v-1 h1 v-1 h-1 z" fill="white" />
        </Svg>
      );
  }
};

// Child Pet renderer
const renderChildPet = (mood: PetMood, color: string, width: number, height: number) => {
  switch (mood) {
    case 'happy':
      return (
        <Svg width={width} height={height} viewBox="0 0 16 16">
          {/* Child body */}
          <Rect x="4" y="4" width="8" height="8" fill={color} />
          {/* Left eye */}
          <Rect x="6" y="6" width="1" height="1" fill="black" />
          {/* Right eye */}
          <Rect x="9" y="6" width="1" height="1" fill="black" />
          {/* Smile */}
          <Path d="M6,8 h1 v1 h2 v1 h-4 v-1 h1 z" fill="black" />
          {/* Arms */}
          <Rect x="3" y="7" width="1" height="2" fill={color} />
          <Rect x="12" y="7" width="1" height="2" fill={color} />
        </Svg>
      );
    
    case 'sad':
      return (
        <Svg width={width} height={height} viewBox="0 0 16 16">
          {/* Child body */}
          <Rect x="4" y="4" width="8" height="8" fill={color} />
          {/* Left eye */}
          <Rect x="6" y="6" width="1" height="1" fill="black" />
          {/* Right eye */}
          <Rect x="9" y="6" width="1" height="1" fill="black" />
          {/* Frown */}
          <Rect x="6" y="10" width="4" height="1" fill="black" />
          {/* Tear */}
          <Rect x="10" y="7" width="1" height="3" fill="#33CCFF" />
          {/* Arms (drooping) */}
          <Rect x="3" y="9" width="1" height="2" fill={color} />
          <Rect x="12" y="9" width="1" height="2" fill={color} />
        </Svg>
      );
    
    case 'sleeping':
      return (
        <Svg width={width} height={height} viewBox="0 0 16 16">
          {/* Child body */}
          <Rect x="4" y="4" width="8" height="8" fill={color} />
          {/* Closed eyes */}
          <Rect x="6" y="7" width="1" height="1" fill="black" />
          <Rect x="9" y="7" width="1" height="1" fill="black" />
          {/* Z bubble */}
          <Path d="M11,3 h2 v1 h-1 v1 h1 v1 h-2 v-1 h1 v-1 h-1 z" fill="white" />
          {/* Arms (relaxed) */}
          <Rect x="3" y="8" width="1" height="1" fill={color} />
          <Rect x="12" y="8" width="1" height="1" fill={color} />
        </Svg>
      );
  }
};

// Teen Pet renderer
const renderTeenPet = (mood: PetMood, color: string, width: number, height: number) => {
  switch (mood) {
    case 'happy':
      return (
        <Svg width={width} height={height} viewBox="0 0 16 16">
          {/* Teen body */}
          <Rect x="3" y="3" width="10" height="10" fill={color} />
          {/* Left eye */}
          <Rect x="5" y="5" width="2" height="2" fill="black" />
          {/* Right eye */}
          <Rect x="9" y="5" width="2" height="2" fill="black" />
          {/* Smile */}
          <Rect x="6" y="9" width="4" height="1" fill="black" />
          {/* Arms */}
          <Rect x="2" y="6" width="1" height="4" fill={color} />
          <Rect x="13" y="6" width="1" height="4" fill={color} />
          {/* Hair spikes */}
          <Rect x="5" y="2" width="1" height="1" fill={color} />
          <Rect x="8" y="2" width="1" height="1" fill={color} />
          <Rect x="11" y="2" width="1" height="1" fill={color} />
        </Svg>
      );
    
    case 'sad':
      return (
        <Svg width={width} height={height} viewBox="0 0 16 16">
          {/* Teen body */}
          <Rect x="3" y="3" width="10" height="10" fill={color} />
          {/* Left eye */}
          <Rect x="5" y="5" width="2" height="2" fill="black" />
          {/* Right eye */}
          <Rect x="9" y="5" width="2" height="2" fill="black" />
          {/* Frown */}
          <Rect x="5" y="11" width="6" height="1" fill="black" />
          {/* Tears */}
          <Rect x="6" y="7" width="1" height="3" fill="#33CCFF" />
          <Rect x="10" y="7" width="1" height="3" fill="#33CCFF" />
          {/* Arms (drooping) */}
          <Rect x="2" y="9" width="1" height="4" fill={color} />
          <Rect x="13" y="9" width="1" height="4" fill={color} />
          {/* Hair spikes (drooping) */}
          <Rect x="5" y="2" width="1" height="1" fill={color} />
          <Rect x="11" y="2" width="1" height="1" fill={color} />
        </Svg>
      );
    
    case 'sleeping':
      return (
        <Svg width={width} height={height} viewBox="0 0 16 16">
          {/* Teen body */}
          <Rect x="3" y="3" width="10" height="10" fill={color} />
          {/* Closed eyes */}
          <Rect x="5" y="6" width="2" height="1" fill="black" />
          <Rect x="9" y="6" width="2" height="1" fill="black" />
          {/* Z bubble */}
          <Path d="M12,2 h2 v1 h-1 v1 h1 v1 h-2 v-1 h1 v-1 h-1 z" fill="white" />
          <Rect x="14" y="3" width="1" height="1" fill="white" />
          {/* Arms (relaxed) */}
          <Rect x="2" y="8" width="1" height="1" fill={color} />
          <Rect x="13" y="8" width="1" height="1" fill={color} />
          {/* Hair spikes (relaxed) */}
          <Rect x="8" y="2" width="1" height="1" fill={color} />
        </Svg>
      );
  }
};

// Adult Pet renderer
const renderAdultPet = (mood: PetMood, color: string, width: number, height: number) => {
  switch (mood) {
    case 'happy':
      return (
        <Svg width={width} height={height} viewBox="0 0 16 16">
          {/* Adult body */}
          <Rect x="2" y="2" width="12" height="12" fill={color} />
          {/* Left eye */}
          <Rect x="4" y="4" width="2" height="2" fill="black" />
          {/* Right eye */}
          <Rect x="10" y="4" width="2" height="2" fill="black" />
          {/* Smile */}
          <Path d="M5,9 h2 v1 h2 v1 h-6 v-1 h2 z" fill="black" />
          {/* Arms */}
          <Rect x="1" y="5" width="1" height="6" fill={color} />
          <Rect x="14" y="5" width="1" height="6" fill={color} />
          {/* Crown */}
          <Rect x="4" y="1" width="8" height="1" fill="#FFD700" />
          <Rect x="5" y="0" width="1" height="1" fill="#FFD700" />
          <Rect x="7" y="0" width="2" height="1" fill="#FFD700" />
          <Rect x="10" y="0" width="1" height="1" fill="#FFD700" />
        </Svg>
      );
    
    case 'sad':
      return (
        <Svg width={width} height={height} viewBox="0 0 16 16">
          {/* Adult body */}
          <Rect x="2" y="2" width="12" height="12" fill={color} />
          {/* Left eye */}
          <Rect x="4" y="4" width="2" height="2" fill="black" />
          {/* Right eye */}
          <Rect x="10" y="4" width="2" height="2" fill="black" />
          {/* Frown */}
          <Rect x="4" y="11" width="8" height="1" fill="black" />
          {/* Tears */}
          <Rect x="5" y="6" width="1" height="4" fill="#33CCFF" />
          <Rect x="11" y="6" width="1" height="4" fill="#33CCFF" />
          {/* Arms (drooping) */}
          <Rect x="1" y="10" width="1" height="4" fill={color} />
          <Rect x="14" y="10" width="1" height="4" fill={color} />
          {/* Tilted Crown */}
          <Rect x="3" y="1" width="8" height="1" fill="#FFD700" />
          <Rect x="4" y="0" width="1" height="1" fill="#FFD700" />
          <Rect x="6" y="0" width="2" height="1" fill="#FFD700" />
          <Rect x="9" y="0" width="1" height="1" fill="#FFD700" />
        </Svg>
      );
    
    case 'sleeping':
      return (
        <Svg width={width} height={height} viewBox="0 0 16 16">
          {/* Adult body */}
          <Rect x="2" y="2" width="12" height="12" fill={color} />
          {/* Closed eyes */}
          <Rect x="4" y="5" width="2" height="1" fill="black" />
          <Rect x="10" y="5" width="2" height="1" fill="black" />
          {/* Z bubble */}
          <Path d="M13,1 h2 v1 h-1 v1 h1 v1 h-2 v-1 h1 v-1 h-1 z" fill="white" />
          <Rect x="11" y="3" width="1" height="1" fill="white" />
          <Rect x="15" y="3" width="1" height="1" fill="white" />
          {/* Arms (relaxed) */}
          <Rect x="1" y="7" width="1" height="2" fill={color} />
          <Rect x="14" y="7" width="1" height="2" fill={color} />
          {/* Crown on side */}
          <Path d="M14,12 h1 v-8 h1 v8 z" fill="#FFD700" />
        </Svg>
      );
  }
};

export default PetSVG;