import { Link } from 'expo-router';
import { FlatList, StyleSheet, View } from 'react-native';
import { ActivityIndicator, Button, Card, Text } from 'react-native-paper';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { strings } from '@/config/strings.ru';
import { appSpacing, paperTheme } from '@/config/theme';
import { useTests } from '@/features/tests/hooks/use-tests';
import type { AssessmentTest } from '@/features/tests/types';

function getMaximumScore(test: AssessmentTest): number {
  return test.questions.reduce(
    (total, question) => total + question.points,
    0,
  );
}

export function TestsList() {
  const insets = useSafeAreaInsets();
  const { data, isPending, isError, isFetching, refetch } = useTests();

  return (
    <View
      style={[
        styles.container,
        {
          paddingTop: insets.top + appSpacing.md,
        },
      ]}
    >
      <Text variant="headlineMedium">{strings.navigation.tests}</Text>

      {isPending ? (
        <View style={styles.centered}>
          <ActivityIndicator size="large" />
          <Text variant="bodyMedium">{strings.common.loading}</Text>
        </View>
      ) : isError ? (
        <View style={styles.centered}>
          <Text variant="bodyLarge" style={styles.message}>
            {strings.tests.loadError}
          </Text>

          <Button
            mode="outlined"
            loading={isFetching}
            disabled={isFetching}
            onPress={() => {
              void refetch();
            }}
          >
            {strings.common.retry}
          </Button>
        </View>
      ) : (
        <FlatList
          data={data}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.listContent}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={
            <View style={styles.centered}>
              <Text variant="bodyLarge" style={styles.message}>
                {strings.tests.empty}
              </Text>
            </View>
          }
          renderItem={({ item }) => {
            return (
              <Link
                href={{
                  pathname: '/tests/[id]',
                  params: { id: item.id },
                }}
                asChild
              >
                <Card mode="outlined">
                  <Card.Content style={styles.cardContent}>
                    <View style={styles.statusRow}>
                      <Text variant="labelLarge" style={styles.status}>
                        {strings.tests.statuses[item.status]}
                      </Text>

                      <Text variant="labelLarge">{item.className}</Text>
                    </View>

                    <Text variant="titleLarge">{item.title}</Text>

                    <Text variant="bodyMedium" style={styles.secondaryText}>
                      {item.description}
                    </Text>

                    <View style={styles.details}>
                      <Text variant="bodyMedium">
                        {strings.tests.questionCount}: {item.questions.length}
                      </Text>

                      <Text variant="bodyMedium">
                        {strings.tests.maximumScore}: {getMaximumScore(item)}
                      </Text>

                      <Text variant="bodyMedium">
                        {strings.tests.timeLimit}: {item.timeLimitMinutes}
                      </Text>
                    </View>
                  </Card.Content>
                </Card>
              </Link>
            );
          }}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: paperTheme.colors.background,
    paddingHorizontal: appSpacing.lg,
    gap: appSpacing.md,
  },
  centered: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: appSpacing.md,
    padding: appSpacing.lg,
  },
  listContent: {
    flexGrow: 1,
    gap: appSpacing.md,
    paddingBottom: appSpacing.lg,
  },
  cardContent: {
    gap: appSpacing.md,
  },
  statusRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: appSpacing.sm,
  },
  status: {
    color: paperTheme.colors.primary,
  },
  secondaryText: {
    color: paperTheme.colors.onSurfaceVariant,
  },
  details: {
    gap: appSpacing.xs,
  },
  message: {
    textAlign: 'center',
    color: paperTheme.colors.onSurfaceVariant,
  },
});