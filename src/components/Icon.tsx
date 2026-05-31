import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

export type IconName = string;

type IconProps = {
  name: IconName;
  size?: number;
  color: string;
};

export function Icon({ name, size = 24, color }: IconProps) {
  return <Ionicons name={name} size={size} color={color} />;
}
