import { useMemo, useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { ActivityIndicator, Card, Searchbar, Text } from 'react-native-paper';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { strings } from '@/config/strings.ru';
import { useStudents } from '@/features/students/hooks/use-students';
import type { StudentListItem } from '@/features/students/types';

export default function StudentsScreen() {
  const insets = useSafeAreaInsets();
  const [searchQuery, setSearchQuery] = useState('');

  const { data, isPending, isError } = useStudents();

  const filteredStudents = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();

    if (!query || !data) {
      return data ?? [];
    }

    return data.filter((student) => {
      const fullName =
        `${student.firstName} ${student.lastName}`.toLowerCase();

      return fullName.includes(query);
    });
  }, [data, searchQuery]);

  if (isPending) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size="large" />
        <Text variant="bodyMedium">{strings.common.loading}</Text>
      </View>
    );
  }

  if (isError) {
    return (
      <View style={styles.centered}>
        <Text variant="titleMedium">{strings.common.error}</Text>

        <Text variant="bodyMedium" style={styles.description}>
          Не удалось загрузить список учеников.
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
      <Text variant="headlineMedium">{strings.navigation.students}</Text>

      <Searchbar
        placeholder="Поиск по имени или фамилии"
        value={searchQuery}
        onChangeText={setSearchQuery}
      />

      <FlatList
        data={filteredStudents}
        keyExtractor={(item: StudentListItem) => item.id}
        renderItem={({ item }) => (
          <Card style={styles.card}>
            <Card.Title
              title={`${item.firstName} ${item.lastName}`}
              subtitle={item.className}
            />

            <Card.Content>
              <Text variant="bodyMedium">
                Средний балл: {item.averageScore}
              </Text>

              <Text variant="bodyMedium">
                Завершено тестов: {item.completedTests}
              </Text>
            </Card.Content>
          </Card>
        )}
        ListEmptyComponent={
          <Text variant="bodyMedium" style={styles.emptyText}>
            Ученики не найдены
          </Text>
        }
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
      />
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
  listContent: {
    gap: 12,
    paddingBottom: 24,
  },
  card: {
    width: '100%',
  },
  emptyText: {
    textAlign: 'center',
    opacity: 0.7,
  },
});