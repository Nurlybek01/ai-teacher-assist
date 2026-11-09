import { StyleSheet, View } from 'react-native';
import { Text } from 'react-native-paper';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { strings } from '@/config/strings.ru';

export default function AnalyticsScreen() {
  const insets = useSafeAreaInsets();

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
      <Text variant="headlineMedium">{strings.navigation.analytics}</Text>

      <Text variant="bodyMedium" style={styles.description}>
        Здесь будет аналитика успеваемости класса и отдельных учеников.
      </Text>
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