import { StyleSheet, View } from 'react-native';
import { Button, Text } from 'react-native-paper';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { strings } from '@/config/strings.ru';
import { useAuthStore } from '@/features/auth/store/auth-store';

export default function SettingsScreen() {
  const insets = useSafeAreaInsets();
  const logout = useAuthStore((state) => state.logout);

  return (
    <View
      style={[
        styles.container,
        {
          paddingTop: insets.top,
          paddingBottom: insets.bottom,
        },
      ]}
    >
      <Text variant="headlineMedium">{strings.navigation.settings}</Text>

      <Text variant="bodyMedium" style={styles.description}>
        Здесь будут настройки профиля учителя.
      </Text>

      <Button mode="contained" onPress={logout}>
        Выйти
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    gap: 12,
  },
  description: {
    opacity: 0.7,
  },
});