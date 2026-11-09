import type { AssessmentTest } from '@/features/tests/types';
import { mockTests } from '@/mocks/tests';

// Небольшая задержка имитирует будущий запрос к Supabase.
const delay = (milliseconds: number): Promise<void> => {
  return new Promise((resolve) => {
    setTimeout(resolve, milliseconds);
  });
};

export async function getTests(): Promise<AssessmentTest[]> {
  await delay(300);

  return [...mockTests];
}

export async function getTest(testId: string): Promise<AssessmentTest> {
  await delay(250);

  const test = mockTests.find((item) => item.id === testId);

  if (!test) {
    throw new Error(`Тест с идентификатором "${testId}" не найден`);
  }

  return { ...test };
}