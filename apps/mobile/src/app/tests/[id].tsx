import { Stack, useLocalSearchParams } from 'expo-router';
import { ScrollView, StyleSheet, View } from 'react-native';
import { ActivityIndicator, Button, Card, Chip, Text, useTheme } from 'react-native-paper';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { strings } from '@/config/strings.ru';
import { useTest } from '@/features/tests/hooks/use-test';
import type { TestStatus } from '@/features/tests/types';

const getStatusLabel = (status: TestStatus): string => {
  if (status === 'draft') {
    return strings.tests.statusDraft;
  }

  return strings.tests.statusReady;
};

export default function TestDetailsScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const insets = useSafeAreaInsets();
  const theme = useTheme();
  const testQuery = useTest(id ?? '');

  const test = testQuery.data;

  return (
    <>
      <Stack.Screen
        options={{
          title: test?.title ?? strings.tests.title,
        }}
      />

      <ScrollView
        style={styles.container}
        contentContainerStyle={[
          styles.content,
          {
            paddingTop: insets.top + 16,
            paddingBottom: insets.bottom + 24,
          },
        ]}
      >
        {testQuery.isPending && (
          <View style={styles.centeredContainer}>
            <ActivityIndicator size="large" />
            <Text variant="bodyMedium">{strings.common.loading}</Text>
          </View>
        )}

        {testQuery.isError && (
          <View style={styles.centeredContainer}>
            <Text variant="bodyMedium" style={styles.centeredText}>
              {strings.tests.error}
            </Text>

            <Button
              mode="contained"
              onPress={() => {
                void testQuery.refetch();
              }}
            >
              {strings.common.retry}
            </Button>
          </View>
        )}

        {test && (
          <>
            <Card style={styles.summaryCard}>
              <Card.Content>
                <Text variant="headlineSmall">{test.title}</Text>

                <Text variant="bodyMedium" style={styles.description}>
                  {test.description}
                </Text>

                <View style={styles.metaRow}>
                  <Chip mode="outlined">{getStatusLabel(test.status)}</Chip>
                  <Chip mode="outlined">{test.className}</Chip>
                  <Chip mode="outlined">
                    {test.timeLimitMinutes} {strings.tests.minutes}
                  </Chip>
                </View>

                <Text variant="bodySmall" style={styles.questionsCount}>
                  {strings.tests.questionsCount}: {test.questions.length}
                </Text>
              </Card.Content>
            </Card>

            {test.questions.map((question, index) => (
              <Card key={question.id} style={styles.questionCard}>
                <Card.Content>
                  <Text variant="titleMedium">
                    {index + 1}. {question.text}
                  </Text>

                  <Text variant="bodySmall" style={styles.topic}>
                    {question.topic}
                  </Text>

                  {question.options.map((option) => {
                    const isCorrect = option.id === question.correctOptionId;

                    return (
                      <View key={option.id} style={styles.optionRow}>
                        <Text
                          variant="bodyMedium"
                          style={[
                            styles.optionText,
                            isCorrect && {
                              color: theme.colors.primary,
                              fontWeight: '600',
                            },
                          ]}
                        >
                          {option.text}
                        </Text>

                        {isCorrect && (
                          <Chip compact mode="flat">
                            {strings.tests.correctAnswer}
                          </Chip>
                        )}
                      </View>
                    );
                  })}
                </Card.Content>
              </Card>
            ))}
          </>
        )}
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    paddingHorizontal: 24,
    gap: 16,
  },
  centeredContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    gap: 16,
    paddingVertical: 48,
  },
  centeredText: {
    textAlign: 'center',
  },
  summaryCard: {
    marginBottom: 0,
  },
  description: {
    marginTop: 8,
    opacity: 0.8,
  },
  metaRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    marginTop: 12,
  },
  questionsCount: {
    marginTop: 12,
    opacity: 0.7,
  },
  questionCard: {
    marginBottom: 0,
  },
  topic: {
    marginTop: 4,
    opacity: 0.7,
  },
  optionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 12,
    marginTop: 12,
  },
  optionText: {
    flex: 1,
  },
});