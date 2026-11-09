import { MD3LightTheme } from 'react-native-paper';

// Базовая светлая тема приложения для React Native Paper.
export const paperTheme = {
  ...MD3LightTheme,
  colors: {
    ...MD3LightTheme.colors,
    primary: '#2563EB',
    onPrimary: '#FFFFFF',
    primaryContainer: '#DBEAFE',
    onPrimaryContainer: '#1E3A8A',

    background: '#F8FAFC',
    surface: '#FFFFFF',
    surfaceVariant: '#E2E8F0',
    onSurface: '#0F172A',
    onSurfaceVariant: '#475569',

    error: '#DC2626',
    onError: '#FFFFFF',
    outline: '#CBD5E1',
  },
};

export const appSpacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
} as const;

export const appRadius = {
  sm: 8,
  md: 12,
  lg: 16,
  full: 999,
} as const;