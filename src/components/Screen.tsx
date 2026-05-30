import React from 'react';
import { StatusBar, StyleSheet, View, type ViewStyle } from 'react-native';
import { SafeAreaView, type Edge } from 'react-native-safe-area-context';

import { useTheme } from '../theme';
import type { Spacing } from '../theme/tokens';

type Props = {
  children: React.ReactNode;
  padding?: Spacing;
  edges?: readonly Edge[];
  style?: ViewStyle;
};

export function Screen({
  children,
  padding = 'lg',
  edges = ['top', 'left', 'right'],
  style,
}: Props) {
  const theme = useTheme();

  return (
    <SafeAreaView
      edges={edges}
      style={[styles.root, { backgroundColor: theme.colors.background }]}
    >
      <StatusBar
        barStyle={theme.scheme === 'dark' ? 'light-content' : 'dark-content'}
        backgroundColor={theme.colors.background}
      />
      <View style={[styles.content, { padding: theme.spacing[padding] }, style]}>
        {children}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  content: {
    flex: 1,
  },
});
