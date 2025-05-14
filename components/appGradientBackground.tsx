import { LinearGradient } from 'expo-linear-gradient'; // or react-native-linear-gradient
import React from 'react';
import { ColorValue, ViewStyle } from 'react-native';

type GradientProps = {
  children?: React.ReactNode;
  style?: ViewStyle;
  className?: string;
  colors?: [ColorValue, ColorValue, ...ColorValue[]];

  start?: { x: number; y: number };
  end?: { x: number; y: number };
};

const AppGradientBackground = ({
  children,
  style,
  className = 'absolute flex w-full h-full z-0 rounded-xl',
  colors = ['#000231', '#002901', '#aa5f3d'],
  start = { x: 0, y: 0 },
  end = { x: 1, y: 1 },
}: GradientProps) => {
  return (
    <LinearGradient
      colors={colors}
      start={start}
      end={end}
      className={className}
      style={style}
    >
      {children}
    </LinearGradient>
  );
};

export default AppGradientBackground;
