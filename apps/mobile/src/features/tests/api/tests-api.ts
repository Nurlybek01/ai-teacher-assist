import type { AssessmentTest } from '@/features/tests/types';
import { mockTests } from '@/mocks/tests';

const MOCK_REQUEST_DELAY_MS = 400;

function delay(): Promise<void> {
  return new Promise((resolve) => {
    setTimeout(resolve, MOCK_REQUEST_DELAY_MS);
  });
}

// Возвращаем копии, чтобы UI не мог случайно изменить исходные моки.
function copyTest(test: AssessmentTest): AssessmentTest {
  return {
    ...test,
    questions: test.questions.map((question) => ({
      ...question,
      options: question.options.map((option) => ({ ...option })),
    })),
  };
}

export async function getTests(): Promise<AssessmentTest[]> {
  await delay();

  return mockTests.map(copyTest);
}

export async function getTestById(
  testId: string,
): Promise<AssessmentTest | null> {
  await delay();

  const test = mockTests.find((item) => item.id === testId);

  return test ? copyTest(test) : null;
}