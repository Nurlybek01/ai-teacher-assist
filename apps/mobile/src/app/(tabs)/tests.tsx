import { useRouter } from 'expo-router';
import { FlatList, StyleSheet, View } from 'react-native';
import { ActivityIndicator, Button, Card, Text, useTheme } from 'react-native-paper';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { strings } from '@/config/strings.ru';
import { useTests } from '@/features/tests/hooks/use-tests';
import type { AssessmentTest, TestStatus } from '@/features/tests/types';

const getStatusLabel = (status: TestStatus): string => {
  if (status === 'draft') {
    return strings.tests.statusDraft;
  }

  return strings.tests.statusReady;
};

const TestCard = ({
  test,
  onPress,
}: {
  test: AssessmentTest;
  onPress: (testId: string) => void;
}) => {
  const theme = useTheme();

  return (
    <Card
      style={styles.card}
      onPress={() => {
        onPress(test.id);
      }}
    >
      <Card.Content>
        <View style={styles.cardHeader}>
          <Text variant="titleMedium" style={styles.testTitle}>
            {test.title}
          </Text>

          <Text
            variant="labelSmall"
            style={[
              styles.status,
              {
                color:
                  test.status === 'ready'
                    ? theme.colors.primary
                    : theme.colors.onSurfaceVariant,
              },
            ]}
          >
            {getStatusLabel(test.status)}
          </Text>
        </View>

        <Text variant="bodyMedium" style={styles.description}>
          {test.description}
        </Text>

        <Text variant="bodySmall" style={styles.meta}>
          {test.className} · {strings.tests.questionsCount}: {test.questions.length} ·{' '}
          {strings.tests.timeLimit}: {test.timeLimitMinutes} {strings.tests.minutes}
        </Text>
      </Card.Content>
    </Card>
  );
};

export default function TestsScreen() {
  const insets = useSafeAreaInsets();
  const router = useRouter();
  const testsQuery = useTests();

  const openTest = (testId: string) => {
    router.push({
      pathname: '/tests/[id]',
      params: {
        id: testId,
      },
    });
  };

  if (testsQuery.isPending) {
    return (
      <View style={styles.centeredContainer}>
        <ActivityIndicator size="large" />
        <Text variant="bodyMedium" style={styles.centeredText}>
          {strings.common.loading}
        </Text>
      </View>
    );
  }

  if (testsQuery.isError) {
    return (
      <View style={styles.centeredContainer}>
        <Text variant="bodyMedium" style={styles.centeredText}>
          {strings.tests.error}
        </Text>

        <Button
          mode="contained"
          onPress={() => {
            void testsQuery.refetch();
          }}
        >
          {strings.common.retry}
        </Button>
      </View>
    );
  }

  const tests = testsQuery.data ?? [];

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
      <Text variant="headlineMedium">{strings.tests.title}</Text>

      <Text variant="bodyMedium" style={styles.description}>
        {strings.tests.description}
      </Text>

      <FlatList
        data={tests}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContent}
        renderItem={({ item }) => <TestCard test={item} onPress={openTest} />}
        ListEmptyComponent={
          <Text variant="bodyMedium" style={styles.emptyText}>
            {strings.tests.empty}
          </Text>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
  },
  centeredContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 16,
    padding: 24,
  },
  centeredText: {
    textAlign: 'center',
  },
  description: {
    marginTop: 4,
    marginBottom: 16,
    opacity: 0.7,
  },
  listContent: {
    gap: 12,
    paddingBottom: 24,
  },
  card: {
    marginBottom: 0,
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 12,
  },
  testTitle: {
    flex: 1,
  },
  status: {
    fontWeight: '600',
  },
  meta: {
    marginTop: 8,
    opacity: 0.7,
  },
  emptyText: {
    textAlign: 'center',
    marginTop: 32,
    opacity: 0.7,
  },
});