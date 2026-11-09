// Базовые значения интерфейса приложения.
// Пока это собственная тема для стилей React Native;
// позже подключим её к React Native Paper.

export const theme = {
  colors: {
    primary: '#2563EB',
    primaryContainer: '#DBEAFE',
    onPrimary: '#FFFFFF',

    background: '#F8FAFC',
    surface: '#FFFFFF',
    surfaceVariant: '#E2E8F0',

    text: '#0F172A',
    textSecondary: '#475569',
    textDisabled: '#94A3B8',

    success: '#16A34A',
    warning: '#D97706',
    error: '#DC2626',

    outline: '#CBD5E1',
  },
  spacing: {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
  },
  radius: {
    sm: 8,
    md: 12,
    lg: 16,
    full: 999,
  },
} as const;

export type AppTheme = typeof theme;