import { useLocalSearchParams } from 'expo-router';
import { StyleSheet, View } from 'react-native';
import { ActivityIndicator, Card, Text } from 'react-native-paper';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { strings } from '@/config/strings.ru';
import { useStudent } from '@/features/students/hooks/use-student';

export default function StudentProfileScreen() {
  const insets = useSafeAreaInsets();
  const { id } = useLocalSearchParams<{ id: string }>();

  const studentId = typeof id === 'string' ? id : '';
  const { data, isPending, isError } = useStudent(studentId);

  if (isPending) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size="large" />
        <Text variant="bodyMedium">{strings.common.loading}</Text>
      </View>
    );
  }

  if (isError || !data) {
    return (
      <View style={styles.centered}>
        <Text variant="titleMedium">{strings.common.error}</Text>

        <Text variant="bodyMedium" style={styles.description}>
          Не удалось загрузить профиль ученика.
        </Text>
      </View>
    );
  }

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
      <Card style={styles.card}>
        <Card.Title
          title={`${data.firstName} ${data.lastName}`}
          subtitle={data.className}
        />

        <Card.Content>
          <Text variant="bodyMedium">
            Средний балл: {data.averageScore}
          </Text>

          <Text variant="bodyMedium">
            Завершено тестов: {data.completedTests}
          </Text>
        </Card.Content>
      </Card>

      <Card style={styles.card}>
        <Card.Title title="Статистика" />

        <Card.Content>
          <Text variant="bodyMedium">
            Здесь появятся результаты по темам и тестам.
          </Text>
        </Card.Content>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    gap: 16,
  },
  centered: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 12,
    padding: 24,
  },
  description: {
    opacity: 0.7,
    textAlign: 'center',
  },
  card: {
    width: '100%',
  },
});