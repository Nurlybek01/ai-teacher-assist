import { useLocalSearchParams, useRouter } from 'expo-router';
import { FlatList, StyleSheet, View } from 'react-native';
import { ActivityIndicator, Button, Card, Text } from 'react-native-paper';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { strings } from '@/config/strings.ru';
import { appSpacing, paperTheme } from '@/config/theme';
import { useTest } from '@/features/tests/hooks/use-test';
import type { SingleChoiceQuestion } from '@/features/tests/types';

export function TestDetails() {
  const insets = useSafeAreaInsets();
  const router = useRouter();
  const { id } = useLocalSearchParams<{ id: string }>();

  const { data, isPending, isError, isFetching, refetch } = useTest(id);

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
    );
  }

  if (!data) {
    return (
      <View style={styles.centered}>
        <Text variant="bodyLarge" style={styles.message}>
          {strings.tests.notFound}
        </Text>

        <Button
          mode="outlined"
          onPress={() => {
            router.back();
          }}
        >
          {strings.common.back}
        </Button>
      </View>
    );
  }

  const maximumScore = data.questions.reduce(
    (total, question) => total + question.points,
    0,
  );

  return (
    <View
      style={[
        styles.container,
        {
          paddingTop: insets.top + appSpacing.md,
        },
      ]}
    >
      <FlatList
        data={data.questions}
        keyExtractor={(item) => item.id}
        style={styles.list}
        contentContainerStyle={[
          styles.listContent,
          {
            paddingBottom: insets.bottom + appSpacing.lg,
          },
        ]}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <View style={styles.header}>
            <Text variant="headlineMedium">{data.title}</Text>

            <Text variant="bodyMedium" style={styles.secondaryText}>
              {data.description}
            </Text>

            <Card mode="outlined">
              <Card.Content style={styles.cardContent}>
                <Text variant="labelLarge" style={styles.status}>
                  {strings.tests.statuses[data.status]}
                </Text>

                <Text variant="bodyMedium">{data.className}</Text>

                <Text variant="bodyMedium">
                  {strings.tests.questionCount}: {data.questions.length}
                </Text>

                <Text variant="bodyMedium">
                  {strings.tests.maximumScore}: {maximumScore}
                </Text>

                <Text variant="bodyMedium">
                  {strings.tests.timeLimit}: {data.timeLimitMinutes}
                </Text>
              </Card.Content>
            </Card>

            <Text variant="titleMedium">{strings.tests.questionsTitle}</Text>
          </View>
        }
        renderItem={({ item, index }) => (
          <QuestionCard question={item} index={index} />
        )}
      />
    </View>
  );
}

type QuestionCardProps = {
  question: SingleChoiceQuestion;
  index: number;
};

function QuestionCard({ question, index }: QuestionCardProps) {
  return (
    <Card mode="outlined">
      <Card.Content style={styles.cardContent}>
        <Text variant="labelLarge">
          {strings.tests.questionNumber}: {index + 1}
        </Text>

        <Text variant="bodyLarge">{question.text}</Text>

        <Text variant="bodyMedium" style={styles.secondaryText}>
          {strings.tests.topic}: {question.topic}
        </Text>

        <Text variant="labelLarge">{strings.tests.optionsTitle}</Text>

        <View style={styles.options}>
          {question.options.map((option) => (
            <View key={option.id} style={styles.option}>
              <Text variant="bodyMedium">{option.text}</Text>
            </View>
          ))}
        </View>
      </Card.Content>
    </Card>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: paperTheme.colors.background,
    paddingHorizontal: appSpacing.lg,
  },
  centered: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: appSpacing.md,
    padding: appSpacing.lg,
    backgroundColor: paperTheme.colors.background,
  },
  list: {
    flex: 1,
  },
  listContent: {
    gap: appSpacing.md,
  },
  header: {
    gap: appSpacing.md,
    paddingBottom: appSpacing.md,
  },
  cardContent: {
    gap: appSpacing.sm,
  },
  options: {
    gap: appSpacing.sm,
  },
  option: {
    padding: appSpacing.sm,
    borderRadius: paperTheme.roundness,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: paperTheme.colors.outlineVariant,
  },
  status: {
    color: paperTheme.colors.primary,
  },
  secondaryText: {
    color: paperTheme.colors.onSurfaceVariant,
  },
  message: {
    textAlign: 'center',
    color: paperTheme.colors.onSurfaceVariant,
  },
});